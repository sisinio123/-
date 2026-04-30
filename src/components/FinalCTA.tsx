import { ShoppingCart } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/10 text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-display text-5xl md:text-8xl text-white uppercase leading-[0.85] mb-8">
          STOP BEING <span className="text-brand-red">WEAK.</span><br/>START NOW.
        </h2>
        <p className="font-sans text-xl text-gray-400 mb-12">
          Stock is running low. Everyday you wait is another day you remain the same. Over 15,000 guys have transformed. Are you next?
        </p>
        <button className="bg-brand-red hover:bg-white hover:text-brand-black text-white font-display text-3xl uppercase px-12 py-6 skew-x-[-10deg] transition-all duration-300 inline-flex items-center justify-center gap-4 group">
          <span className="skew-x-[10deg] block">Order Now</span>
          <ShoppingCart className="skew-x-[10deg] group-hover:scale-110 transition-transform" size={28} />
        </button>
      </div>
    </section>
  );
}
