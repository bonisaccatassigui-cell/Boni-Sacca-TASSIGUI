import { motion } from 'motion/react';
import { ShieldCheck, Heart, Zap, Globe } from 'lucide-react';

export default function About() {
  const values = [
    { icon: ShieldCheck, title: 'Confiance', text: 'Engagement envers la qualité et la durabilité.' },
    { icon: Globe, title: 'Impact Local', text: 'Améliorer les conditions de vie en Afrique.' },
    { icon: Zap, title: 'Innovation', text: 'Technologies adaptées aux besoins réels.' },
    { icon: Heart, title: 'Proximité', text: 'Support et accompagnement de nos clients.' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="input_file_4.png"
                alt="Agriculteur utilisant le solaire"
                className="rounded-[40px] shadow-2xl relative z-10 w-full brightness-110 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl z-0"></div>
            </motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full z-0 hidden lg:block"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-green font-bold tracking-widest uppercase mb-4 italic">Notre Mission</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Améliorer les conditions de vie grâce à l'énergie <span className="text-brand-yellow">Solaire</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chez <strong>Power Solar</strong>, nous croyons que l'accès à une énergie propre et durable est le moteur du développement. Notre mission est d'apporter des solutions technologiques innovantes directement dans les mains de ceux qui en ont le plus besoin : agriculteurs, entrepreneurs ruraux et familles africaines.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                        <v.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{v.title}</h4>
                      <p className="text-sm text-gray-500">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
