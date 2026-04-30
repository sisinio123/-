import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-2xl font-display uppercase tracking-wider text-white">
          Protein ou <span className="text-brand-red">Lhougra</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm uppercase tracking-wide">
          <a href="#products" className="hover:text-brand-red transition-colors text-white/80">Products</a>
          <a href="#why-us" className="hover:text-brand-red transition-colors text-white/80">Why Us</a>
          <a href="#testimonials" className="hover:text-brand-red transition-colors text-white/80">Reviews</a>
          <a href="#contact" className="hover:text-brand-red transition-colors text-white/80">FAQ</a>
          <button className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2.5 flex items-center gap-2 transform transition-all hover:scale-105 active:scale-95 skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">Commander</span>
            <ShoppingCart size={16} className="skew-x-[10deg]" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/5 flex flex-col p-6 gap-6 uppercase font-display text-xl">
          <a href="#products" className="text-white hover:text-brand-red" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#why-us" className="text-white hover:text-brand-red" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#testimonials" className="text-white hover:text-brand-red" onClick={() => setIsOpen(false)}>Reviews</a>
          <button className="bg-brand-red w-full text-white py-4 flex justify-center items-center gap-2">
            Commander Maintenant <ShoppingCart size={20} />
          </button>
        </div>
      )}
    </nav>
  );
}
