import { ecommerce, weather, portfolio, taskManager } from "../assests";

// Sample project data
const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform built with React and Node.js. Features include product filtering, user authentication, shopping cart, and payment processing integration.",
        image: ecommerce,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "An interactive weather application that provides real-time weather information for locations worldwide. Utilizes OpenWeather API for current conditions and forecasts.",
        image: weather,
        technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Chart.js"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A productivity application for managing tasks and projects. Features include drag-and-drop task organization, priority levels, due dates, and team collaboration.",
        image: taskManager,
        technologies: ["React", "Firebase", "Material-UI", "React DnD"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio website (this one!) built with React, Framer Motion, and modern UI libraries. Features responsive design and multiple theme options.",
        image: portfolio,
        technologies: ["React", "Framer Motion", "Responsive Design", "CSS3"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
    {
        id: 5,
        title: "React To-Do List",
        description: "A simple to-do list application built with React. Features include adding, editing, and deleting tasks.",
        image: ecommerce,
        technologies: ["React", "JavaScript", "HTML5", "CSS3"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
    {
        id: 6,
        title: "Quiz App",
        description: "A basic quiz application built with React. Features include multiple choice questions and a score tracker.",
        image: weather,
        technologies: ["React", "JavaScript", "HTML5", "CSS3"],
        liveDemo: "https://github.com/Hmtgit7",
        sourceCode: "https://github.com/Hmtgit7"
    },
];

export default projects;