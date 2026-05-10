import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Map, ArrowRight, UserCircle, Briefcase } from 'lucide-react';

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'seller') {
      navigate('/dashboard');
    } else {
      navigate('/explore');
    }
  };

  return (
    <div className="min-h-screen flex bg-forest-900">
      {/* Left Visual Side (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-forest-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1589146200234-f86af1c99026?w=1200&q=80" 
          alt="Luxury Land" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end p-20 text-white h-full">
          <Link to="/" className="flex items-center space-x-2 absolute top-12 left-20">
            <div className="w-10 h-10 bg-saffron-500 rounded-xl flex items-center justify-center shadow-lg">
              <Map className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-white tracking-tight">Aapka<span className="text-saffron-400">Land</span></span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h1 className="font-display text-5xl font-bold mb-6 text-beige-50">Smart land investing starts here.</h1>
            <p className="text-lg text-forest-100 max-w-lg mb-8">Join thousands of verified buyers and sellers navigating India's premier AI-powered marketplace.</p>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-2xl border border-white/20">
                <span className="block font-bold text-2xl text-gold-400">₹500Cr+</span>
                <span className="text-xs font-medium text-forest-200">Transaction Value</span>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-2xl border border-white/20">
                <span className="block font-bold text-2xl text-gold-400">10k+</span>
                <span className="text-xs font-medium text-forest-200">Verified Plots</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-beige-50">
        <div className="w-full max-w-[420px]">
          <div className="lg:hidden mb-12 flex justify-center">
             <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-saffron-500 rounded-xl flex items-center justify-center shadow-lg">
                <Map className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-3xl text-forest-900 tracking-tight">Aapka<span className="text-saffron-500">Land</span></span>
            </Link>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-forest-900/5 border border-beige-200"
            >
              <h2 className="font-display text-3xl font-bold text-forest-900 mb-2">
                {isLogin ? 'Welcome back' : 'Create an account'}
              </h2>
              <p className="text-forest-600 mb-8 font-medium">
                {isLogin ? 'Enter your details to access your account.' : 'Join the fastest growing land marketplace.'}
              </p>

              {!isLogin && (
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <button 
                    onClick={() => setRole('buyer')}
                    className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border-2 transition-all ${role === 'buyer' ? 'border-forest-900 bg-forest-50/50' : 'border-beige-200 bg-white hover:border-beige-300'}`}
                  >
                    <UserCircle className={`w-8 h-8 mb-2 ${role === 'buyer' ? 'text-forest-900' : 'text-forest-400'}`} />
                    <span className={`text-sm font-bold ${role === 'buyer' ? 'text-forest-900' : 'text-forest-500'}`}>I'm a Buyer</span>
                  </button>
                  <button 
                    onClick={() => setRole('seller')}
                    className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border-2 transition-all ${role === 'seller' ? 'border-forest-900 bg-forest-50/50' : 'border-beige-200 bg-white hover:border-beige-300'}`}
                  >
                    <Briefcase className={`w-8 h-8 mb-2 ${role === 'seller' ? 'text-forest-900' : 'text-forest-400'}`} />
                    <span className={`text-sm font-bold ${role === 'seller' ? 'text-forest-900' : 'text-forest-500'}`}>I'm a Seller</span>
                  </button>
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-bold text-forest-900 mb-2">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none transition-shadow" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-forest-900 mb-2">Email or Phone</label>
                  <input type="text" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none transition-shadow" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-forest-900">Password</label>
                    {isLogin && <a href="#" className="flex-1 text-right text-sm text-forest-600 hover:text-forest-900 font-medium">Forgot?</a>}
                  </div>
                  <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50 focus:ring-2 focus:ring-forest-500 outline-none transition-shadow" />
                </div>
                
                <button type="submit" className="w-full bg-forest-900 hover:bg-forest-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center group mt-8">
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-forest-600 font-medium">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button onClick={() => setIsLogin(!isLogin)} className="text-forest-900 font-bold hover:underline">
                    {isLogin ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
