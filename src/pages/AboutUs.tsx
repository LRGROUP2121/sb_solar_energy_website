import { Award, Target, Users, Shield, Globe, Leaf, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
          <img src="/about_hero.png" alt="About SB Solar Energy" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Pioneering a Brighter, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Greener Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              Discover the mission, values, and relentless innovation driving SB Solar Energy to the forefront of renewable integration in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sleek Stats Bar */}
      <section className="relative z-30 -mt-8 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 py-2 md:py-4 border border-slate-100 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            { icon: Users, value: "1,000+", label: "Happy Clients", color: "text-blue-500" },
            { icon: Zap, value: "10MW+", label: "Energy Generated", color: "text-amber-500" },
            { icon: Shield, value: "25+", label: "Years Warranty", color: "text-emerald-500" },
            { icon: Leaf, value: "100%", label: "Eco-Friendly", color: "text-green-500" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center w-full md:w-1/4 py-3 md:py-0 group"
            >
              <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color} mr-3 group-hover:scale-110 transition-transform`} strokeWidth={2.5} />
              <div className="flex flex-col text-left justify-center">
                <span className="font-bold text-sm md:text-base text-slate-900 leading-tight">{stat.value}</span>
                <span className="font-semibold text-[10px] md:text-[11px] text-slate-500 uppercase tracking-wider leading-none mt-0.5">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Are Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Leading the Transition to <span className="text-primary">Sustainable Energy</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SB Solar Energy is an <strong className="text-slate-900 font-bold">ISO 9001:2015 CERTIFIED</strong> company dedicated to engineering the most advanced solar systems in the industry. Based in the heart of India, we have built a profound reputation for integrating high-performance renewable solutions into daily life.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                From residential rooftops to massive utility-scale solar parks, our systems are trusted by over 1,000 businesses, universities, government institutions, and families. We don't just sell panels; we deliver complete energy independence at an affordable price, ensuring long-term sustainability.
              </p>
              
              <div className="flex items-center space-x-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">ISO 9001:2015 Certified</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Internationally recognized for our rigorous quality management and operational excellence across all projects.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white relative z-10 bg-slate-200">
                <img src="/hero4.png" alt="Solar Team" className="w-full h-full object-cover" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 z-20 items-center space-x-4 hidden md:flex"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Presence</p>
                  <p className="text-lg font-black text-slate-900">Pan India</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Pillars of Our Success</h2>
            <p className="text-lg text-slate-600">These core principles guide every project we undertake, ensuring maximum satisfaction for our clients and maximum benefit for the planet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Our Mission', icon: Target, desc: 'To illuminate homes and businesses with clean, affordable, and sustainable energy solutions.' },
              { title: 'Our Vision', icon: Leaf, desc: 'To create a carbon-neutral world powered entirely by decentralized, renewable technology.' },
              { title: 'Unmatched Quality', icon: Shield, desc: 'We utilize exclusively Tier-1 components, delivering systems designed to last over 25 years.' },
              { title: 'Expert Team', icon: Users, desc: 'Unlimited support from the industry\'s top technical engineers and customer care experts.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-16 w-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 border border-slate-100">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
