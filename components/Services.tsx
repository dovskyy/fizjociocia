import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="doswiadczenie" className="py-40 bg-white/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-7xl font-display font-bold max-w-xl leading-none">
            Narzędzia <br /> <span className="text-outline">Wsparcia.</span>
          </h2>
          <p className="max-w-md text-slate-500 text-lg border-l-2 border-primary pl-8 py-2 italic">
            Nieustanna nauka to mój sposób na zapewnienie Twojemu dziecku bezpieczeństwa, na jakie zasługuje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100">
          
          {/* Service 1 */}
          <div className="group p-16 border-r border-slate-100 hover:bg-primary/5 transition-colors">
            <span className="font-handwritten text-4xl text-primary mb-8 block">01.</span>
            <h3 className="text-3xl font-display font-bold mb-6">NDT Bobath Baby</h3>
            <p className="text-slate-500 leading-relaxed font-light mb-8">
              Fundament mojej pracy. Delikatna normalizacja napięcia, by każdy ruch był swobodny i naturalny jak oddech.
            </p>
            <span className="material-symbols-outlined text-5xl text-primary/30 group-hover:text-primary transition-colors">neurology</span>
          </div>

          {/* Service 2 */}
          <div className="group p-16 border-r border-slate-100 hover:bg-pastel-mint/10 transition-colors">
            <span className="font-handwritten text-4xl text-emerald-400 mb-8 block">02.</span>
            <h3 className="text-3xl font-display font-bold mb-6">Integracja Sensoryczna</h3>
            <p className="text-slate-500 leading-relaxed font-light mb-8">
              Porządkowanie świata zmysłów. Pomagam dzieciom zrozumieć bodźce, które je otaczają, by mogły czuć się pewnie.
            </p>
            <span className="material-symbols-outlined text-5xl text-emerald-400/30 group-hover:text-emerald-400 transition-colors">psychology</span>
          </div>

          {/* Service 3 */}
          <div className="group p-16 hover:bg-pastel-yellow/20 transition-colors">
            <span className="font-handwritten text-4xl text-yellow-500 mb-8 block">03.</span>
            <h3 className="text-3xl font-display font-bold mb-6">Instruktaż pielęgnacyjny</h3>
            <p className="text-slate-500 leading-relaxed font-light mb-8">
              Wspólne budowanie codzienności. Pokazuję, jak przez podnoszenie i noszenie budować więź i wspierać rozwój.
            </p>
            <span className="material-symbols-outlined text-5xl text-yellow-500/30 group-hover:text-yellow-500 transition-colors">family_restroom</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;