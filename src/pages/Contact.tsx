import { MapPin, Phone, Mail, Clock, Search, Frown, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'vendor'>('contact');

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

      {/* Tab Switcher */}
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <button 
              onClick={() => setActiveTab('contact')}
              className={`py-4 md:py-5 font-bold text-sm md:text-base border-b-[3px] transition-colors ${activeTab === 'contact' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
            >
              Contact Support
            </button>
            <button 
              onClick={() => setActiveTab('vendor')}
              className={`py-4 md:py-5 font-bold text-sm md:text-base border-b-[3px] transition-colors ${activeTab === 'vendor' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
            >
              Find a Vendor
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'contact' ? (
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
      ) : (
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar (Filters) */}
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Filters</h3>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-300 rounded-md py-1.5 pl-3 pr-8 text-xs font-semibold text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm">
                    <option>District Wise Inst...</option>
                    <option>State Wise Inst...</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">State <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm text-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm">
                      <option value="">Select State</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="maharashtra">Maharashtra</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">District <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm text-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm">
                      <option value="">Select District</option>
                      <option value="jaipur">Jaipur</option>
                      <option value="jodhpur">Jodhpur</option>
                      <option value="udaipur">Udaipur</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <button className="w-full bg-[#5d8db5] hover:bg-[#4a7295] text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm text-sm">
                  Apply
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Search Vendor</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  <input type="text" placeholder="Search" className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow placeholder:text-slate-300 shadow-sm" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Search Brand Owner</h3>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm text-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm">
                    <option value="">Select Brand</option>
                    <option value="brand1">Brand A</option>
                    <option value="brand2">Brand B</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Main Content (Empty State) */}
            <div className="lg:col-span-3">
              <div className="bg-[#f8f9fc] rounded-xl border border-slate-100 h-full min-h-[500px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* Decorative blob background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-[#eef1fd] rounded-[100px] blur-2xl opacity-80 pointer-events-none"></div>
                
                {/* Floating paper icons (approximate styling for the background elements in screenshot) */}
                <div className="absolute top-1/4 left-1/4 w-8 h-10 bg-white shadow-sm border border-slate-100 rounded rotate-[-15deg] opacity-60 flex items-center justify-center pointer-events-none">
                  <span className="text-[#a5b9f9] text-xs font-bold">X</span>
                </div>
                <div className="absolute top-1/3 right-1/4 w-10 h-12 bg-white shadow-sm border border-slate-100 rounded rotate-[15deg] opacity-60 flex items-center justify-center pointer-events-none">
                  <span className="text-[#a5b9f9] text-sm font-bold">?</span>
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-8 h-10 bg-white shadow-sm border border-slate-100 rounded rotate-[-5deg] opacity-60 flex items-center justify-center pointer-events-none">
                  <span className="text-[#a5b9f9] text-xs font-bold">X</span>
                </div>

                <div className="relative z-10 flex flex-col items-center mt-8">
                  {/* Browser window illustration */}
                  <div className="w-[320px] h-[220px] bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden flex flex-col relative">
                    {/* Browser top bar */}
                    <div className="h-7 bg-[#b4c4f9] w-full flex items-center px-3 space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    </div>
                    {/* Browser body */}
                    <div className="flex-1 flex flex-col items-center justify-center bg-white pt-2">
                      <div className="w-24 h-32 bg-[#a5b9f9] rounded-md relative flex flex-col items-center justify-center mb-4 overflow-hidden">
                        {/* Folded corner effect */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#8ba1e8]">
                           <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-[#a5b9f9]"></div>
                        </div>
                        <Frown className="h-10 w-10 text-white mt-4 opacity-90" />
                      </div>
                      <span className="font-black text-slate-900 text-[11px] tracking-widest mt-2">NO DATA</span>
                    </div>
                  </div>
                  
                  {/* Abstract stylized character replacement */}
                  <div className="flex flex-col items-center -mt-8 relative z-20">
                    <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center mb-[-10px] shadow-lg border-4 border-[#f8f9fc]">
                      <Search className="h-6 w-6 text-white opacity-50" />
                    </div>
                    <div className="w-20 h-5 bg-[#4c6bf5] rounded-t-lg shadow-md"></div>
                    <div className="w-32 h-6 bg-slate-800 rounded-full shadow-lg"></div>
                    <div className="w-48 h-1 bg-slate-300 mt-2 rounded-full opacity-50 blur-[1px]"></div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default Contact;
