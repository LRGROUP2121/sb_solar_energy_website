import { Award, Target, Users } from 'lucide-react';

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover our journey, mission, and the values that drive our commitment to a sustainable future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                SB Solar Energy is an ISO 9001:2015 CERTIFIED Company dedicated to providing advanced solar energy and solar system solutions. Based in India, we have built a reputation for excellence in renewable energy integration.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our Solar Energy Systems Are Trusted By Over 1,000 Businesses, Universities, Government Institutions, And Residential Customers. We deliver premium-quality solutions at an affordable price, ensuring long-term value and sustainability for all our clients.
              </p>
              
              <div className="flex items-center space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Award className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="font-bold text-slate-900">ISO 9001:2015 Certified</h3>
                  <p className="text-sm text-slate-600">Guaranteeing quality management and operational excellence.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Our Mission', icon: Target, desc: 'To illuminate homes and businesses with clean, affordable, and sustainable energy solutions.' },
                { title: 'Our Team', icon: Users, desc: 'Unlimited Support From The Industry\'s No. 1 Technical Support Team with a 10-25 Year Warranty.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
