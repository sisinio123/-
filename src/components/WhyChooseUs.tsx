import { Shield, Truck, Zap, Droplets } from 'lucide-react';

const usps = [
  {
    icon: Shield,
    title: 'AUTHENTIC PRODUCTS',
    desc: 'No black market fakes. 100% verified.'
  },
  {
    icon: Zap,
    title: 'CLINICAL DOSES',
    desc: 'The exact amount your muscles need to grow, no under-dosed BS.'
  },
  {
    icon: Droplets,
    title: 'NO PROPRIETARY BLENDS',
    desc: 'Full transparency on every label. You know what you swallow.'
  },
  {
    icon: Truck,
    title: 'FAST DELIVERY IN ALGERIA',
    desc: 'You order today, you start growing this week.'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white leading-[0.9]">
              WHY <br/><span className="text-brand-red">US?</span>
            </h2>
            <p className="mt-6 font-sans text-gray-400">
              The supplement industry in Algeria is full of scams. We built this brotherhood to bring real, lab-tested supplements to those who actually want to put in the work.
            </p>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {usps.map((usp, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="text-brand-red mt-1">
                  <usp.icon size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-2">{usp.title}</h3>
                  <p className="font-sans text-sm text-gray-400">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
