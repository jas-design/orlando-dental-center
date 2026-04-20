import { motion } from 'motion/react';
import { Heart, Activity, Thermometer, FlaskConical, Stethoscope, Microscope } from 'lucide-react';

const specialties = [
  { icon: Heart, label: 'CARDIOLOGY' },
  { icon: Activity, label: 'DIAGNOSTIC' },
  { icon: Thermometer, label: 'GENERAL' },
  { icon: FlaskConical, label: 'LABORATORY' },
  { icon: Stethoscope, label: 'DENTAL' },
  { icon: Microscope, label: 'RESEARCH' },
];

export default function Specialties() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center p-3 group-hover:border-primary transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <spec.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                {i < specialties.length - 1 && (
                  <div className="absolute top-1/2 -right-12 w-8 border-t-2 border-dashed border-primary/20 hidden lg:block" />
                )}
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
                {spec.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
