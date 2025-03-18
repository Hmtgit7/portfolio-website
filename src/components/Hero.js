import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../assests';


const Hero = () => {
    // Social media links
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Hmtgit7', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/hemant-gehlod', icon: 'linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/Gehlodhemant', icon: 'twitter' }
    ];


    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="home" className="hero-section">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-text">
                        <motion.h1 variants={itemVariants} className="hero-title">
                            Hi, I'm <span className="highlight">Lea</span>
                        </motion.h1>
                        <motion.h2 variants={itemVariants} className="hero-subtitle">
                            Web Developer & Designer
                        </motion.h2>
                        <motion.p variants={itemVariants} className="hero-description">
                            I build responsive, user-friendly websites and applications using
                            modern web technologies. With a passion for clean code and intuitive
                            user interfaces, I create digital experiences that leave a lasting impression.
                        </motion.p>

                        <motion.div variants={itemVariants} className="hero-buttons">
                            <motion.a
                                href="#projects"
                                className="button primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="button secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="social-links">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={link.name}
                                >
                                    <i className={`fab fa-${link.icon}`}></i>
                                </motion.a>
                            ))}
                        </motion.div>

                    </div>

                    <motion.div
                        className="hero-image"
                        variants={itemVariants}
                    >
                        <div className="profile-image-container">
                            <img src={profile} alt="Hemant" className="profile-image" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;