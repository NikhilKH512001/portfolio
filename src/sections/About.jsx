import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { usePortfolioData } from '../data';

const About = () => {
    const { aboutData } = usePortfolioData();
    if (!aboutData) return null;
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
                    <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5]">
                        <img
                            src={aboutData.image}
                            alt="Profile"
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-brand-primary rounded-full" />
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {aboutData.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                        <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <span className="block text-3xl font-bold text-brand-primary mb-1">2+</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <span className="block text-3xl font-bold text-brand-accent mb-1">10+</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
