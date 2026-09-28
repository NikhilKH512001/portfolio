import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { usePortfolioData } from '../data';

const Skills = () => {
    const { skillsData } = usePortfolioData();
    if (!skillsData) return null;
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Tools and technologies I use to bring ideas to life.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                    <Card key={index} className="flex flex-col items-center justify-center py-10 text-center hover:border-brand-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 p-2">
                            <skill.icon size={24} />
                        </div>
                        <h3 className="text-gray-900 dark:text-white font-medium text-lg">{skill.name}</h3>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
