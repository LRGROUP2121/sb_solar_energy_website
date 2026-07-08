import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Sun, Building2, Home as HomeIcon, Factory, ChevronLeft, ChevronRight, LayoutTemplate, Award, TrendingUp, Phone, Settings, FileText, Star, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Complete Solution For All Your Power Needs",
    subtitle: "Smart Homes Run On Smart Solar. Upgrade With Go Green And Enjoy Lower Bills And Clean Energy!",
    image: "/hero1.png"
  },
  {
    id: 2,
    title: "Innovative and Superior Solar Solutions",
    subtitle: "Offering customized solar solutions for Residential, Institutional, Commercial, Industrial, and Agriculture sectors.",
    image: "/hero2.png"
  },
  {
    id: 3,
    title: "Get Upto ₹ Subsidy By Central Government",
    subtitle: "Install solar at your home to reduce electricity bills by up to 90% and secure your sustainable future.",
    image: "/hero3.png"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  return (
    <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
          <img 
            src={HERO_SLIDES[currentSlide].image} 
            alt="Solar Panels Background" 
            className="w-full h-full object-cover transform scale-105"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl text-center mx-auto"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white leading-tight drop-shadow-lg">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 font-light drop-shadow-md">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="group shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Let's Start Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 glass hover:scale-105 transition-transform">
                  View Our Products
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full hover:bg-green-300 hover:text-black transition-colors text-white hidden md:block border border-white/20">
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full hover:bg-green-300 hover:text-black transition-colors text-white hidden md:block border border-white/20">
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroModern = () => {
  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 z-0 overflow-hidden h-full opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-amber-400/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6 shadow-sm">
              <Sun className="h-4 w-4" />
              <span>Smart Homes Run On Smart Solar</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Power Your Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Clean Energy</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Complete solution for all your power needs. Upgrade to Go Green, enjoy up to 90% lower electricity bills, and secure a sustainable future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg group shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-300 text-slate-700 hover:bg-slate-100 bg-white hover:scale-105 transition-transform shadow-sm">
                Explore Products
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                <Shield className="h-5 w-5 text-primary" />
                <span>25-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>Govt. Subsidies</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-[6px] border-white/50 glass aspect-square lg:aspect-auto lg:h-[600px]">
              <img 
                src="/hero4.png" 
                alt="Modern Solar Installation" 
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 border border-slate-100 z-10"
              >
                <div className="bg-emerald-100 p-3 rounded-lg text-primary">
                  <Factory className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Trusted By</p>
                  <p className="text-lg font-bold text-slate-900">1,000+ Brands</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

const AnimatedBackground = () => {
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:30px_30px] opacity-[0.08]" />
      
      {/* Floating dots */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bg-primary rounded-full"
          style={{ width: p.size, height: p.size, left: p.left, top: '100%' }}
          animate={{
            y: [0, -1000], // Moves up by 1000px
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-50 relative z-10 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Get Upto ₹ Subsidy',
              desc: 'Install solar at your home to reduce electricity bill by up to 90% and also get subsidy from the central government.',
              icon: Zap
            },
            {
              title: 'Customized Solutions',
              desc: 'Offering Innovative and Superior Solar Solutions for Residential, Commercial, and Industrial needs.',
              icon: Shield
            },
            {
              title: 'Sustainable Future',
              desc: 'Illuminate your Sustainable Future System with or without a battery backup.',
              icon: Sun
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>
              <a href="tel:09680204664" className="text-primary font-semibold inline-flex items-center group-hover:text-primary-hover transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-20 bg-white relative z-10 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          <span className="text-primary">OUR</span> <span className="text-slate-900">PRODUCTS</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-sm md:text-base text-slate-600 max-w-4xl mx-auto mb-12 font-medium">
          Highly Efficient Array of Solar PV Modules | Inverters | Energy Storage Systems | Premium-Quality At Affordable Price
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'SOLAR PV MODULE', color: 'text-teal-500', img: '/prod1.png' },
            { title: 'ON GRID INVERTER', color: 'text-orange-500', img: '/prod2.png' },
            { title: 'HYBRID INVERTER', color: 'text-green-600', img: '/prod3.png' },
            { title: 'SOLAR INVERTER - OFF GRID', color: 'text-rose-600', img: '/prod4.png' },
            { title: 'BATTERIES', color: 'text-pink-600', img: '/prod5.png' },
            { title: 'SOLAR WATER HEATER', color: 'text-blue-500', img: '/prod6.png' },
            { title: 'ACCESSORIES SOLAR', color: 'text-amber-500', img: '/prod7.png' },
            { title: 'STREET LIGHT SYSTEM', color: 'text-indigo-700', img: '/prod8.png' }
          ].map((prod, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full">
              <div className="h-56 w-full p-6 flex items-center justify-center bg-white">
                <img src={prod.img} alt={prod.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-grow flex items-center justify-center border-t-2 border-slate-50 bg-slate-50/50">
                <h3 className={`font-black text-center text-[15px] tracking-wide ${prod.color}`}>
                  {prod.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const INDUSTRY_SOLUTIONS = [
  { id: 'residential', title: 'Residential', icon: HomeIcon, desc: 'Facing power cuts and high bills? Install solar at your home for reliable, clean energy.', img: '/ind_residential.png' },
  { id: 'corporate', title: 'Corporate', icon: Building2, desc: 'Lower operational bills, enhance your green brand image, and make efficient use of office space.', img: '/ind_corporate.png' },
  { id: 'industrial', title: 'Industrial', icon: Factory, desc: 'Cut massive energy costs and boost profit margins with consistent, heavy-duty power.', img: '/ind_industrial.png' },
  { id: 'parks', title: 'Solar Parks', icon: Sun, desc: 'High energy output over vast land with rapid execution for utility-scale distribution.', img: '/ind_park.png' }
];

const IndustrySection = () => {
  const [active, setActive] = useState(INDUSTRY_SOLUTIONS[0]);

  return (
    <section className="py-24 bg-slate-50 relative z-10 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-primary">SOLUTIONS</span> <span className="text-slate-900">WE OFFER</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 font-medium">
            From residential rooftops to massive utility-scale parks, we engineer high-efficiency energy systems customized for your exact power needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            {INDUSTRY_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                onClick={() => setActive(sol)}
                onMouseEnter={() => setActive(sol)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  active.id === sol.id 
                    ? 'bg-white border-primary shadow-xl scale-105' 
                    : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl transition-colors ${active.id === sol.id ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-500'}`}>
                    <sol.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold transition-colors ${active.id === sol.id ? 'text-primary' : 'text-slate-800'}`}>{sol.title}</h3>
                    <AnimatePresence>
                      {active.id === sol.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-600 text-sm leading-relaxed mt-2 pr-4">
                            {sol.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl glass group">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.img}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.1, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
              <motion.div
                key={`badge-${active.id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                <active.icon className="h-4 w-4" />
                <span>{active.title} Solutions</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WHY_CHOOSE_US = [
  { title: "25-Year Warranty", desc: "Long-term peace of mind with our comprehensive performance guarantees.", icon: Shield },
  { title: "Expert Installation", desc: "Our certified engineers ensure flawless, safe, and efficient setups.", icon: Settings },
  { title: "Govt. Subsidy Support", desc: "We handle the paperwork to get you the maximum central subsidies.", icon: FileText },
  { title: "Tier-1 Quality", desc: "We use only premium, globally-rated solar panels and inverters.", icon: Award },
  { title: "Highest ROI", desc: "Maximize your energy savings and get the fastest return on investment.", icon: TrendingUp },
  { title: "24/7 Support", desc: "Round-the-clock technical assistance and maintenance services.", icon: Phone }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-slate-900">WHY CHOOSE</span> <span className="text-primary">US</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 font-medium">
            We deliver uncompromising quality, transparent pricing, and end-to-end solar solutions that empower you to take control of your energy future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-16 w-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "Industrial Factory Owner",
    content: "Switching to SB Solar was the best decision for our operations. Our monthly energy costs dropped by 70% in the first quarter alone, and the heavy-duty inverters handle our loads flawlessly.",
    rating: 5
  },
  {
    name: "Priya Desai",
    role: "Residential Homeowner",
    content: "The team handled absolutely everything—from the initial roof inspection to the final government subsidy paperwork. Highly professional, clean installation, and incredibly efficient!",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Corporate Director",
    content: "We were highly impressed by the premium quality of the Tier-1 panels and their 24/7 support team. Our corporate headquarters is now proudly running on 100% green energy.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative z-10 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-slate-900">WHAT OUR CUSTOMERS</span> <span className="text-primary">SAY</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 font-medium">
            Don't just take our word for it. Hear from our satisfied clients across residential, corporate, and industrial sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-slate-50 group-hover:text-primary/5 transition-colors duration-300 -z-0" />
              
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4 relative z-10">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="rounded-full mb-6 mx-10 py-12 bg-gradient-to-br from-primary to-secondary/70 relative z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to switch to solar?
        </h2>
        <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Join thousands of satisfied customers who have already reduced their carbon footprint and electricity bills. Let's build a sustainable future together.
        </p>
        <Button size="lg" className="bg-green-800 text-white rounded-xl hover:bg-slate-800 text-lg px-10 h-16 shadow-2xl hover:scale-105 transition-transform">
          Get a Free Quote
        </Button>
      </div>
    </section>
  );
};

const Home = () => {
  const [heroOption, setHeroOption] = useState<'slider' | 'modern'>('slider');

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="relative">
        <div className="absolute bottom-6 right-6 z-50 animate-bounce">
          <button
            onClick={() => setHeroOption(prev => prev === 'slider' ? 'modern' : 'slider')}
            className="flex items-center space-x-2 bg-slate-900/90 backdrop-blur text-white px-5 py-3 rounded-full shadow-2xl hover:bg-slate-900 transition-all active:scale-95 border border-slate-700"
          >
            <LayoutTemplate className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm">Switch to {heroOption === 'slider' ? 'Modern' : 'Slider'}</span>
          </button>
        </div>

        {heroOption === 'slider' ? <HeroSlider /> : <HeroModern />}
      </div>

      <FeaturesSection />
      <ProductsSection />
      <IndustrySection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
