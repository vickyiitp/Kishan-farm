import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, BrainCircuit, Target, Banknote, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIRecommendation() {
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const startAnalysis = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(4);
    }, 3000);
  };

  return (
    <div className="flex-1 bg-forest-900 min-h-screen text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-forest-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <AnimatePresence mode="wait">
          
          {/* Welcome Screen */}
          {step === 0 && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center pt-20">
               <div className="w-24 h-24 bg-white/10 rounded-3xl mx-auto mb-8 flex items-center justify-center backdrop-blur shadow-2xl shadow-gold-500/20 border border-white/20">
                 <BrainCircuit className="w-12 h-12 text-gold-400" />
               </div>
               <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-beige-50">AapkaLand <span className="text-gold-400 text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-gold-400">Oracle</span></h1>
               <p className="text-xl text-forest-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">Tell our AI what you're looking for, and we'll analyze 10,000+ data points across infrastructure, demographics, and market trends to find your perfect land investment.</p>
               <button onClick={() => setStep(1)} className="bg-white text-forest-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-beige-100 transition-colors shadow-lg shadow-white/10 flex items-center mx-auto">
                 Begin Consultation <ArrowRight className="w-5 h-5 ml-2" />
               </button>
            </motion.div>
          )}

          {/* Question 1 */}
          {step === 1 && (
            <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto mt-20">
              <span className="text-gold-400 font-bold mb-4 block">Question 1 of 3</span>
              <h2 className="font-display text-4xl font-bold mb-10 text-beige-50">What is the primary purpose of this investment?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'farm', label: 'Farming & Agriculture', icon: Target },
                  { id: 'dev', label: 'Commercial Development', icon: Building2 },
                  { id: 'hold', label: 'Long-term Growth (Hold)', icon: Banknote },
                  { id: 'resort', label: 'Resort or Tourism', icon: Sparkles }
                ].map((opt) => (
                  <button key={opt.id} onClick={() => setStep(2)} className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl text-left transition-all group backdrop-blur">
                    <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                      <opt.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h3 className="font-bold text-lg text-white">{opt.label}</h3>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

           {/* Question 2 */}
           {step === 2 && (
            <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto mt-20">
               <span className="text-gold-400 font-bold mb-4 block">Question 2 of 3</span>
              <h2 className="font-display text-4xl font-bold mb-10 text-beige-50">What is your investment budget?</h2>
               <div className="space-y-4">
                {['Under ₹50 Lakhs', '₹50 Lakhs to ₹2 Crores', '₹2 Crores to ₹5 Crores', 'Above ₹5 Crores'].map((opt) => (
                  <button key={opt} onClick={() => setStep(3)} className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl text-left transition-all backdrop-blur font-bold text-lg">
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Question 3 */}
          {step === 3 && !isGenerating && (
            <motion.div key="q3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-2xl mx-auto mt-20">
               <span className="text-gold-400 font-bold mb-4 block">Question 3 of 3</span>
              <h2 className="font-display text-4xl font-bold mb-10 text-beige-50">Any preferred state or region?</h2>
               <div className="space-y-4 mb-8">
                  <input type="text" placeholder="e.g. Maharashtra, Bangalore outskirts..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-gold-500 text-lg placeholder-white/30 backdrop-blur" />
              </div>
              <button onClick={startAnalysis} className="w-full bg-gold-500 hover:bg-gold-400 text-forest-900 py-5 rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex justify-center items-center">
                 <Sparkles className="w-6 h-6 mr-2" />
                 Analyze Market Data
              </button>
            </motion.div>
          )}

          {/* Processing State */}
           {isGenerating && (
            <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center pt-32">
               <div className="relative w-32 h-32 mb-8">
                 <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-gold-400 rounded-full border-t-transparent animate-spin"></div>
                 <BrainCircuit className="absolute inset-0 m-auto w-10 h-10 text-white animate-pulse" />
               </div>
               <h2 className="font-display text-3xl font-bold mb-4 text-beige-50">Processing 10,000+ Data Points</h2>
               <p className="text-forest-200">Analyzing upcoming infrastructure projects and historical trends...</p>
            </motion.div>
          )}

          {/* Results */}
          {step === 4 && (
            <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
              <div className="text-center mb-16">
                 <h2 className="font-display text-4xl font-bold mb-4 text-beige-50">Your Oracle Analysis is Ready</h2>
                 <p className="text-xl text-forest-200">Based on a ₹2Cr budget for Long-term hold in Maharashtra.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Result Card */}
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
                   <div className="flex items-center gap-3 mb-6">
                     <span className="bg-gold-500/20 text-gold-400 px-3 py-1 rounded-lg text-sm font-bold border border-gold-500/30">#1 Recommendation</span>
                   </div>
                   <h3 className="font-display text-3xl font-bold text-white mb-4">Purandar-Saswad Corridor, Pune</h3>
                   <p className="text-forest-100 leading-relaxed mb-8">
                     This region is projected to see a <strong className="text-gold-400">45% appreciation</strong> over the next 5 years. The catalyst is the proposed International Airport and the upcoming Ring Road intersection which resolves current connectivity bottlenecks.
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-black/20 p-4 rounded-2xl">
                       <p className="text-forest-300 text-sm mb-1">Current Avg Price</p>
                       <p className="font-bold text-xl text-white">₹35L / Acre</p>
                     </div>
                     <div className="bg-black/20 p-4 rounded-2xl">
                       <p className="text-forest-300 text-sm mb-1">Projected Price (2030)</p>
                       <p className="font-bold text-xl text-gold-400">₹60L / Acre</p>
                     </div>
                   </div>

                   <Link to="/explore" className="inline-block bg-white text-forest-900 px-6 py-3 rounded-xl font-bold hover:bg-beige-100 transition-colors">
                     View Properties Here
                   </Link>
                </div>

                {/* Secondary Cards */}
                 <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
                       <h4 className="font-bold text-white mb-2">Key Growth Drivers</h4>
                       <ul className="space-y-3 text-forest-200 text-sm">
                         <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0 mt-0.5" /> Approved International Airport</li>
                         <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0 mt-0.5" /> PMRDA Ring Road Phase 2</li>
                         <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0 mt-0.5" /> High ground water table</li>
                       </ul>
                    </div>
                     <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
                       <h4 className="font-bold text-white mb-2 text-gold-400">Alternative Options</h4>
                       <div className="space-y-3">
                         <div className="border-b border-white/10 pb-2">
                           <p className="font-bold text-sm text-white">Shirdi-Nashik Highway</p>
                           <p className="text-xs text-forest-300">Lower entry price, high agro-tourism potential.</p>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

// Dummy CheckCircle because it's missing in imports above
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
