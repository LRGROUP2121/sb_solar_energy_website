import { Settings, Wrench as Tools, Activity, ShieldCheck, Zap, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'Solar Consultation',
      icon: Activity,
      desc: 'Expert energy audits and site assessments to determine the optimal solar solution for your specific energy needs and budget.',
    },
    {
      title: 'Custom System Design',
      icon: PenTool,
      desc: 'Our engineers design tailored PV systems, calculating exact roof loads, shadow analysis, and optimal tilt angles for maximum efficiency.',
    },
    {
      title: 'Professional Installation',
      icon: Tools,
      desc: 'Flawless execution by certified technicians ensuring all mechanical and electrical components are installed to highest industry standards.',
    },
    {
      title: 'O&M (Operations & Maintenance)',
      icon: Settings,
      desc: 'Comprehensive post-installation support including panel cleaning, inverter diagnostics, and preventive maintenance to guarantee 25-year performance.',
    },
    {
      title: 'Grid Integration & Net Metering',
      icon: Zap,
      desc: 'We handle all utility grid synchronization and net-metering paperwork so you can seamlessly export excess power and reduce your bills.',
    },
    {
      title: 'System Upgrades & Repair',
      icon: ShieldCheck,
      desc: 'Diagnostics and repair services for existing systems, including battery replacements, inverter upgrades, and capacity expansions.',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
          <img src="/hero1.jpg" alt="Our Services" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">End-to-End Support</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              From initial energy audits to lifelong maintenance, we provide comprehensive services to ensure your transition to solar is seamless and profitable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What We Offer</h2>
            <p className="text-lg text-slate-600">We don't just sell products; we engineer complete energy solutions backed by industry-leading support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-16 w-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300 border border-slate-100">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today for a free site assessment and custom quotation.
          </p>
          <Button onClick={() => navigate('/contact')} size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20">
            Book a Free Consultation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;
