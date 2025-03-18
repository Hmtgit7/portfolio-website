# Personal Portfolio Website

A responsive personal portfolio website built with React, Framer Motion, and modern UI libraries.

## 🚀 Live Demo

👉 [https://portfolio-dot-app.netlify.app](https://portfolio-dot-app.netlify.app)

## Features

- Responsive design that works on all devices
- Multiple theme options (Light, Dark, Blue)
- Interactive animations powered by Framer Motion
- Project showcase with filtering functionality
- Contact form with validation
- Real-time date and time display

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or above)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hmtgit7/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## 🚀 Running the Project Locally

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```
This will create an optimized build in the `build` folder.

## 🌐 Deploying to Netlify

1. Push your code to GitHub:  
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [Netlify](https://www.netlify.com) and log in.

3. Click on **"Add new site"** → **"Import from Git"**.

4. Select your GitHub repository (`portfolio-website`).

5. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`

6. Click **"Deploy site"**.

✅ Your site is live at [https://portfolio-dot-app.netlify.app](https://portfolio-dot-app.netlify.app)

## 📁 Project Structure

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

## 🛠️ Customization

### 🔥 Personal Information
- Update your personal information in `src/components/Hero.js`
- Change social media links in `src/components/Hero.js` and `src/components/Footer.js`

### 💻 Projects
- Add or modify your projects in `src/data/projects.js`

### 🎨 Styling
- Main styling variables can be modified in `src/App.css`
- Theme colors can be adjusted in `src/contexts/ThemeContext.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Acknowledgements

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Font Awesome](https://fontawesome.com/) for icons

---

✨ Created by [Hemant Gehlod](https://hemant-gehlod.netlify.app)