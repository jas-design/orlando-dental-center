import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl mb-6"
          >
            Get in <span className="text-secondary italic">Touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-xl mx-auto text-lg"
          >
            Whether you have a dental emergency or just need a routine check-up, our friendly team is ready to assist you.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col gap-6">
                <h3 className="text-2xl font-bold mb-2">Office Information</h3>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Our Location</span>
                    <span className="font-bold text-slate-900 leading-tight">4310 W Grant St,<br />Orlando, FL 32808</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Phone Number</span>
                    <a href="tel:407-851-7740" className="font-bold text-slate-900 hover:text-primary transition-colors text-xl font-display">407-851-7740</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Email Support</span>
                    <a href="mailto:info@orlandodentalcenter.com" className="font-bold text-slate-900 hover:text-primary transition-colors">info@orlandodentalcenter.com</a>
                  </div>
                </div>

                <hr className="border-slate-50" />

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Operating Hours</span>
                    <div className="flex flex-col gap-1 text-sm font-bold text-slate-900">
                      <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                      <span className="text-slate-400 italic">Sat - Sun: Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-slate-900 text-white p-8 rounded-[40px] relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    Emergency Care
                  </h4>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    Experiencing severe pain? We offer expedited same-day appointments for urgent cases.
                  </p>
                  <a 
                    href="tel:407-851-7740" 
                    className="w-full py-4 bg-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <Phone size={18} />
                    Call Emergency Line
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 lg:p-14 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                <form className="flex flex-col gap-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input type="email" placeholder="email@address.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input type="tel" placeholder="(407) 000-0000" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Reason for Visit</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer">
                        <option>New Patient Consultation</option>
                        <option>Routine Cleaning</option>
                        <option>Cosmetic Treatment</option>
                        <option>Emergency Care</option>
                        <option>Clear Aligner Inquiry</option>
                        <option>Other / Questions</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">How can we help you?</label>
                    <textarea 
                      rows={5} 
                      placeholder="Tell us about your dental needs or questions..."
                      className="w-full px-6 py-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full lg:w-fit bg-slate-900 text-white px-12 py-5 rounded-full font-bold shadow-lg flex items-center justify-center gap-3 hover:bg-primary transition-all self-end">
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Mockup */}
      <section className="h-96 md:h-[500px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
         <img 
           src="https://picsum.photos/seed/orlandomap/1920/1080?grayscale" 
           alt="Office Location Map" 
           className="w-full h-full object-cover"
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-secondary/5" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border-2 border-primary">
            <div className="w-4 h-4 rounded-full bg-primary animate-ping" />
            <span className="font-bold text-slate-900">4310 W Grant St, Orlando</span>
         </div>
      </section>
    </div>
  );
}
