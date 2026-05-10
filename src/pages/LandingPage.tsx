import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, TrendingUp, ShieldCheck, Sparkles, Sprout, Building, Map, Compass, HardHat } from 'lucide-react';
import { cn } from '../lib/utils';
import { indiaData } from '../lib/india-data';

const CATEGORIES = [
  { name: 'Farm Land', icon: Sprout, count: '12k+', color: 'bg-green-100 text-green-700' },
  { name: 'Residential', icon: Building, count: '8k+', color: 'bg-blue-100 text-blue-700' },
  { name: 'Commercial', icon: Map, count: '5k+', color: 'bg-gold-100 text-gold-700' },
  { name: 'Resort/Tourism', icon: Compass, count: '2k+', color: 'bg-purple-100 text-purple-700' },
  { name: 'Industrial', icon: HardHat, count: '3k+', color: 'bg-gray-100 text-gray-700' },
];

const FEATURED = [
  { id: 1, title: 'Premium Farm Track, Pune', price: '₹1.2 Cr', area: '5 Acres', loc: 'Pune, Maharashtra', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', ai: 'High ROI' },
  { id: 2, title: 'Commercial Plot, Highway Facing', price: '₹4.5 Cr', area: '10,000 sqft', loc: 'Devanahalli, Bangalore', img: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&q=80', ai: 'Best Investment' },
  { id: 3, title: 'Resort View Land, Wayanad', price: '₹85 Lakhs', area: '2 Acres', loc: 'Wayanad, Kerala', img: 'https://images.unsplash.com/photo-1628102491629-77858ab5722c?w=800&q=80', ai: 'Tourism Hub' },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="flex-1 w-full bg-beige-50">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-forest-900/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1592984180860-2e4bda1250ee?w=2000&q=80" 
          alt="Cinematic Indian Farmland" 
          className="absolute inset-0 w-full h-[80vh] object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-saffron-400 font-display font-medium text-xl tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-10 h-[1px] bg-saffron-400"></span>
            Namaste
            <span className="w-10 h-[1px] bg-saffron-400"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl"
          >
            Find Solid Ground <br /> In Incredible India
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-beige-100 mb-10 drop-shadow max-w-2xl"
          >
            Aapka Apna AI-powered marketplace for farm, commercial, and residential plots.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl glass p-4 md:p-6 rounded-3xl"
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <select 
                  value={selectedState} 
                  onChange={e => { setSelectedState(e.target.value); setSelectedDistrict(''); }}
                  className="px-4 py-3 rounded-xl border border-white/40 bg-white/60 backdrop-blur outline-none focus:ring-2 focus:ring-forest-500 text-forest-900 font-medium appearance-none"
                >
                  <option value="">State...</option>
                  {Object.keys(indiaData).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <select 
                  value={selectedDistrict} 
                  onChange={e => setSelectedDistrict(e.target.value)}
                  disabled={!selectedState}
                  className="px-4 py-3 rounded-xl border border-white/40 bg-white/60 backdrop-blur outline-none focus:ring-2 focus:ring-forest-500 text-forest-900 font-medium appearance-none disabled:opacity-70"
                >
                  <option value="">District...</option>
                  {selectedState && indiaData[selectedState]?.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <input type="text" placeholder="City/Village..." className="px-4 py-3 rounded-xl border border-white/40 bg-white/60 backdrop-blur outline-none focus:ring-2 focus:ring-forest-500 placeholder-forest-900/50 text-forest-900 font-medium" />
                <select className="px-4 py-3 rounded-xl border border-white/40 bg-white/60 backdrop-blur outline-none focus:ring-2 focus:ring-forest-500 text-forest-900 font-medium">
                  <option value="">Budget</option>
                  <option value="1">Under ₹50L</option>
                  <option value="2">₹50L - ₹2Cr</option>
                  <option value="3">Above ₹2Cr</option>
                </select>
              </div>
              <button type="submit" className="bg-forest-900 hover:bg-forest-800 text-white px-8 py-3 rounded-xl font-medium transition-colors flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-saffron-100 pb-4">
          <div>
            <h2 className="font-display text-4xl font-bold text-forest-900 mb-2 flex items-center gap-3">
              <span className="text-saffron-500 text-2xl">❋</span> Explore Categories
            </h2>
            <p className="text-forest-700 text-lg">Browse curated land categories across Bharat.</p>
          </div>
          <Link to="/explore" className="hidden md:flex text-saffron-600 hover:text-saffron-800 font-medium">View All Categories &rarr;</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-beige-200 group cursor-pointer"
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", cat.color)}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-forest-900 text-lg mb-1">{cat.name}</h3>
              <p className="text-forest-600 text-sm">{cat.count} Properties</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-24 bg-beige-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-saffron-100 pb-4">
            <div>
              <h2 className="font-display text-4xl font-bold text-forest-900 mb-2 flex items-center gap-3">
                 <span className="text-saffron-500 text-2xl">✤</span> Featured Listings
              </h2>
              <p className="text-forest-700 text-lg">AI verified premium properties.</p>
            </div>
            <Link to="/explore" className="text-saffron-600 hover:text-saffron-800 font-medium">View All &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED.map((prop, i) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-beige-200 group relative"
              >
                <div className="absolute top-4 left-4 z-10 bg-forest-900/90 backdrop-blur text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {prop.ai}
                </div>
                <div className="relative h-60 overflow-hidden">
                  <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-forest-900 text-xl leading-tight w-2/3">{prop.title}</h3>
                    <span className="font-display font-bold text-2xl text-gold-600">{prop.price}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-forest-700 mb-6 font-medium">
                    <span className="flex items-center"><Map className="w-4 h-4 mr-1"/> {prop.area}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> {prop.loc}</span>
                  </div>
                  <Link to={`/property/${prop.id}`} className="block w-full py-3 text-center rounded-xl bg-forest-50 text-forest-900 font-bold hover:bg-forest-900 hover:text-white transition-colors">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-saffron-500/20 text-6xl">❖</div>
          <h2 className="font-display text-4xl font-bold text-forest-900 mb-4 relative z-10">Why Invest with AapkaLand?</h2>
          <p className="text-forest-700 text-lg relative z-10">We bring transparency, data intelligence, and trust to Indian land investments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'AI-Powered Insights', icon: Sparkles, desc: 'We use machine learning to predict upcoming growth corridors and infrastructure developments before they happen.' },
            { title: '100% Verified Properties', icon: ShieldCheck, desc: 'Every listed property goes through rigorous physical and legal title verification to ensure zero risk.' },
            { title: 'Smart Pricing Data', icon: TrendingUp, desc: 'Real-time market valuation and historical price trend analysis so you never overpay for your plot.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-beige-200 text-center hover:border-gold-500 transition-colors shadow-sm"
            >
              <div className="w-16 h-16 bg-forest-50 text-forest-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-forest-900 text-xl mb-3">{feature.title}</h3>
              <p className="text-forest-700 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
