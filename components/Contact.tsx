import React, { FormEvent } from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Odpowiemy wkrótce.');
  };

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div
        className="absolute inset-0 -z-[5] opacity-[0.2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/fizjociocia_bg.webp')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Details */}
          <div>
            <h2 className="text-6xl font-display font-bold mb-8 leading-none">Czekam <br /> na Was.</h2>
            <p className="text-xl text-slate-500 font-light mb-10 leading-relaxed">
              Każde pytanie jest ważne. Każda wątpliwość zasługuje na rozwianie. Stwórzmy razem bezpieczną przystań dla Twojego dziecka.
            </p>

            <div className="space-y-8">
              <a href="tel:+48799055218" className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <span className="text-lg font-medium">799 055 218</span>
              </a>
              <a href="mailto:kochanowska.marcelina17@gmail.com" className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-lg font-medium">kochanowska.marcelina17@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 scribble-border shadow-2xl relative">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-pastel-mint scribble-border -z-10 floating-slow"></div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Imię Rodzica &amp; Dziecka</label>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-slate-100 bg-transparent py-4 focus:ring-0 focus:border-primary transition-all text-xl"
                  placeholder="Jak do Was się zwracać?"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Telefon</label>
                <input
                  type="tel"
                  className="w-full border-0 border-b-2 border-slate-100 bg-transparent py-4 focus:ring-0 focus:border-primary transition-all text-xl"
                  placeholder="Gdzie możemy porozmawiać?"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Wiadomość</label>
                <textarea
                  rows={4}
                  className="w-full border-0 border-b-2 border-slate-100 bg-transparent py-4 focus:ring-0 focus:border-primary transition-all text-xl"
                  placeholder="Opowiedz mi Waszą historię..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 text-lg font-bold bg-slate-900 text-white hover:bg-primary transition-all scribble-border">
                Wyślij w świat
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
