import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowLeft, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Breadcrumb & Back */}
      <div className="bg-slate-50 pt-24 pb-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
          <div className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section (Clean Light Mode) */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-primary/20">
                Premium Grade
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                {product.title}
              </h1>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-slate-600 font-light mb-10 leading-relaxed">
                {product.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('/contact')} size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform border-0">
                  Request a Quote
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex items-center justify-center aspect-square group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent rounded-[2.5rem] opacity-50"></div>
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain relative z-10 filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Product Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {product.description}
              </p>
              
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center tracking-tight">
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
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4" />
                      <span className="text-slate-700 leading-relaxed font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/40 sticky top-32">
                <div className="bg-slate-900 px-8 py-6">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Technical Specifications
                  </h3>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {product.specs.map((spec, i) => (
                    <div key={i} className={`flex justify-between items-center px-8 py-5 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <span className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{spec.label}</span>
                      <span className="text-slate-900 font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-500 mb-4 text-center uppercase tracking-wider">Ready to upgrade?</p>
                  <Button onClick={() => navigate('/contact')} className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform border-0 bg-slate-900 text-white hover:bg-slate-800">
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
