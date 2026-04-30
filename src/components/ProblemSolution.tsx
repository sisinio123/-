export function ProblemSolution() {
  return (
    <section className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Problem Area */}
          <div className="relative">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white leading-[0.9] mb-8">
              TIRED OF <span className="text-gray-600">BEING SMALL?</span>
            </h2>
            <ul className="space-y-6">
              {[
                "You train hard but the scale doesn't move.",
                "Scammed by fake sub-dosed supplements in the market.",
                "Lack of respect. Lack of confidence.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="font-display text-3xl text-brand-red opacity-50 mt-1">0{i+1}</div>
                  <p className="font-sans text-lg text-gray-400 border-l border-gray-800 pl-4 py-1">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Area */}
          <div className="bg-brand-dark border border-white/5 p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-brand-red blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="inline-block bg-brand-red text-white px-3 py-1 font-sans font-bold text-xs tracking-widest uppercase mb-6">
              The Solution
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-[0.9] mb-6">
              PROTEIN OU <span className="text-brand-red">LHOUGRA.</span>
            </h2>
            
            <p className="text-white/80 font-sans text-lg leading-relaxed mb-8">
              We bring raw, unadulterated power directly to your muscles. No fake labels. No diluted formulas. 
              Only the strongest ingredients engineered for one thing: <strong className="text-white">turning you into an alpha.</strong>
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 mt-4">
              <div>
                <div className="font-display text-2xl text-white uppercase mb-1">Authentic</div>
                <div className="text-gray-500 font-sans text-sm">Lab verified purity</div>
              </div>
              <div>
                <div className="font-display text-2xl text-white uppercase mb-1">Results</div>
                <div className="text-gray-500 font-sans text-sm">Engineered for growth</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
