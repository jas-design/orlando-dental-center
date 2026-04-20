import { motion } from 'motion/react';
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import CompactAppointmentForm from './CompactAppointmentForm';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/dental-care-orlando/1920/1080?brightness=0.7"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl px-4 md:px-0"
        >
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
            Best Hospital & Clinic in Orlando
          </span>
          <h1 className="text-4xl lg:text-7xl font-display font-black text-slate-800 leading-tight mb-6">
            True Healthcare <br />
            For Your <span className="text-primary italic">Family</span>
          </h1>
          <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices.
          </p>
          
          {/* Medisch Hero Icon Boxes */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: '📋', label: 'Examination' },
              { icon: '💊', label: 'Prescription' },
              { icon: '💓', label: 'Cardiogram' },
              { icon: '💉', label: 'Blood Pressure' },
            ].map((box, i) => (
              <motion.div 
                key={box.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex flex-col items-center justify-center w-28 h-28 group hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">{box.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-center">{box.label}</span>
              </motion.div>
            ))}
          </div>

          <button className="bg-primary text-white px-10 py-5 font-black text-sm rounded shadow-2xl hover:bg-slate-900 transition-all flex items-center gap-3 uppercase tracking-widest group">
            <span>Read More</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Slider Controls (Medicina style) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-px">
        <button className="bg-primary hover:bg-secondary text-white p-6 transition-colors">
          <ChevronRight size={32} />
        </button>
        <button className="bg-primary hover:bg-secondary text-white p-6 transition-colors">
          <ChevronLeft size={32} />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full border-2 border-primary ${i === 0 ? 'bg-primary' : 'bg-transparent'}`} />
        ))}
      </div>

      {/* Prominent Appointment Form at Bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-50 translate-y-1/2">
        <div className="container-custom">
          <CompactAppointmentForm />
        </div>
      </div>
    </section>
  );
}
