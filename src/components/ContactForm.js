import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Validation state
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Success message state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Clear error when typing
        if (formErrors[name]) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
                isValid = false;
            }
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setFormErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // In a real application, you would send the form data to a server here
            console.log('Form submitted:', formData);

            // Show success message and reset form
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const successVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-subtitle">
                        Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="contact-container">
                    <motion.form
                        className="contact-form"
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={formErrors.name ? 'error' : ''}
                            />
                            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={formErrors.email ? 'error' : ''}
                            />
                            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={formErrors.message ? 'error' : ''}
                            ></textarea>
                            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                        </div>

                        <motion.button
                            type="submit"
                            className="button primary submit-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <p>email@example.com</p>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <p>+1 (123) 456-7890</p>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>City, Country</p>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {isSubmitted && (
                    <motion.div
                        className="success-message"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <i className="fas fa-check-circle"></i>
                        <p>Your message has been sent successfully!</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;