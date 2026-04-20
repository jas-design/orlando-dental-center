import { motion } from 'motion/react';
import { Phone, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const blocks = [
  {
    title: 'Emergency Cases',
    desc: 'Get fast and reliable emergency dental care when you need it most.',
    color: 'bg-secondary', // Orlando Blue
    icon: Phone,
    info: '407-851-7740'
  },
  {
    title: "Doctors Timetable",
    desc: 'Check our specialists schedules and book your preferred time slot.',
    color: 'bg-primary', // Orlando Green
    icon: Calendar,
    link: 'Book Now'
  },
  {
    title: 'Opening Hours',
    desc: 'Visit us during our office hours throughout the week.',
    color: 'bg-slate-900', // Deep Dark
    icon: Clock,
    hours: [
      { day: 'Mon - Fri', time: '9:00 - 18:00' },
      { day: 'Sat - Sun', time: 'Closed' }
    ]
  },
  {
    title: 'Our Location',
    desc: '8318 S Orange Blossom Trl, Orlando, FL 32809, United States',
    color: 'bg-primary/90', // Muted Green
    icon: MapPin,
    btn: 'VIEW MAP'
  }
];

export default function InfoBlocks() {
  return (
    <section className="relative z-30 pt-48 pb-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-2xl relative z-20">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${block.color} p-8 text-white min-h-[320px] flex flex-col justify-between group transition-all duration-500 hover:brightness-110`}
            >
              <div>
                <block.icon size={48} className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-black mb-3 tracking-tighter uppercase">{block.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {block.desc}
                </p>
                
                {block.info && (
                  <div className="text-2xl font-black">{block.info}</div>
                )}
                
                {block.hours && (
                  <div className="space-y-1">
                    {block.hours.map(h => (
                      <div key={h.day} className="flex justify-between text-xs font-bold border-b border-white/10 pb-1">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 px-5 py-2.5 rounded group-hover:bg-white group-hover:text-slate-900 transition-all">
                  {block.link || block.btn || 'LEARN MORE'} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
