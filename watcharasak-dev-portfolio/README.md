# Watcharasak Developer Portfolio

A modern, interactive portfolio website built with React, Vite, and Three.js showcasing my work as a Computer Engineering student and Frontend Developer.

## 🚀 Features

- **Interactive 3D Models** - Three.js powered 3D room scene and tech stack visualizations
- **Responsive Design** - Optimized for all device sizes using Tailwind CSS
- **Smooth Animations** - GSAP animations and scroll-triggered effects
- **Contact Form** - Functional contact form with EmailJS integration
- **Modern UI/UX** - Clean, professional design with gradient effects and hover animations
- **Performance Optimized** - Built with Vite for fast loading and optimal performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: GSAP 3.13.0
- **Email Service**: EmailJS
- **Development**: ESLint for code quality

## 📁 Project Structure

```
watcharasak-dev-portfolio/
├── public/
│   ├── images/           # Static images and logos
│   └── models/           # 3D model files (.glb)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── NavBar.jsx
│   │   ├── TitleHeader.jsx
│   │   └── HeroModels/   # 3D model components
│   ├── sections/         # Main page sections
│   │   ├── Hero.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── LogoSection.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── TechStack.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/        # Data and configuration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd watcharasak-dev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Sections Overview

- **Hero Section** - Animated introduction with 3D room model
- **Showcase** - Featured projects with detailed descriptions
- **Logo Section** - Animated marquee of company logos
- **Feature Cards** - Service offerings and capabilities
- **Experience** - Professional timeline with interactive cards
- **Tech Stack** - 3D visualization of technical skills
- **Contact** - Functional contact form with 3D elements
- **Footer** - Social links and copyright information

## 🌐 Deployment

This project is ready to be deployed on platforms like:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

For Vercel deployment:
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for reference.

## 🎯 Key Features Implementation

### 3D Models
- Interactive room scene with Three.js
- Animated tech stack icons
- Responsive 3D canvas

### Animations
- GSAP scroll-triggered animations
- CSS transitions and transforms
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Tailwind CSS utilities
- Flexible grid layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Watcharasak P.**
- Email: watcharasak.pro@outlook.com


---

Built with ❤️ using React, Three.js, and modern web technologies.