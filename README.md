# Personal Portfolio Website

A responsive personal portfolio website built with React, Framer Motion, and modern UI libraries.

## Features

- Responsive design that works on all devices
- Multiple theme options (Light, Dark, Blue)
- Interactive animations powered by Framer Motion
- Project showcase with filtering functionality
- Contact form with validation
- Real-time date and time display

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or above)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation

1. Unzip the project files to your desired location.

2. Navigate to the project directory in your terminal:
   ```bash
   cd personal-portfolio-website
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `build` folder.

## Deploying to GitHub Pages

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website"
   ```

2. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   # or
   yarn add --dev gh-pages
   ```

3. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     // other scripts...
   }
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ContactForm.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   ├── ThemeToggle.js
│   │   └── TimeDisplay.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── projects.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Personal Information
- Update your personal information in `src/components/Hero.js`
- Change social media links in `src/components/Hero.js` and `src/components/Footer.js`

### Projects
- Add or modify your projects in `src/data/projects.js`

### Styling
- Main styling variables can be modified in `src/App.css`
- Theme colors can be adjusted in `src/contexts/ThemeContext.js`

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Font Awesome](https://fontawesome.com/) for icons

---

Created by [Your Name] - [Your Website](https://yourwebsite.com)