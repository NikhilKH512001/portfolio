import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
            {/* Primary Blue Blob */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[80px]"
            />

            {/* Accent Violet Blob */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/40 rounded-full blur-[80px]"
            />

            {/* Extra Blob for middle interest */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 50, 50, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[60px]"
            />
        </div>
    );
};

export default AnimatedBackground;
