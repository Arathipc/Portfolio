import React, { useEffect, useRef } from 'react';

const FloatingParticles = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // MERN-themed color palettes for particles
    const colorPalettes = {
      dark: [
        'rgba(77, 179, 61, 0.7)',   // MongoDB Green
        'rgba(97, 218, 251, 0.7)',  // React Blue
        'rgba(104, 160, 99, 0.7)',  // Node.js Green
        'rgba(247, 223, 30, 0.6)',  // Express.js Yellow/Gold
        'rgba(34, 197, 94, 0.7)',   // Emerald Green
        'rgba(59, 130, 246, 0.7)',  // Blue
        'rgba(16, 185, 129, 0.7)',  // Teal
        'rgba(245, 158, 11, 0.6)'   // Amber
      ],
      light: [
        'rgba(34, 197, 94, 0.8)',   // MongoDB Green (lighter)
        'rgba(59, 130, 246, 0.8)',  // React Blue
        'rgba(16, 185, 129, 0.8)',  // Node.js Green
        'rgba(245, 158, 11, 0.7)',  // Express.js Yellow
        'rgba(77, 179, 61, 0.8)',   // Dark Green
        'rgba(97, 218, 251, 0.8)',  // Light Blue
        'rgba(5, 150, 105, 0.8)',   // Dark Teal
        'rgba(251, 191, 36, 0.7)'   // Yellow
      ]
    };

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.8 + 0.2;

        // Random color from palette
        const palette = darkMode ? colorPalettes.dark : colorPalettes.light;
        this.color = palette[Math.floor(Math.random() * palette.length)];

        // Color transition properties
        this.colorIndex = Math.floor(Math.random() * palette.length);
        this.colorChangeSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Subtle size pulsing
        this.size += Math.sin(Date.now() * 0.001 + this.x) * 0.01;
        this.size = Math.max(0.5, Math.min(5, this.size));

        // Color transition
        this.colorIndex += this.colorChangeSpeed;
        const palette = darkMode ? colorPalettes.dark : colorPalettes.light;
        const colorCount = palette.length;
        this.colorIndex = this.colorIndex % colorCount;

        // Interpolate between two colors for smooth transitions
        const color1Index = Math.floor(this.colorIndex);
        const color2Index = (color1Index + 1) % colorCount;
        const t = this.colorIndex - color1Index;

        const color1 = palette[color1Index];
        const color2 = palette[color2Index];

        // Simple color interpolation (this is a basic implementation)
        this.color = color1; // For now, just use the first color
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (120 - distance) / 120 * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`; // White connections
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingParticles;