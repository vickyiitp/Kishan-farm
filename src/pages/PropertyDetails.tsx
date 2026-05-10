import { motion } from 'motion/react';
import { MapPin, Sparkles, Heart, Share2, Phone, BadgeCheck, Car, Droplets, Zap, Ruler } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function PropertyDetails() {
  const { id } = useParams();

  return (
    <div className="flex-1 bg-beige-50 pt-4 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2 text-sm font-medium text-forest-600">
            <span>Home</span> <span>/</span> <span>Properties</span> <span>/</span> <span className="text-forest-900">Premium Farm Track</span>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-beige-200 rounded-xl font-medium text-forest-900 hover:bg-beige-100 transition-colors">
              <Share2 className="w-4 h-4" /> <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-beige-200 rounded-xl font-medium text-forest-900 hover:bg-beige-100 transition-colors">
              <Heart className="w-4 h-4" /> <span>Save</span>
            </button>
          </div>
        </div>

        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 h-[50vh] min-h-[400px]"
        >
          <div className="md:col-span-3 rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80" alt="Main" className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 z-10 bg-forest-900/90 backdrop-blur text-gold-400 text-sm font-bold px-4 py-2 rounded-full flex items-center shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" /> AI Verified
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex-1 rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1592984180860-2e4bda1250ee?w=400&q=80" alt="Sub" className="w-full h-full object-cover hover:scale-105 transition-transform" /></div>
            <div className="flex-1 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=400&q=80" alt="Sub" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-forest-900/40 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                +12 Photos
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Info */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-bold">Farm Land</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-bold">Freehold</span>
              </div>
              <h1 className="font-display text-4xl font-bold text-forest-900 mb-4">Premium Farm Track, Pune Outskirts</h1>
              <div className="flex items-center text-forest-600 font-medium">
                <MapPin className="w-5 h-5 mr-1" />
                <span>Haveli Taluka, Pune, Maharashtra 411025</span>
              </div>
            </div>

            {/* Price & Highlight Bar */}
            <div className="bg-white p-6 rounded-3xl border border-beige-200 shadow-sm flex flex-wrap justify-between items-center gap-6 mb-10">
              <div>
                <p className="text-forest-600 text-sm font-bold mb-1">Asking Price</p>
                <h2 className="font-display text-3xl font-bold text-gold-600">₹1.20 Cr</h2>
              </div>
              <div className="h-10 w-[1px] bg-beige-200 hidden md:block"></div>
              <div>
                <p className="text-forest-600 text-sm font-bold mb-1">Total Area</p>
                <div className="flex items-center text-forest-900 font-bold text-xl"><Ruler className="w-5 h-5 mr-2" /> 5 Acres</div>
              </div>
              <div className="h-10 w-[1px] bg-beige-200 hidden md:block"></div>
              <div>
                <p className="text-forest-600 text-sm font-bold mb-1">Price per Acre</p>
                <div className="text-forest-900 font-bold text-xl">₹24 Lakhs</div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-forest-900 text-white p-8 rounded-3xl mb-10 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Sparkles className="w-40 h-40 object-cover" />
               </div>
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gold-500 p-2 rounded-xl text-forest-900"><Sparkles className="w-6 h-6" /></div>
                  <h3 className="font-display text-2xl font-bold text-gold-400">AI Investment Analysis</h3>
                </div>
                <p className="text-forest-100 text-lg leading-relaxed mb-8 max-w-2xl">
                  "This property boasts a <strong className="text-gold-400">High ROI potential</strong> due to the upcoming PMRDA Ring Road project located just 3km away. Ground water levels are excellent, making it prime for agro-tourism or high-yield farming."
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur">
                    <p className="text-forest-200 text-sm mb-1">Growth Score</p>
                    <p className="font-bold text-xl text-gold-400">92/100</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur">
                    <p className="text-forest-200 text-sm mb-1">Infrastructure</p>
                    <p className="font-bold text-xl text-gold-400">85/100</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur">
                    <p className="text-forest-200 text-sm mb-1">Est. 5yr APY</p>
                    <p className="font-bold text-xl text-gold-400">14.5%</p>
                  </div>
                </div>
               </div>
            </div>

            {/* Amenities / Infrastructure */}
            <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">Land Infrastructure</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Tar Road Access', icon: Car, val: 'Yes (12m)' },
                { label: 'Water Source', icon: Droplets, val: 'Borewell (Active)' },
                { label: 'Electricity Grid', icon: Zap, val: '3-Phase Available' },
              ].map(item => (
                <div key={item.label} className="bg-white p-4 rounded-2xl border border-beige-200 flex items-center gap-4">
                   <div className="bg-beige-100 p-2 rounded-lg text-forest-700"><item.icon className="w-5 h-5" /></div>
                   <div>
                     <p className="text-xs text-forest-500 font-bold uppercase">{item.label}</p>
                     <p className="font-semibold text-forest-900">{item.val}</p>
                   </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-3xl border border-beige-200 shadow-lg">
                <div className="flex items-center gap-4 border-b border-beige-100 pb-6 mb-6">
                  <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center text-forest-900 font-display font-bold text-2xl">
                    VK
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-900 text-lg flex items-center">
                      Vedant Kumar
                      <BadgeCheck className="w-5 h-5 text-blue-500 ml-1" />
                    </h4>
                    <p className="text-forest-600 text-sm">Verified Seller • Joined 2024</p>
                  </div>
                </div>
                
                <button className="w-full bg-forest-900 hover:bg-forest-800 text-white font-bold py-4 rounded-xl mb-3 transition-colors shadow-md flex justify-center items-center">
                   <Phone className="w-5 h-5 mr-2" /> Contact Seller
                </button>
                <button className="w-full bg-white hover:bg-beige-50 border-2 border-forest-900 text-forest-900 font-bold py-3.5 rounded-xl transition-colors">
                   Schedule Site Visit
                </button>
              </div>

               {/* Nearby Map Preview */}
               <div className="bg-white p-1 rounded-3xl border border-beige-200 shadow-sm overflow-hidden h-64 relative">
                 <div className="absolute inset-0 bg-beige-200 flex items-center justify-center">
                   {/* Map Placeholder */}
                   <MapPin className="w-12 h-12 text-forest-400" />
                 </div>
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-sm text-center font-medium text-sm text-forest-900 cursor-pointer hover:bg-white">
                   Open in Maps View
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
