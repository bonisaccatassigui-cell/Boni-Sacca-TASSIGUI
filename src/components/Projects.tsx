import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Électrification de Communauté',
      category: 'Communauté',
      image: 'input_file_8.png',
      desc: 'Alimentation de foyers et espaces publics en zone rurale.'
    },
    {
      title: 'Séchoir Solaire de Mangues',
      category: 'Agrobusiness',
      image: 'input_file_3.png',
      desc: 'Réduction massive des pertes post-récolte pour les coopératives.'
    },
    {
      title: 'Maintenance & Service Premium',
      category: 'Service',
      image: 'input_file_9.png',
      desc: 'Nettoyage et suivi technique pour une performance optimale.'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-4">Nos Réalisations</h2>
            <p className="text-4xl md:text-5xl font-black">
              Projets qui <span className="text-brand-green">Changeant</span> le quotidien
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-bold transition-all">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110 brightness-110 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-green font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Détails du projet <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
