import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Image as ImageIcon, CheckCircle, FileText, IndianRupee } from 'lucide-react';
import { indiaData } from '../lib/india-data';

export default function ListProperty() {
  const [step, setStep] = useState(1);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const steps = [
    { num: 1, title: 'Basic Details', icon: FileText },
    { num: 2, title: 'Location', icon: MapPin },
    { num: 3, title: 'Pricing & AI', icon: IndianRupee },
    { num: 4, title: 'Media', icon: ImageIcon },
  ];

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="flex-1 bg-beige-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-forest-900 mb-4">List Your Property</h1>
          <p className="text-forest-600 font-medium text-lg">Use AI to automatically optimize your listing.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-beige-200 -z-10 -translate-y-1/2 rounded-full"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-forest-900 -z-10 -translate-y-1/2 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-beige-50 transition-colors ${step >= s.num ? 'bg-forest-900 text-white' : 'bg-beige-200 text-forest-400'}`}>
                {step > s.num ? <CheckCircle className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
              </div>
              <span className={`mt-2 text-sm font-bold ${step >= s.num ? 'text-forest-900' : 'text-forest-400'}`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-beige-200 shadow-xl shadow-forest-900/5">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">Basic Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-forest-900 mb-2">Property Title</label>
                    <input type="text" placeholder="e.g. 5 Acre Farm Land near Pune" className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest-900 mb-2">Property Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Farm Land', 'Commercial', 'Residential', 'Industrial'].map(t => (
                        <button key={t} className="px-4 py-3 border border-beige-200 rounded-xl font-medium text-sm text-forest-700 hover:border-forest-900 hover:bg-forest-50 transition-colors focus:ring-2 focus:ring-forest-500">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest-900 mb-2">Description</label>
                    <textarea rows={4} placeholder="Describe the key highlights..." className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none"></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">Location & Area</h2>
                {/* Simplified for demo */}
                <div className="bg-beige-100 p-8 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-beige-300 text-forest-600 font-medium mb-6">
                    <MapPin className="w-8 h-8 mb-2" /> 
                    <span>Pin on Map or enter details below</span>
                    <button className="mt-4 bg-white text-forest-900 px-4 py-2 rounded-xl text-sm font-bold shadow-sm border border-beige-200 hover:bg-beige-50">Detect Location</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                      <label className="block text-sm font-bold text-forest-900 mb-2">State</label>
                      <select 
                        value={selectedState} 
                        onChange={e => { setSelectedState(e.target.value); setSelectedDistrict(''); }}
                        className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 outline-none appearance-none focus:ring-2 focus:ring-forest-500"
                      >
                        <option value="">Select State</option>
                        {Object.keys(indiaData).map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-forest-900 mb-2">District</label>
                      <select 
                        value={selectedDistrict} 
                        onChange={e => setSelectedDistrict(e.target.value)}
                        disabled={!selectedState}
                        className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 outline-none appearance-none focus:ring-2 focus:ring-forest-500 disabled:opacity-50"
                      >
                        <option value="">Select District</option>
                        {selectedState && indiaData[selectedState]?.map(district => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                   </div>
                   <div className="md:col-span-2">
                       <label className="block text-sm font-bold text-forest-900 mb-2">Village / City</label>
                       <input type="text" placeholder="e.g. Haveli, Pune Outskirts" className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 outline-none focus:ring-2 focus:ring-forest-500" />
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-forest-900 mb-2">Total Area</label>
                      <input type="number" placeholder="5" className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 outline-none" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-forest-900 mb-2">Unit</label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 outline-none">
                        <option>Acres</option>
                        <option>Sqft</option>
                        <option>Guntas</option>
                      </select>
                   </div>
                </div>
              </motion.div>
            )}

             {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">Pricing</h2>
                <div className="bg-gold-50 p-6 rounded-2xl border border-gold-200 mb-8">
                   <h4 className="font-bold text-gold-700 flex items-center mb-2">AI Pricing Assistant</h4>
                   <p className="text-gold-600 text-sm mb-4">Based on recent sales in your selected area, we recommend pricing between ₹20L - ₹25L per acre.</p>
                   <button className="text-sm bg-white border border-gold-300 text-gold-700 font-bold px-4 py-2 rounded-lg hover:bg-gold-100 transition-colors">Apply Recommended Price</button>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-forest-900 mb-2">Asking Price (₹)</label>
                    <input type="text" placeholder="12000000" className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">Upload Media</h2>
                <div className="border-2 border-dashed border-beige-300 bg-beige-50 hover:bg-beige-100 transition-colors rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-forest-900">
                     <ImageIcon className="w-8 h-8" />
                   </div>
                   <h4 className="font-bold text-forest-900 text-lg mb-2">Click to upload or drag images</h4>
                   <p className="text-forest-500 text-sm">Upload at least 5 high quality photos (JPG, PNG)</p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          <div className="flex justify-between mt-12 pt-8 border-t border-beige-200">
            <button 
              onClick={prevStep}
              className={`px-8 py-3.5 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-beige-100 text-forest-900 hover:bg-beige-200'}`}
            >
              Back
            </button>
            <button 
              onClick={nextStep}
              className="px-8 py-3.5 bg-forest-900 text-white rounded-xl font-bold hover:bg-forest-800 transition-all shadow-md flex items-center"
            >
              {step === 4 ? 'Publish Listing' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
