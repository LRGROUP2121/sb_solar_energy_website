import { MapPin, Phone, Mail, Clock, Search, Frown, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { indiaStatesDistricts } from '../data/indiaStatesDistricts';

const DUMMY_VENDORS = [
  { name: 'SunPower Solutions', rating: 4.8, address: '123 Solar Park, Industrial Area', contact: '+91 9876543210', tags: ['On-Grid', 'Off-Grid'] },
  { name: 'EcoGreen Energy', rating: 4.5, address: 'Phase 2, Techno Hub', contact: '+91 9876543211', tags: ['Residential', 'Commercial'] },
  { name: 'BrightFuture Solar', rating: 4.9, address: 'Main Market Road', contact: '+91 9876543212', tags: ['Maintenance', 'Installation'] },
];

const Contact = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'contact' | 'vendor'>(location.state?.activeTab || 'contact');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVendors = DUMMY_VENDORS.filter(vendor => {
    const q = searchQuery.toLowerCase();
    return (
      vendor.name.toLowerCase().includes(q) ||
      vendor.address.toLowerCase().includes(q) ||
      vendor.contact.toLowerCase().includes(q) ||
      vendor.rating.toString().includes(q) ||
      vendor.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section 
        className="relative min-h-[400px] md:h-[300px] flex items-center justify-center bg-fixed bg-cover"
        style={{
          backgroundImage: "url('/contact_hero.png')",
          backgroundPosition: "center 70%" 
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75 z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 md:mb-4 block">24/7 Assistance</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
              Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Support</span>
            </h1>
            <p className="text-base md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
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
                    <p className="text-slate-600">+91 7023204664</p>
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

              {/* Map Embed */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[250px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d211.50583965914583!2d75.58637852981474!3d26.986484315565846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1784194048018!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SB Solar Energy Location in Jaipur"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              <form className="space-y-6 flex flex-col flex-grow" onSubmit={(e) => e.preventDefault()}>
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
                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="message" className="w-full h-[150px] md:h-[calc(100%-2rem)] px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow resize-none" placeholder="Your message here..."></textarea>
                </div>
                <div className="mt-auto pt-4">
                  <Button type="submit" className="w-full h-14 text-lg">Send Message</Button>
                </div>
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
             <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">State <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      className={`w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm ${selectedState ? 'text-slate-700' : 'text-slate-400'}`}
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedDistrict('');
                      }}
                    >
                      <option value="">Select State</option>
                      {Object.keys(indiaStatesDistricts).map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">District <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      className={`w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer shadow-sm disabled:bg-slate-50 disabled:cursor-not-allowed ${selectedDistrict ? 'text-slate-700' : 'text-slate-400'}`}
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      disabled={!selectedState}
                    >
                      <option value="">Select District</option>
                      {selectedState && indiaStatesDistricts[selectedState].map((district) => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <button 
                  onClick={() => setShowResults(true)}
                  className="w-full bg-[#5d8db5] hover:bg-[#4a7295] text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm text-sm"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-3">
              {!showResults ? (
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
              ) : (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8 h-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">Available Vendors</h3>
                      <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center w-max">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        {filteredVendors.length} Found in {selectedDistrict || selectedState || 'your area'}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                      {/* Search Bar */}
                      <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                        <input 
                          type="text" 
                          placeholder="Search vendors..." 
                          className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow placeholder:text-slate-400 shadow-sm"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>

                      {/* View Toggle */}
                      <div className="flex items-center bg-slate-100 p-1 rounded-lg shrink-0 self-end sm:self-auto">
                        <button 
                          onClick={() => setViewMode('grid')}
                          className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                        <LayoutGrid className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => setViewMode('table')}
                        className={`p-1.5 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        <List className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredVendors.map((vendor, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-primary/40 transition-all hover:shadow-lg group">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{vendor.name}</h4>
                            <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center shrink-0">
                              ★ {vendor.rating}
                            </span>
                          </div>
                          
                          <div className="space-y-3 mb-5">
                            <p className="text-slate-600 text-sm flex items-start">
                              <MapPin className="h-4 w-4 shrink-0 mr-2.5 mt-0.5 text-slate-400" />
                              {vendor.address}
                            </p>
                            <p className="text-slate-600 text-sm flex items-center font-medium">
                              <Phone className="h-4 w-4 shrink-0 mr-2.5 text-primary" />
                              {vendor.contact}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                            {vendor.tags.map(tag => (
                              <span key={tag} className="bg-white border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-x-auto pb-4">
                      <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="py-3 px-4 font-bold text-slate-900 text-sm rounded-tl-lg">Vendor Name</th>
                            <th className="py-3 px-4 font-bold text-slate-900 text-sm">Rating</th>
                            <th className="py-3 px-4 font-bold text-slate-900 text-sm">Address</th>
                            <th className="py-3 px-4 font-bold text-slate-900 text-sm">Contact</th>
                            <th className="py-3 px-4 font-bold text-slate-900 text-sm rounded-tr-lg">Specialties</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredVendors.map((vendor, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                              <td className="py-4 px-4 font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">{vendor.name}</td>
                              <td className="py-4 px-4">
                                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full inline-flex items-center whitespace-nowrap">
                                  ★ {vendor.rating}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-slate-600 text-sm">{vendor.address}</td>
                              <td className="py-4 px-4 text-slate-600 text-sm font-medium whitespace-nowrap">{vendor.contact}</td>
                              <td className="py-4 px-4">
                                <div className="flex flex-wrap gap-1">
                                  {vendor.tags.map(tag => (
                                    <span key={tag} className="bg-white border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default Contact;
