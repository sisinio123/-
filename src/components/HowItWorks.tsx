export function HowItWorks() {
  const steps = [
    { num: '01', title: 'CHOOSE WEAPON', desc: 'Select the supplement for your specific goal.' },
    { num: '02', title: 'ORDER EASILY', desc: 'Secure checkout, Whatsapp fast-order available.' },
    { num: '03', title: 'TRANSFORM', desc: 'Put in the work. Become undeniable.' }
  ];

  return (
    <section className="py-24 bg-brand-red text-brand-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-5xl md:text-6xl uppercase text-center mb-16">
          HOW IT WORKS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-brand-black/20"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative text-center flex flex-col items-center">
              <div className="bg-brand-black text-white w-16 h-16 flex items-center justify-center rounded-full font-display text-2xl mb-6 relative z-10">
                {step.num}
              </div>
              <h3 className="font-display text-2xl uppercase mb-2">{step.title}</h3>
              <p className="font-sans font-medium opacity-80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
