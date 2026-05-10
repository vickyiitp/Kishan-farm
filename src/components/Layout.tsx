import { Link, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, User, Map, Sparkles, PlusCircle } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-saffron-500 rounded-xl flex items-center justify-center shadow-lg">
              <Map className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-forest-900 tracking-tight">Aapka<span className="text-saffron-600">Land</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-forest-800 hover:text-saffron-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/explore" className="text-forest-800 hover:text-saffron-600 font-medium transition-colors relative group">
              Explore
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/ai-recommendation" className="flex items-center space-x-1 text-forest-800 hover:text-saffron-600 font-medium transition-colors relative group">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>AI Insights</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth" className="flex items-center space-x-2 hover:bg-forest-50 px-4 py-2 rounded-full transition-colors text-forest-900 font-medium">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link to="/list-property" className="bg-forest-900 hover:bg-forest-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-xl flex items-center space-x-2 transform hover:-translate-y-0.5">
              <PlusCircle className="w-4 h-4" />
              <span>List Property</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-forest-900 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/20 px-4 pt-2 pb-4 space-y-1 shadow-lg"
        >
          <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-3 text-forest-900 font-medium rounded-xl hover:bg-white/50">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/explore" className="block px-3 py-3 text-forest-900 font-medium rounded-xl hover:bg-white/50">Explore Properties</Link>
          <Link onClick={() => setIsOpen(false)} to="/ai-recommendation" className="block px-3 py-3 text-forest-900 font-medium rounded-xl hover:bg-white/50 flex flex-row items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>AI Insights</span>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/auth" className="block px-3 py-3 text-forest-900 font-medium rounded-xl hover:bg-white/50">Login</Link>
          <Link onClick={() => setIsOpen(false)} to="/list-property" className="block px-3 py-3 mt-2 bg-forest-900 text-white font-medium rounded-xl text-center shadow-md">List Property</Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
      <footer className="bg-forest-900 text-beige-50 pt-20 pb-10 border-t-8 border-saffron-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-saffron-500 rounded-xl flex items-center justify-center">
                <Map className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">Aapka<span className="text-saffron-400">Land</span></span>
            </div>
            <p className="text-forest-100/70 text-sm leading-relaxed">
              India's premier AI-powered marketplace for farm, commercial, and residential land investments. Proudly built for Bharat.
            </p>
          </div>
          <div>
            <h4 className="text-gold-400 font-display font-semibold text-lg mb-6">Properties</h4>
            <ul className="space-y-4">
              <li><Link to="/explore?type=farm" className="text-forest-100/70 hover:text-white transition-colors">Farm Land</Link></li>
              <li><Link to="/explore?type=commercial" className="text-forest-100/70 hover:text-white transition-colors">Commercial Plots</Link></li>
              <li><Link to="/explore?type=residential" className="text-forest-100/70 hover:text-white transition-colors">Residential Land</Link></li>
              <li><Link to="/explore?type=industrial" className="text-forest-100/70 hover:text-white transition-colors">Industrial Zones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 font-display font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/ai-recommendation" className="text-forest-100/70 hover:text-white transition-colors">AI Insights</Link></li>
              <li><Link to="/dashboard" className="text-forest-100/70 hover:text-white transition-colors">Seller Dashboard</Link></li>
              <li><Link to="/list-property" className="text-forest-100/70 hover:text-white transition-colors">List Your Land</Link></li>
              <li><Link to="/auth" className="text-forest-100/70 hover:text-white transition-colors">Login / Signup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-forest-100/70">support@kisanland.com</li>
              <li className="text-forest-100/70">1800-123-4567</li>
              <li className="text-forest-100/70">Bangalore, Karnataka</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-forest-100/50 text-sm">© 2026 AapkaLand. All rights reserved.</p>
            <p className="text-saffron-400 text-sm mt-1 flex items-center gap-1 font-medium italic">Crafted with <span className="text-saffron-500">❤️</span> by humans.</p>
          </div>
          <div className="flex space-x-6">
            <span className="text-forest-100/50 text-sm hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-forest-100/50 text-sm hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
