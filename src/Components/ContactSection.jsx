import { Mail, Phone, MapPin } from "lucide-react"; 

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-white mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8 text-left">
                        <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <span className="text-white">adeshrawas@example.com</span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <span className="text-white">+91 82618 46005</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <span className="text-white">Pune,India</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/30 backdrop-blur-md p-6 rounded-lg flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="p-3 rounded bg-gray-800/70 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/80 transition">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
