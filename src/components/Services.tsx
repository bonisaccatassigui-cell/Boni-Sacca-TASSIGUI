import { motion } from 'motion/react';
import { PanelTop, Wind, Zap, Box, Tractor, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Systèmes Solaires Photovoltaïques',
      description: 'Installation complète de systèmes solaires pour maisons, bureaux et industries. Réduisez vos factures et gagnez en autonomie.',
      icon: PanelTop,
      color: 'bg-blue-500',
    },
    {
      title: 'Séchoirs solaires multifonctions',
      description: 'Conception innovante pour sécher maïs, fruits et légumes. Préservez vos récoltes et augmentez leur valeur marchande.',
      icon: Box,
      color: 'bg-brand-orange',
    },
    {
      title: 'Électrification de Zones Rurales',
      description: 'Des solutions sur mesure pour les zones non électrifiées. Éclairage domestique, recharge et pompage solaire.',
      icon: Users,
      color: 'bg-brand-green',
    },
    {
      title: 'Agriculture Durable',
      description: 'Technologies solaires appliquées à la transformation agroalimentaire pour une production locale plus efficace.',
      icon: Tractor,
      color: 'bg-emerald-600',
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-green font-bold tracking-widest uppercase mb-4">Nos Services</h2>
          <p className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Des Solutions Innovantes pour <br /> un <span className="text-brand-orange underline">Impact Réel</span>
          </p>
          <div className="w-24 h-2 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200 border border-gray-100 hover:border-brand-green transition-all group"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-brand-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
