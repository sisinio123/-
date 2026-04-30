import { Instagram, Facebook, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-transparent pt-20 pb-10 border-t-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-3xl font-display uppercase tracking-wider text-white mb-6">
              Protein ou <span className="text-brand-red">Lhougra</span>
            </div>
            <p className="text-gray-500 font-sans max-w-sm">
              The #1 hardcore supplement brand in Algeria. Real results without the fake marketing narrative. Stay strong, stay loyal.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl text-white uppercase mb-6">Links</h4>
            <ul className="space-y-3 font-sans text-gray-500 text-sm font-semibold uppercase tracking-wide">
              <li><a href="#products" className="hover:text-brand-red transition-colors">Products</a></li>
              <li><a href="#why-us" className="hover:text-brand-red transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-red transition-colors">Brotherhood</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-xl text-white uppercase mb-6">Contact</h4>
            <div className="space-y-4 font-sans text-gray-500 text-sm">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} /> +213 555 12 34 56
              </a>
              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-white">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} PROTEIN OU LHOUGRA. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
