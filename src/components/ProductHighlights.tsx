import { ArrowRight, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '100% WHEY ISOLATE',
    benefit: 'Rapid Muscle Recovery & Growth',
    target: 'For lean muscle without the fat.',
    price: '9,500 DZD',
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    color: 'border-brand-red'
  },
  {
    id: 2,
    name: 'ANABOLIC MASS',
    benefit: 'Extreme Weight & Size Gains',
    target: 'For skinny guys who can\'t gain weight.',
    price: '7,200 DZD',
    img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
    color: 'border-white/20'
  },
  {
    id: 3,
    name: 'PURE CREATINE',
    benefit: 'Explosive Strength & Power',
    target: 'For those who want to lift heavier.',
    price: '4,500 DZD',
    img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1000&auto=format&fit=crop',
    color: 'border-white/20'
  },
  {
    id: 4,
    name: 'LHOUSSE PRE-WORKOUT',
    benefit: 'Insane Energy & Focus',
    target: 'For days when you feel weak.',
    price: '5,000 DZD',
    img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1000&auto=format&fit=crop',
    color: 'border-brand-red'
  }
];

export function ProductHighlights() {
  return (
    <section id="products" className="py-32 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase leading-[0.8]">
            CHOOSE YOUR <span className="text-transparent" style={{ WebkitTextStroke: '2px #E60000' }}>WEAPON</span>
          </h2>
          <p className="font-sans text-gray-400 mt-6 max-w-2xl text-lg">
            Every tub is packed with clinical dosages. No proprietary blends. Just pure, unadulterated power designed to build you up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className={`group relative bg-brand-dark/50 border ${p.color} p-6 flex flex-col hover:bg-brand-dark transition-all duration-300`}>
              <div className="relative h-64 mb-6 overflow-hidden flex items-center justify-center bg-black/40">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="h-4/5 object-contain grayscale mix-blend-lighten group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-3xl text-white uppercase mb-2">{p.name}</h3>
                <p className="text-brand-red font-sans font-bold text-sm uppercase tracking-wide mb-3">{p.benefit}</p>
                <p className="text-gray-400 font-sans text-sm mb-6 flex-1">{p.target}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="font-sans font-black text-xl text-white">{p.price}</span>
                  <button className="w-12 h-12 bg-white flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-white transition-colors skew-x-[-10deg]">
                    <ShoppingCart size={20} className="skew-x-[10deg]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
