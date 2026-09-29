import {
    Github,
    Linkedin,
    Mail,
    Code,
    Layout,
    Database,
    Server,
    Smartphone,
    Globe,
    Terminal,
    Cpu,
    BookOpen,
    BarChart,
    Link
} from 'lucide-react';

import profileImg from '../assets/image_with_suite.png';
import { usePortfolio } from '../contexts/PortfolioContext';

// Map of icon names to lucide components
const IconMap = {
    Github, Linkedin, Mail, Code, Layout, Database, Server, 
    Smartphone, Globe, Terminal, Cpu, BookOpen, BarChart
};

export const usePortfolioData = () => {
    const { data } = usePortfolio();

    if (!data) return {};

    const heroData = data.heroData;

    const aboutData = {
        ...data.aboutData,
        image: data.aboutData.image === "LOCAL_PROFILE_IMG" ? profileImg : data.aboutData.image
    };

    const skillsData = (data.skillsData || []).map(skill => ({
        ...skill,
        icon: IconMap[skill.icon] || Code // fallback icon
    }));

    const projectsData = data.projectsData || [];
    
    const experienceData = data.experienceData || [];

    const socialData = (data.socialData || []).map(social => ({
        ...social,
        icon: IconMap[social.icon] || Link // fallback icon
    }));

    return {
        heroData,
        aboutData,
        skillsData,
        projectsData,
        experienceData,
        socialData
    };
};
