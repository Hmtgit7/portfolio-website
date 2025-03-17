import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Placeholder image if project image is missing
    const placeholderImage = "https://via.placeholder.com/500x300?text=Project+Image";

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            y: -10,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        hover: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="project-card"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="project-image-container">
                <img
                    src={project.image || placeholderImage}
                    alt={project.title}
                    className="project-image"
                />

                <motion.div
                    className="project-overlay"
                    variants={overlayVariants}
                    animate={isHovered ? "hover" : "hidden"}
                >
                    <div className="project-links">
                        <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Live Demo
                        </motion.a>
                        <motion.a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            View Code
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;