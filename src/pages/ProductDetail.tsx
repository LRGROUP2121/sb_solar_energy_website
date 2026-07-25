import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowLeft, CheckCircle2, Zap, Cpu, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when loading a new product page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#050b14]">
        {/* Deep background mesh/glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#050b14] to-[#050b14] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header & Title */}
          <div className="text-center mb-10 md:mb-16">
            <Link to="/products" className="inline-flex items-center text-cyan-500/70 hover:text-cyan-400 mb-6 transition-colors text-sm font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                {product.title}
              </span>
            </h1>
            <p className="text-slate-400 mt-4 text-lg md:text-xl font-light">{product.subtitle}</p>
          </div>

          {/* Radial Layout Desktop */}
          <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[600px] flex items-center justify-center">
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-slate-700/50 flex items-center justify-center bg-[#0a1220]/50 shadow-inner">
              
              {/* Spinning Ring 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-t-[2px] border-r-[2px] border-cyan-500/40"
              ></motion.div>
              
              {/* Spinning Ring 2 (Dashed, reverse) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-7.5%] rounded-full border-b-[2px] border-l-[2px] border-blue-500/30 border-dashed"
              ></motion.div>

              {/* Central Product Image */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 w-44 md:w-64 lg:w-80"
              >
                <img src={product.image} alt={product.title} className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
              </motion.div>

            </div>

            {/* Left Nodes (Static) */}
            <div className="absolute left-0 md:left-4 lg:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 md:gap-24 z-30 hidden sm:flex">
              
              <div className="flex items-center gap-4 group cursor-default">
                <span className="text-white font-semibold text-sm md:text-base tracking-widest uppercase shadow-sm">Technology</span>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-cyan-500/50 bg-[#050b14] flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] group-hover:border-cyan-400 transition-all duration-300 relative">
                   <Cpu className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                   {/* Connector Line */}
                   <div className="absolute right-[-20px] md:right-[-40px] top-1/2 h-[1px] w-[20px] md:w-[40px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-default">
                <span className="text-white font-semibold text-sm md:text-base tracking-widest uppercase shadow-sm">Key Features</span>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-cyan-500/50 bg-[#050b14] flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] group-hover:border-cyan-400 transition-all duration-300 relative">
                   <Settings className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                   {/* Connector Line */}
                   <div className="absolute right-[-20px] md:right-[-40px] top-1/2 h-[1px] w-[20px] md:w-[40px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                </div>
              </div>

            </div>

            {/* Right Nodes (Dynamic Features) */}
            <div className="absolute right-0 md:right-4 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[300px] md:h-[450px] z-30 hidden sm:flex max-w-[220px] md:max-w-[280px]">
              {product.features.slice(0, 5).map((feature, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.5 + (idx * 0.1) }}
                   className="flex items-center gap-3 md:gap-4 group cursor-default"
                 >
                   <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 bg-slate-800/80 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)] shrink-0 z-10 group-hover:border-cyan-500/50 transition-colors">
                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
                     {/* Connector Line */}
                     <div className="absolute left-[-20px] md:left-[-40px] top-1/2 h-[1px] w-[20px] md:w-[40px] bg-gradient-to-l from-white/20 group-hover:from-cyan-500/50 to-transparent -z-10"></div>
                   </div>
                   <span className="text-slate-300 font-medium text-[11px] md:text-sm leading-tight group-hover:text-cyan-300 transition-colors">{feature}</span>
                 </motion.div>
              ))}
            </div>

          </div>

          {/* Mobile Fallback Features List */}
          <div className="mt-8 sm:hidden space-y-3 px-2">
            <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-center mb-4 text-sm">Key Specifications</h3>
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#0a1220] p-3.5 rounded-xl border border-slate-800 shadow-lg">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
                 <span className="text-slate-300 text-xs leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] border-0 font-bold tracking-wide rounded-full px-8">
              Request a Quote
            </Button>
          </div>

        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Overview</h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {product.description}
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Zap className="h-6 w-6 text-amber-500 mr-3" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-3" />
                    <span className="text-slate-700 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                  Technical Specifications
                </h3>
                <div className="space-y-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-slate-900 font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-4 text-center">Ready to upgrade your energy infrastructure?</p>
                  <Button onClick={() => navigate('/contact')} className="w-full h-14 text-lg shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
