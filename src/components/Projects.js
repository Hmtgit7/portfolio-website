import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Get unique technology categories for filtering
    const allTechnologies = projectsData.reduce((acc, project) => {
        project.technologies.forEach(tech => {
            if (!acc.includes(tech)) {
                acc.push(tech);
            }
        });
        return acc;
    }, []);

    // Filter projects based on selected technology
    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project =>
            project.technologies.includes(activeFilter)
        );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">
                        Here are some of my recent work. Click on a project to learn more.
                    </p>
                </motion.div>

                <motion.div
                    className="filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </button>
                    {allTechnologies.map((tech, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                            onClick={() => setActiveFilter(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;