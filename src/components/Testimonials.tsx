import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Karim B.',
    location: 'Algiers',
    text: 'Was stuck at 65kg for 2 years. Took their Mass Gainer, ate like a monster, now I\'m 74kg. Khawti this is the real deal.',
  },
  {
    id: 2,
    name: 'Yacine R.',
    location: 'Oran',
    text: 'Pre-workout makes me want to tear the gym apart. No crash, just raw energy. Finally a brand that respects us.',
  },
  {
    id: 3,
    name: 'Ayoub T.',
    location: 'Constantine',
    text: 'Delivery was fast. Product mixes perfectly. You can tell it\'s not that fake powdered milk they sell everywhere else.',
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-brand-black cursor-default">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-5xl md:text-7xl uppercase text-white leading-[0.9] text-center mb-20">
          THE <span className="text-transparent" style={{ WebkitTextStroke: '2px #EAEAEA' }}>BROTHERHOOD</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-brand-dark/50 border border-white/5 p-8 relative group hover:border-brand-red/50 transition-colors">
              <Quote className="text-brand-red/20 absolute right-6 top-6 w-16 h-16" />
              <p className="font-sans text-gray-300 italic mb-8 relative z-10 text-lg">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display text-xl text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-sans font-bold text-white uppercase text-sm">{review.name}</div>
                  <div className="font-sans text-gray-500 text-xs uppercase">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
