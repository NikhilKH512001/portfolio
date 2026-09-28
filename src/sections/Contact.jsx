import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/nikhilkh54@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Failed to send message. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                        I'm currently available for freelance work or full-time opportunities.
                        If you have a project that needs some creative touch, I'd love to hear about it.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-brand-primary">
                                <Send size={24} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500"><a href="mailto:nikhilkh54@gmail.com" className="text-gray-900 dark:text-white hover:text-brand-primary transition-colors">Email</a></span>

                            </div>
                        </div>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 bg-white dark:bg-brand-gray p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg dark:shadow-none"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-500 dark:text-gray-400">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <Button variant="primary" className="w-full justify-center" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </motion.form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
