import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
          <img src="/contact_hero.png" alt="Contact & Support" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">24/7 Assistance</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Support</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              Get in touch with our expert technical support team for inquiries, quotes, or immediate assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h3>
                    <p className="text-slate-600">+91 9680204664</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email Address</h3>
                    <p className="text-slate-600 break-all">sbindustries2121@gmail.com</p>
                    <p className="text-slate-600 break-all">support@sbsolarenergy.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Location</h3>
                    <p className="text-slate-600">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow resize-none" placeholder="Your message here..."></textarea>
                </div>
                <Button type="submit" className="w-full h-14 text-lg">Send Message</Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
