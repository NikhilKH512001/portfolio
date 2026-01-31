import { motion } from 'framer-motion';

const Card = ({ children, className = "" }) => {
    return (
        <motion.div
            className={`bg-white dark:bg-brand-gray rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 ${className}`}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
