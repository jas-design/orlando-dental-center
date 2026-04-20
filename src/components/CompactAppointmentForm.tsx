import { FormEvent } from 'react';
import { Calendar, User, Phone, Mail, ChevronRight, ClipboardList } from 'lucide-react';

export default function CompactAppointmentForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Appointment request sent!');
  };

  return (
    <div className="bg-primary/95 text-white p-6 md:p-8 rounded-t-3xl md:rounded-3xl shadow-2xl relative z-20">
      <div className="absolute -top-10 right-10 bg-white text-primary p-3 rounded-t-xl hidden md:block border-t border-x border-primary/20">
        <ClipboardList size={24} />
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
        <div className="md:col-span-1 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-80">Patient Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={14} />
            <input 
              required
              type="text" 
              className="w-full bg-white/10 border border-white/20 rounded px-10 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all"
            />
          </div>
        </div>

        <div className="md:col-span-1 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-80">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={14} />
            <input 
              required
              type="tel" 
              className="w-full bg-white/10 border border-white/20 rounded px-10 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all"
            />
          </div>
        </div>

        <div className="md:col-span-1 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-80">E-mail</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={14} />
            <input 
              required
              type="email" 
              className="w-full bg-white/10 border border-white/20 rounded px-10 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all"
            />
          </div>
        </div>

        <div className="md:col-span-1 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-80">Select Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={14} />
            <input 
              required
              type="date" 
              className="w-full bg-white/10 border border-white/20 rounded px-10 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all appearance-none"
            />
          </div>
        </div>

        <div className="md:col-span-1 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-80">Department</label>
          <select className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all appearance-none cursor-pointer">
            <option>Orthodontics</option>
            <option>Cosmetic Dental</option>
            <option>General Care</option>
          </select>
        </div>

        <div className="md:col-span-1">
          <button 
            type="submit"
            className="w-full bg-white text-primary py-3 rounded font-bold text-xs shadow-lg hover:bg-slate-50 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
          >
            MAKE IT <ChevronRight size={14} />
          </button>
        </div>
      </form>
    </div>
  );
}
