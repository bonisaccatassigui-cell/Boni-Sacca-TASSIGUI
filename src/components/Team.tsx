import { motion } from 'motion/react';
import { Award, Wrench, TrendingUp } from 'lucide-react';

export default function Team() {
  const team = [
    {
      role: 'CEO & Fondateur',
      name: 'TASSIGUI Boni Sacca',
      icon: Award,
      desc: 'Licence en Énergies Renouvelables et Systèmes Énergétiques. Titulaire d\'un DTI en électrotechnique et d\'un BAC F3. Expert en conception de systèmes solaires.',
      image: 'input_file_1.png',
    },
    {
      role: 'Technicien Supérieur',
      name: 'Habid OROU GOURA',
      icon: Wrench,
      desc: 'Titulaire d\'un CAP avec des compétences avérées en énergies renouvelables et solutions à base du solaire photovoltaïque.',
      image: 'input_file_2.png',
    },
    {
      role: 'Agent Commercial',
      name: 'Poste à pourvoir',
      icon: TrendingUp,
      desc: 'Titulaire d\'un CEP, originaire d\'une communauté rurale avec une expertise unique en vente et sensibilisation aux solutions solaires.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600', // Recursive recruitment vibe or I can use a custom div
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-widest uppercase mb-4">Notre Équipe</h2>
          <p className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Des Experts <span className="text-brand-yellow underline">Dédiés</span> à votre réussite
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une combinaison unique de compétences techniques et de passion pour le développement durable en Afrique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[40px] p-8 border border-gray-100 hover:bg-brand-green/5 hover:border-brand-green transition-all"
            >
              <div className="relative mb-8 flex justify-center">
                {member.role === 'Agent Commercial' ? (
                  <div className="w-32 h-32 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 font-black text-7xl shadow-inner group-hover:scale-105 transition-transform">
                    ?
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-lg text-brand-green">
                  <member.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-brand-orange text-xs font-black uppercase tracking-widest mb-1">
                  {member.role}
                </p>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{member.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
