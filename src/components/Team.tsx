import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'Dr. John Orlando',
    role: 'Lead Dentist / Founder',
    specialty: 'Cosmetic & Family Dentistry',
    image: 'https://picsum.photos/seed/doc1/500/600'
  },
  {
    name: 'Dr. Sarah Miller',
    role: 'Orthodontist',
    specialty: 'Invisalign Certified Provider',
    image: 'https://picsum.photos/seed/doc2/500/600'
  },
  {
    name: 'Dr. Robert Garcia',
    role: 'Implant Specialist',
    specialty: 'Surgical & Restorative Care',
    image: 'https://picsum.photos/seed/doc3/500/600'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Meet the Experts</span>
            <h2 className="text-4xl lg:text-5xl">Your Smile is in Expert Hands</h2>
            <p className="text-slate-600">
              Our team consists of highly trained specialists dedicated to providing the highest standard of dental care in a friendly environment.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="/about" 
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 group"
            >
              See All Specialists
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-all">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wide mb-2">{member.role}</p>
              <p className="text-slate-500 text-sm">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
