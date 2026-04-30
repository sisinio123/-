import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with aggressive dark/red overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat grayscale-[80%] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(230,0,0,0.15)_0%,transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block bg-brand-red/20 border border-brand-red/50 text-brand-red px-4 py-1 font-sans font-bold text-sm tracking-widest uppercase self-start rounded-full">
            N°1 in Algeria
          </div>
          
          <h1 className="font-display text-7xl md:text-8xl lg:text-[140px] leading-[0.85] text-white uppercase tracking-tight">
            NO <span className="text-brand-red">WEAKNESS.</span><br />
            NO <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>EXCUSES.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-400 max-w-lg mt-4 font-medium leading-relaxed">
            Real results. No fake marketing. Quality supplements designed for guys who want to dominate the gym and life. 
            <strong className="text-white"> Protein ou Lhougra.</strong>
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red hover:bg-white hover:text-brand-black text-white font-display text-2xl uppercase px-10 py-5 skew-x-[-10deg] transition-all duration-300 flex items-center justify-center gap-3 group">
              <span className="skew-x-[10deg] block">Start Transformation</span>
              <ArrowRight className="skew-x-[10deg] group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </button>
          </div>
        </motion.div>

        {/* Hero Visuals */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative h-full"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full aspect-square border-[1px] border-white/10 rounded-full"></div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-4/5 aspect-square border-[1px] border-brand-red/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          {/* Abstract supplement product rendering representation */}
          <div className="relative z-10 w-full h-[600px] bg-gradient-to-b from-brand-dark to-brand-black border border-white/5 shadow-2xl skew-y-[5deg] skew-x-[-5deg] rotate-[10deg] flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite]"></div>
            <div className="font-display text-8xl text-white/5 absolute -right-10 top-10 rotate-90">100% WHEY</div>
            <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop" alt="Supplement" className="w-[80%] h-[80%] object-cover grayscale mix-blend-lighten" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
