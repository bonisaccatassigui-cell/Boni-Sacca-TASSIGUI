import { motion } from 'motion/react';
import { ArrowRight, Zap, Leaf, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="input_file_7.png"
          alt="Power Solar Technician"
          className="w-full h-full object-cover brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm border border-brand-green/30">
              Au cœur de la transition énergétique
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Éclairez l'Afrique avec <span className="text-brand-yellow italic">Power Solar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Des solutions énergétiques durables et des technologies agricoles innovantes pour transformer les conditions de vie et booster la productivité en Afrique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg transition-all group"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg transition-all"
              >
                Nos solutions
              </a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-brand-yellow">100%</p>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Durable</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-brand-yellow">+500</p>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Projets</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-brand-yellow">24/7</p>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
