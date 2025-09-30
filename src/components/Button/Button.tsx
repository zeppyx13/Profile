import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
    style?: string;
    link: string;
    title: string;
}

const Button: React.FC<ButtonProps> = ({ style = "", link, title }) => {
    return (
        <motion.a
            href={link}
            className={`${style} px-6 py-3 transition`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {title}
        </motion.a>
    );
};

export default Button;
