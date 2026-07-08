import { Battery, Sun, Wrench, Droplets, Zap, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Products = () => {
  const categories = [
    { id: 'pv-module', title: 'Solar PV Module', icon: Sun, desc: 'Highly Efficient Array of Solar PV Modules with 10-25 Year Warranty.' },
    { id: 'light-system', title: 'Street Light System', icon: Lightbulb, desc: 'Premium-Quality Solar Street Light Systems for robust outdoor illumination.' },
    { id: 'water-pump', title: 'Solar Water Pump', icon: Droplets, desc: 'Efficient water pumping solutions powered entirely by solar energy.' },
    { id: 'inverters', title: 'Solar Inverters', icon: Zap, desc: 'On-Grid, Off-Grid, and Hybrid Inverters for all your energy conversion needs.' },
    { id: 'batteries', title: 'Inverters & Battery', icon: Battery, desc: 'High-capacity energy storage systems for uninterrupted power supply.' },
    { id: 'accessories', title: 'Accessories Solar', icon: Wrench, desc: 'All necessary mounting structures, cables, and solar accessories.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Products</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Highly Efficient Array of Solar PV Modules | Inverters | Energy Storage Systems | Premium-Quality At Affordable Price
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  <cat.icon className="h-20 w-20 text-slate-300 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{cat.desc}</p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
