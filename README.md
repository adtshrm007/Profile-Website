# Aditya Sharma — Premium Developer Portfolio

A cinematic, animation-rich portfolio website designed and built for a Full Stack Developer. The project focuses on high-end editorial typography, smooth scroll-based interactions, and a clean, premium dark theme aesthetic.

![Hero Preview](https://via.placeholder.com/1200x600/080808/e8ff8b?text=Aditya+Sharma+Portfolio)

## 🚀 Features

*   **Cinematic GSAP Animations**: Custom letter-by-letter split text staggers, timeline-based entry animations, and scroll-aware reveals.
*   **ScrollTrigger Integration**: Smooth element reveals, staggered list animations, and parallax-style interactions on scroll.
*   **Custom Micro-interactions**: A highly optimized RAF-based magnetic custom dual-cursor and hover state detection.
*   **Responsive Editorial Design**: Fluid typography scaling with `clamp()`, dynamic grid layouts, and mobile-first responsiveness without breaking the premium feel.
*   **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS v4.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [GSAP](https://gsap.com/) (GreenSock Animation Platform) + ScrollTrigger
*   **Typography**: DM Serif Display & Inter (Google Fonts)

## 📦 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── About.jsx         # Staggered typography and text reveals
│   │   ├── Contact.jsx       # Large footer typography and social links
│   │   ├── CustomCursor.jsx  # RAF-based custom dual-ring cursor
│   │   ├── Hero.jsx          # Split-text animations and blob parallax
│   │   ├── Navbar.jsx        # Scroll-aware glassmorphic header
│   │   └── Projects.jsx      # Alternating luminosity blend project cards
│   ├── data/
│   │   └── portfolio.js      # Centralized data (Skills, Projects, Bio)
│   ├── App.jsx               # Main assembly
│   ├── main.jsx              # Application entry point
│   └── index.css             # Design tokens, custom noise layer, global styles
├── index.html
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adtshrm007/Profile-Website.git
   cd Profile-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:5173`.*

## 🏗️ Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will output the static assets to the `dist` directory, which can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 🎨 Design System

*   **Background**: `#080808` (Deep Dark) with an SVG fractal noise overlay for texture.
*   **Accent Color**: `#e8ff8b` (Lime Yellow)
*   **Text Primary**: `#f0f0f0`
*   **Text Muted**: `#888888`
*   **Border**: `rgba(255, 255, 255, 0.1)`

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
