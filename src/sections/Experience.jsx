import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { usePortfolioData } from '../data';

const Experience = () => {
    const { experienceData } = usePortfolioData();
    if (!experienceData) return null;
    return (
        <SectionWrapper id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My professional journey and career milestones.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10 md:left-1/2 md:-ml-[1px]" />

                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Icon */}
                            <div className="absolute left-0 md:left-1/2 md:-ml-6 w-10 h-10 rounded-full bg-white dark:bg-brand-dark border-4 border-brand-primary flex items-center justify-center z-10">
                                <Briefcase size={16} className="text-brand-primary" />
                            </div>

                            {/* Content Spacer for Desktop */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                }`}>
                                <div className="p-6 rounded-2xl bg-white dark:bg-brand-gray border border-gray-100 dark:border-white/5 hover:border-brand-primary/30 transition-colors duration-300 shadow-sm dark:shadow-none">
                                    <span className="text-brand-primary font-medium text-sm mb-2 block">{item.date}</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                                    <h4 className="text-gray-500 dark:text-gray-400 mb-4">{item.company}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
