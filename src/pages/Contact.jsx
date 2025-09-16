import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Feedback submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: '📱',
            label: 'Phone',
            value: '+91 xxxxx xx656',
        },
        {
            icon: '✉️',
            label: 'Email',
            value: 'harshalgadher04@gmail.com',
            link: 'mailto:harshalgadher04@gmail.com'
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'github.com/harshalgadher',
            link: 'https://github.com/harshalgadher'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/harshalgadher',
            link: 'https://linkedin.com/in/harshalgadher'
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Contact Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/55 overflow-hidden shadow-2xl mb-12">
                    <div className="grid md:grid-cols-2 min-h-[600px]">
                        {/* Left Side - Thank You Message */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 p-12 flex flex-col justify-center items-center text-center text-white">
                            <div className="text-6xl mb-8 animate-bounce">
                                🙏
                            </div>
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                                Thank You!
                            </h2>
                            <p className="text-xl leading-relaxed opacity-90 max-w-md">
                                Thank you for visiting my portfolio. I'm excited to connect with you and hear your thoughts.
                                Your feedback means a lot to me!
                            </p>
                            <div className="mt-8 flex space-x-4">
                                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                            </div>
                        </div>

                        {/* Right Side - Feedback Form */}
                        <div className="p-12 bg-white/5">
                            <h3 className="text-3xl font-bold text-white mb-8 text-center">
                                Send Feedback 💭
                            </h3>

                            {submitted ? (
                                <div className="text-center">
                                    <div className="text-6xl mb-6">✅</div>
                                    <h4 className="text-2xl font-semibold text-green-400 mb-4">
                                        Message Sent Successfully!
                                    </h4>
                                    <p className="text-white/80 text-lg">
                                        Thank you for your feedback. I'll get back to you soon!
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name *"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl bg-white/10 border-2 text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-white/20'
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-sm mt-2 flex items-center">
                                                <span className="mr-1">❌</span>
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email *"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl bg-white/10 border-2 text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-white/20'
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-sm mt-2 flex items-center">
                                                <span className="mr-1">❌</span>
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Your Message/Feedback *"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`w-full p-4 rounded-xl bg-white/10 border-2 text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-white/20'
                                                }`}
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-sm mt-2 flex items-center">
                                                <span className="mr-1">❌</span>
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`w-full p-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isSubmitting
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                                            } text-white`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Feedback 🚀'
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
                    <h3 className="text-3xl font-bold text-white text-center mb-8">
                        Let's Connect! 🤝
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                            >
                                <div className="text-4xl mb-3 group-hover:animate-bounce">
                                    {contact.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {contact.label}
                                </h4>
                                <p className="text-white/70 text-sm break-all group-hover:text-white transition-colors">
                                    {contact.value}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;