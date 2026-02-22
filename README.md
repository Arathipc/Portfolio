# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, a functional contact form with email integration, and CV download functionality.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🌈 Colorful floating particles background animation
- 📧 Contact form with email functionality
- 📄 CV/Resume download buttons
- 🎓 Dedicated training experience section
- 🎯 Single-page application with smooth scrolling
- 🔧 Built with Vite for fast development

## Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, AOS
- **Icons:** Lucide React
- **Backend:** Node.js, Express
- **Email:** Nodemailer

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Update the `.env` file with your values:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   PORT=3001
   ```

   **Important:** For Gmail, you need to generate an App Password:
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"
   - Use this password in `EMAIL_PASS`

4. Add your CV/Resume:
   - Replace `public/cv.pdf` with your actual CV/resume file
   - The file should be named `cv.pdf` or update the download links accordingly

5. Start the development servers:
   ```bash
   # Run both frontend and backend
   npm run dev:full

   # Or run them separately:
   # Terminal 1 - Backend
   npm run server

   # Terminal 2 - Frontend
   npm run dev
   ```

6. Open [http://localhost:5178](http://localhost:5178) in your browser

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run dev:full` - Start both frontend and backend servers
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                 # Your CV/resume file
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx           # Contains CV download button
│   │   ├── About.jsx          # Contains CV download button
│   │   ├── Training.jsx       # Dedicated training experience section
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── FloatingParticles.jsx # Background particle animation
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server.js
├── .env
├── package.json
└── README.md
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Update name, description, and social links
- `src/components/About.jsx` - Update about section content
- `src/components/Skills.jsx` - Update skills and proficiency levels
- `src/components/Projects.jsx` - Update project information and links
- `src/components/Contact.jsx` - Update contact information

### CV/Resume Download

The portfolio includes CV download buttons in two locations:

1. **Hero Section**: Primary call-to-action button alongside "Get In Touch" and "View My Work"
2. **About Section**: Secondary download button below your story

To set up CV downloads:

1. Place your CV/resume file in the `public/` folder as `cv.pdf`
2. The download will be triggered with the filename `Your_Name_CV.pdf`
3. Update the `download` attribute in both components if you want a different filename

### Styling

The project uses Tailwind CSS. Customize colors and styles in the component files or update the Tailwind configuration.

### Email Configuration

The contact form sends emails using Nodemailer. Make sure to:

1. Set up your email credentials in `.env`
2. For Gmail, use an App Password instead of your regular password
3. Update the recipient email if needed

## Deployment

### Frontend Deployment

Build the project for production:

```bash
npm run build
```

Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.).

### Backend Deployment

For production deployment of the backend:

1. Set up environment variables on your hosting platform
2. Deploy the server to a service like Heroku, Railway, or DigitalOcean
3. Update the API endpoint in `src/components/Contact.jsx` to point to your deployed backend

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
