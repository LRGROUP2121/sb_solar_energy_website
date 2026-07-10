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
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br ${product.bgGradient}`}>
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/products" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                Premium Grade
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-white/80 font-light mb-8">
                {product.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl border-0">
                  Request a Quote
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain filter drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
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
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm sticky top-32">
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
      
      {/* Breadcrumb Footer */}
      <div className="bg-slate-50 py-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900">{product.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
