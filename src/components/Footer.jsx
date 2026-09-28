import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { usePortfolioData } from '../data';

const Footer = () => {
  const { socialData } = usePortfolioData();
  if (!socialData) return null;
    return (
        <footer className="bg-gray-50 dark:bg-brand-gray py-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tighter">
                            Nikhil<span className="text-brand-primary">.dev</span>
                        </span>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {socialData.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
