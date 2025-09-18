# Meli Palacio Portfolio

A modern, responsive portfolio website built with Next.js and Emotion styled-components, showcasing motion design and dance work.

## Features

- **Responsive Design**: Mobile-first approach with styled-components media queries
- **Modern UI**: Clean, minimalist design with smooth animations
- **Hero Section**: Full-width background image with overlay text
- **Showreel Section**: Video embed section for showcasing work
- **Projects Grid**: Interactive project previews with hover effects
- **Navigation**: Fixed navbar with social media links
- **Footer**: Contact information and additional navigation

## Tech Stack

- **Next.js 15** - React framework
- **Emotion** - CSS-in-JS styling
- **Lucide React** - Icon library
- **Next/Image** - Optimized image loading

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with navbar and footer
│   ├── page.js            # Landing page
│   └── globals.css        # Global CSS (minimal)
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── HeroSection.js     # Hero section with background
│   ├── ShowreelSection.js # Video showcase section
│   └── ProjectsSection.js # Projects grid
├── styles/
│   ├── theme.js           # Design system and theme
│   └── GlobalStyles.js    # Global styled-components
└── data/
    └── projects.js        # Projects data
```

## Customization

- Update project data in `data/projects.js`
- Modify colors and typography in `styles/theme.js`
- Replace placeholder images in `public/images/`
- Add your video URL in `components/ShowreelSection.js`

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform.
