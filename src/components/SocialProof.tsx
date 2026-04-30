import { Users, ShieldCheck, Flame } from 'lucide-react';

export function SocialProof() {
  const stats = [
    { id: 1, icon: Users, value: '15,000+', label: 'Athletes Served in DZ' },
    { id: 2, icon: ShieldCheck, value: '100%', label: 'Authentic Labs Tested' },
    { id: 3, icon: Flame, value: '4.9/5', label: 'Average Brotherhood Rating' },
  ];

  return (
    <section className="border-y border-white/10 bg-brand-dark py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-brand-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-brand-black to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-4 group">
              <div className="bg-brand-red/10 p-3 rounded-none border border-brand-red/30 group-hover:bg-brand-red/20 transition-colors">
                <stat.icon size={28} className="text-brand-red" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white tracking-widest leading-none">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-gray-400 font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
