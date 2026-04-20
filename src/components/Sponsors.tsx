import { motion } from 'motion/react';

const sponsors = [
  { name: 'Pharma', logo: 'https://cdn.worldvectorlogo.com/logos/pharma.svg' },
  { name: 'HealthOne', logo: 'https://cdn.worldvectorlogo.com/logos/health-care.svg' },
  { name: 'MedGlobal', logo: 'https://cdn.worldvectorlogo.com/logos/global-health.svg' },
  { name: 'BioTech', logo: 'https://cdn.worldvectorlogo.com/logos/biotech.svg' },
  { name: 'CareFirst', logo: 'https://cdn.worldvectorlogo.com/logos/first-care.svg' },
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto object-contain" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback for placeholder logos
                  e.currentTarget.src = `https://placehold.co/200x80/white/slate?text=${sponsor.name}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
