import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Tilt from '../components/Tilt';
import { projectsData } from '../data';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A selection of my recent work and side projects.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <Tilt key={index} className="h-full">
                        <Card className="overflow-hidden p-0 bg-white dark:bg-brand-gray border-none w-full h-full flex flex-col transform-style-3d">
                            <div className="group relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a href={project.link} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-dark rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-brand-primary rounded-full border border-gray-200 dark:border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Tilt>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
