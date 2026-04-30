import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Is it safe?', a: 'Yes. All our products are formulated in certified labs with completely transparent ingredients. No hidden chemicals.' },
  { q: 'Is it original?', a: '100% original. We have strict quality control and import direct from trusted manufacturers. Say goodbye to black-market fakes.' },
  { q: 'What is the delivery time?', a: 'Normally 24-48 hours across major cities in Algeria. Up to 72 hours for southern regions.' },
  { q: 'Will I see results?', a: 'If you train hard, eat right, and use our products consistently—yes. Supplements are fuel, you still have to drive the car.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="contact" className="py-32 bg-brand-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-5xl uppercase text-white mb-12 text-center">
          NO <span className="text-brand-red">BULLSHIT</span> FAQ
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 bg-brand-dark/30">
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-xl text-white uppercase tracking-wide">{faq.q}</span>
                {open === i ? <Minus className="text-brand-red" /> : <Plus className="text-white50 text-white" />}
              </button>
              {open === i && (
                <div className="p-6 pt-0 font-sans text-gray-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
