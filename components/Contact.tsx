import React, { FormEvent } from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Odpowiemy wkrótce.');
  };

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Balloons decoration - peek above the card */}
        <img
          src="/assets/baloons.webp"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -top-20 w-80 lg:w-96 opacity-60 floating-slow pointer-events-none select-none z-0"
        />

        {/* Envelope/Postcard Container */}
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden relative transform rotate-1 border border-slate-200 z-10">
            {/* Stamp / Decorative Top Bar */}
            <div className="h-2 bg-gradient-to-r from-red-300 via-blue-300 to-red-300 opacity-50 bg-[length:40px_100%]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* Left Side: "Stamp" & Info */}
                <div className="md:col-span-2 bg-soft-beige p-10 border-r border-slate-100 border-dashed relative">
                    <div className="absolute top-6 right-6 w-24 h-24 border-4 border-slate-200 opacity-50 rounded-full flex items-center justify-center rotate-12 pointer-events-none">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center">Fizjo<br/>Ciocia<br/>Priority</span>
                    </div>

                    <h3 className="font-handwritten text-4xl text-slate-800 mb-2">Cześć!</h3>
                    <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Napisz do mnie</p>

                    <div className="space-y-6 text-slate-600">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">call</span>
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-bold">Telefon</p>
                                <a href="tel:+48799055218" className="hover:text-primary transition-colors font-medium">799 055 218</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">mail</span>
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-bold">Email</p>
                                <a href="mailto:kochanowska.marcelina17@gmail.com" className="hover:text-primary transition-colors font-medium break-all">kochanowska.marcelina17@gmail.com</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">pin_drop</span>
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-bold">Gabinet</p>
                                <p className="font-medium">Poznań &amp; Okolice</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 opacity-80">
                         <img src="/assets/fizjociocia_hero_3.webp" alt="Marcelina" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md sepia-[0.3]" />
                    </div>
                </div>

                {/* Right Side: Letter Form */}
                <div className="md:col-span-3 p-10 bg-white relative">
                    <h2 className="text-3xl font-display font-bold text-slate-800 mb-1">Porozmawiajmy.</h2>
                    <p className="text-slate-500 mb-8 italic">Opowiedz mi, co Cię martwi, a znajdziemy rozwiązanie.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                             <input
                                type="text"
                                className="w-full border-0 border-b border-slate-300 bg-transparent py-2 focus:ring-0 focus:border-primary transition-all placeholder:text-slate-300 placeholder:italic placeholder:font-handwritten placeholder:text-lg"
                                placeholder="Imię Rodzica i Dziecka"
                                required
                              />
                        </div>
                        <div className="relative group">
                             <input
                                type="tel"
                                className="w-full border-0 border-b border-slate-300 bg-transparent py-2 focus:ring-0 focus:border-primary transition-all placeholder:text-slate-300 placeholder:italic placeholder:font-handwritten placeholder:text-lg"
                                placeholder="Twój numer telefonu"
                                required
                              />
                        </div>
                        <div className="relative group">
                             <textarea
                                rows={3}
                                className="w-full border-0 border-b border-slate-300 bg-transparent py-2 focus:ring-0 focus:border-primary transition-all placeholder:text-slate-300 placeholder:italic placeholder:font-handwritten placeholder:text-lg resize-none leading-loose"
                                style={{backgroundImage: 'linear-gradient(transparent 96%, #e2e8f0 97%)', backgroundSize: '100% 2rem', lineHeight: '2rem'}}
                                placeholder="W czym mogę pomóc?..."
                                required
                              ></textarea>
                        </div>

                        <div className="pt-4 text-right">
                             <button type="submit" className="px-8 py-3 bg-slate-800 text-white font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors shadow-lg hover:shadow-xl rounded-sm">
                                Wyślij list
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
