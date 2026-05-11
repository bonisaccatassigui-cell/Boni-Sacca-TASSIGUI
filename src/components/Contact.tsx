import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-widest uppercase mb-4">Contactez-nous</h2>
          <p className="text-4xl md:text-5xl font-black text-gray-900">
            Prêt à passer au <span className="text-brand-orange text-gradient">Solaire ?</span>
          </p>
        </div>

        <div className="bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-brand-green p-10 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-8 italic">Restons en contact</h3>
              <p className="text-brand-green-dark bg-white/90 p-4 rounded-xl text-sm font-medium mb-12">
                Nos experts vous répondent sous 24h pour toute demande de devis ou d'information technique.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'Téléphone', text: '+229 01 64 74 33 23' },
                  { icon: Mail, label: 'Email', text: 'powersolar022@gmail.com' },
                  { icon: MapPin, label: 'Adresse', text: 'Zongo, Gninsy - Pèrèrè, Borgou, BÉNIN' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-white/70 tracking-widest">{item.label}</p>
                      <p className="font-semibold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <a
                href="https://wa.me/2290164743323"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-brand-green px-6 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-6 h-6" />
                CHAT WHATSAPP
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-10 lg:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Nom Complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Email</label>
                <input
                  type="email"
                  placeholder="jean@example.com"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Type de projet</label>
                <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                  <option>Installation Maison</option>
                  <option>Installation Entreprise</option>
                  <option>Séchoir Solaire Agricole</option>
                  <option>Electrification Rurale</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Dites-nous en plus sur votre besoin..."
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20 transition-all active:scale-95"
                >
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
