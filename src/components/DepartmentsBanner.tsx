import { motion } from 'motion/react';
import { ChevronRight, Heart, Stethoscope } from 'lucide-react';

export default function DepartmentsBanner() {
  return (
    <section className="bg-slate-50 relative">
      {/* Top Banner Part */}
      <div className="bg-primary py-20 text-white overflow-hidden relative">
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
              Healthy Weekend Checkup
            </h2>
            <p className="text-white/80 font-medium text-lg">
              Visit our specialty clinic this weekend for a subsidized executive checkup.
            </p>
          </div>
          <button className="bg-white text-primary px-12 py-5 rounded font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 group whitespace-nowrap">
            BOOK IT NOW <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Decorative background numbers or shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[300px] font-black text-white/5 pointer-events-none select-none -ml-20">
          HEALTH
        </div>
      </div>

      {/* Departments Part */}
      <div className="container-custom -mt-16 relative z-20 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group"
          >
            <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden cursor-pointer h-full border border-slate-100 group-hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 aspect-square overflow-hidden rounded">
                  <img 
                    src="https://picsum.photos/seed/dental-doctor/400/400" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="Cardiology"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-2/3 py-6 pr-6">
                  <div className="flex items-center gap-3 text-secondary mb-3">
                    <Heart size={20} fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-widest">CARDIOLOGY</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight group-hover:text-primary transition-colors">Our special doctors for cardiology</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    We offer comprehensive heart care using state-of-the-art diagnostic equipment.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1672B8] hover:gap-4 transition-all group-hover:text-primary">
                    READ MORE <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="bg-[#1672B8] p-2 rounded-lg shadow-xl overflow-hidden cursor-pointer h-full group-hover:bg-primary transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 aspect-square overflow-hidden rounded">
                  <img 
                    src="https://picsum.photos/seed/orthodontics/400/400" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90" 
                    alt="Dental"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-2/3 py-6 pr-6 text-white">
                  <div className="flex items-center gap-3 opacity-60 mb-3">
                    <Stethoscope size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">DENTAL CARE</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight">Expert doctors for special dental care</h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    Professional treatments from cleaning to complex aesthetic restorations.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded hover:bg-white hover:text-slate-900 transition-all">
                    VIEW DETAILS <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
