import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up on unmount
        return () => {
            clearInterval(timer);
        };
    }, []);

    // Format date as "Day of Week, Month Day, Year"
    const formatDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString(undefined, options);
    };

    // Format time as "Hours:Minutes:Seconds AM/PM"
    const formatTime = (date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return date.toLocaleTimeString(undefined, options);
    };

    return (
        <motion.div
            className="time-display"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="time-container">
                <div className="date">{formatDate(currentTime)}</div>
                <div className="time">{formatTime(currentTime)}</div>
            </div>
        </motion.div>
    );
};

export default TimeDisplay;