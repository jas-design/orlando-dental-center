import { motion } from 'motion/react';
import { Calendar, Phone, Mail, User, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send to API
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center py-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar size={40} />
            </div>
            <h2 className="text-4xl font-bold">Request Received!</h2>
            <p className="text-xl opacity-90 max-w-lg mx-auto">
              Our patient coordinator will contact you shortly to confirm your appointment. Have a great day!
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-white underline font-bold mt-4"
            >
              Send another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-slate-900 rounded-[48px] overflow-hidden shadow-2xl relative">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-10 h-full">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="border-r border-white/20" />
              ))}
            </div>
          </div>

          <div className="relative p-10 lg:p-20 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col gap-6 text-white text-center lg:text-left">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Online Booking</span>
              <h2 className="text-4xl lg:text-5xl font-display leading-[1.1]">
                Ready to Book Your <span className="text-primary italic">Visit?</span>
              </h2>
              <p className="text-slate-400">
                Skip the wait and request your appointment online. Our team will verify your insurance and get back to you within 2 business hours.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Call for Urgent Care</p>
                    <p className="font-bold">407-851-7740</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="tel" 
                        placeholder="(407) 000-0000"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="date" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Type</label>
                  <select className="w-full px-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none">
                    <option>General Checkup</option>
                    <option>Cosmetic Consultation</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Emergency Service</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  <span>Schedule Now</span>
                </button>
                <p className="text-center text-xs text-slate-400">By clicking Schedule Now, you agree to our privacy policy.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
