export function Transformation() {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-brand-red rounded-full opacity-5 blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-6xl md:text-8xl leading-[0.8] text-white uppercase tracking-tighter">
              ESCAPE THE <br/><span className="text-brand-red">AVERAGE.</span>
            </h2>
            <p className="font-sans text-xl text-gray-300 leading-relaxed max-w-lg">
              It’s not just about muscles. It’s about walking into a room and being respected. It's about looking in the mirror and knowing you didn't quit. 
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-5xl font-display text-white mb-2">30</div>
                <div className="text-sm font-sans font-bold text-gray-500 uppercase tracking-widest">Days to feel it</div>
              </div>
              <div>
                <div className="text-5xl font-display text-white mb-2">90</div>
                <div className="text-sm font-sans font-bold text-gray-500 uppercase tracking-widest">Days to see it</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 font-display text-white uppercase tracking-widest text-sm z-10">Before</div>
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Skinny before"
                  className="w-full aspect-[3/4] object-cover grayscale opacity-70 border border-white/5"
                />
              </div>
              <div className="flex-1 relative -mt-12">
                <div className="absolute top-4 right-4 bg-brand-red px-3 py-1 font-display text-white uppercase tracking-widest text-sm z-10">After</div>
                <img 
                  src="https://images.unsplash.com/photo-1583465555673-896894c25be8?q=80&w=1000&auto=format&fit=crop" 
                  alt="Muscular after"
                  className="w-full aspect-[3/4] object-cover border-2 border-brand-red shadow-[0_0_50px_rgba(230,0,0,0.3)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
