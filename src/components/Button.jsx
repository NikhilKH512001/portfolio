import { motion } from 'framer-motion';

const Button = ({ children, variant = "primary", onClick, href, className = "" }) => {
    const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-blue-600 focus:ring-brand-primary",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary",
        white: "bg-white text-brand-dark hover:bg-gray-200 focus:ring-white",
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </Component>
    );
};

export default Button;
