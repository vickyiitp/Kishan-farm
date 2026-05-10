import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, SlidersHorizontal, ChevronDown, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { indiaData } from '../lib/india-data';

const PROPERTIES = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? 'Premium Farm Track, Pune' : 'Commercial Plot, Highway',
  price: i % 2 === 0 ? '₹1.2 Cr' : '₹4.5 Cr',
  area: i % 2 === 0 ? '5 Acres' : '10,000 sqft',
  loc: i % 2 === 0 ? 'Pune, Maharashtra' : 'Devanahalli, Bangalore',
  img: i % 2 === 0 ? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' : 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&q=80',
  ai: i % 2 === 0 ? 'High ROI' : 'Best Investment'
}));

export default function ExploreProperties() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  return (
    <div className="flex-1 bg-beige-50 pt-6 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-saffron-100 pb-4">
          <h1 className="font-display text-3xl font-bold text-forest-900 flex items-center gap-3">
            <span className="text-saffron-500 text-2xl">✤</span> Explore Properties
          </h1>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-beige-200">
            <div className="flex bg-beige-100 rounded-xl p-1">
              <button onClick={() => setView('grid')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === 'grid' ? 'bg-white shadow' : 'text-forest-600'}`}>Grid</button>
              <button onClick={() => setView('list')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === 'list' ? 'bg-white shadow' : 'text-forest-600'}`}>List</button>
            </div>
            <div className="h-6 w-[1px] bg-beige-200"></div>
            <button className="px-4 py-1.5 text-sm font-medium text-forest-900 flex items-center">
              Sort: Recommended <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-80 flex-shrink-0"
          >
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-beige-200 sticky top-28">
              <div className="flex items-center gap-2 mb-6 text-forest-900 font-bold text-lg border-b border-beige-100 pb-4">
                <SlidersHorizontal className="w-5 h-5" /> Filters
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-forest-900 mb-2 block">State</label>
                  <select 
                    value={selectedState} 
                    onChange={e => { setSelectedState(e.target.value); setSelectedDistrict(''); }}
                    className="w-full px-4 py-2.5 mb-4 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none text-sm appearance-none"
                  >
                    <option value="">All States</option>
                    {Object.keys(indiaData).map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>

                  <label className="text-sm font-bold text-forest-900 mb-2 block">District</label>
                  <select 
                    value={selectedDistrict} 
                    onChange={e => setSelectedDistrict(e.target.value)}
                    disabled={!selectedState}
                    className="w-full px-4 py-2.5 mb-4 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none text-sm appearance-none disabled:opacity-50"
                  >
                    <option value="">All Districts</option>
                    {selectedState && indiaData[selectedState]?.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  
                  <label className="text-sm font-bold text-forest-900 mb-2 block">City / Village</label>
                  <input type="text" placeholder="Enter city or village..." className="w-full px-4 py-2.5 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none text-sm" />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-forest-900 mb-2 block">Property Type</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none text-sm appearance-none">
                    <option>All Types</option>
                    <option>Farm Land</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-forest-900 mb-2 block flex justify-between">
                    <span>Budget</span>
                    <span className="text-gold-600">₹0 - ₹10+ Cr</span>
                  </label>
                  <input type="range" min="0" max="100" className="w-full accent-forest-900" />
                </div>

                <div>
                  <label className="text-sm font-bold text-forest-900 mb-3 block">AI Filters</label>
                  <div className="space-y-2">
                    {['Best Investment', 'High Growth', 'Commercial Potential'].map(tag => (
                      <label key={tag} className="flex items-center space-x-2 text-sm text-forest-700 cursor-pointer">
                        <input type="checkbox" className="rounded text-gold-500 focus:ring-gold-500" />
                        <span>{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-forest-900 text-white font-bold py-3 rounded-xl hover:bg-forest-800 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Property Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {PROPERTIES.map((prop, i) => (
                <motion.div 
                  key={prop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-beige-200 group relative ${view === 'list' ? 'flex flex-row h-48' : ''}`}
                >
                  <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/70 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-forest-900" />
                  </button>
                  <div className="absolute top-4 left-4 z-10 bg-forest-900/90 backdrop-blur text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {prop.ai}
                  </div>
                  <div className={`relative overflow-hidden ${view === 'list' ? 'w-1/3 h-full' : 'h-52 w-full'}`}>
                    <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className={`p-6 ${view === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-forest-900 text-lg leading-tight w-2/3">{prop.title}</h3>
                      <span className="font-display font-bold text-xl text-gold-600">{prop.price}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-forest-700 mb-6 font-medium">
                      <span className="bg-beige-100 px-2 py-1 rounded-md">{prop.area}</span>
                      <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> {prop.loc}</span>
                    </div>
                    <div className="mt-auto">
                      <Link to={`/property/${prop.id}`} className="block w-full py-2.5 text-center rounded-xl border border-forest-200 text-forest-900 font-bold hover:bg-forest-50 transition-colors">
                        Quick View
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-white border border-beige-200 text-forest-900 font-bold rounded-xl shadow-sm hover:bg-beige-50 transition-colors">
                Load More Properties
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
