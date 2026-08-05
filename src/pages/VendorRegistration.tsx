import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, User, Mail, Phone, MapPin, Send, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import AnimatedBackground from '../components/AnimatedBackground';

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessType: 'dealer',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this with your actual Web3Forms Access Key
          access_key: "ab13e878-4fba-4132-8d33-c8532b57020a", 
          subject: "New Dealer & Channel Partner Enrollment",
          from_name: "SB Solar Website",
          "Company Name": formData.companyName,
          "Contact Person": formData.contactPerson,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "Partnership Type": formData.businessType,
          "Business Address": formData.address,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage("Enrollment application submitted successfully! Our team will contact you shortly.");
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          businessType: 'dealer',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage("Something went wrong submitting the form. Please try again.");
        console.error(result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage("Error submitting form. Please check your internet connection.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
      // Auto hide the message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50 relative overflow-hidden">
      <AnimatedBackground />
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary/5 -skew-y-6 transform origin-top-left -z-10"></div>
      
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Partner With Us</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Certified Dealer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">& Partner Enrollment</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join our rapidly growing network of premium solar providers. Fill out the form below to initiate your registration process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 md:p-10 relative"
        >
          <AnimatePresence>
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className={`mb-6 p-4 rounded-xl border flex items-start space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-red-600" />
                )}
                <div>
                  <h4 className={`font-bold ${submitStatus === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                    {submitStatus === 'success' ? 'Success!' : 'Oops!'}
                  </h4>
                  <p className="text-sm mt-0.5 opacity-90">{statusMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Company/Business Name *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Contact Person Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Partnership Type *</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <select 
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                >
                  <option value="dealer">Certified Dealer</option>
                  <option value="distributor">Regional Distributor</option>
                  <option value="installer">System Installer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Business Address *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                <textarea 
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Complete business address..."
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full text-lg h-14 rounded-xl font-bold tracking-wide shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform group disabled:opacity-70 disabled:hover:translate-y-0">
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorRegistration;
