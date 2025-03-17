import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.header
            className="header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container header-container">
                <div className="logo">
                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Portfolio
                    </motion.h1>
                </div>

                <div className="menu-button" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <a href="#home">Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <a href="#projects">Projects</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <a href="#contact">Contact</a>
                        </motion.li>
                    </ul>
                    <ThemeToggle />
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;