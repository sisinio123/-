import { MessageCircle } from 'lucide-react';

export function WhatsAppCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="#" 
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-brand-dark/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded border border-white/10 hidden md:block">
          Order via WhatsApp
        </span>
      </a>
    </div>
  );
}
