import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import InfoBlocks from '../components/InfoBlocks';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import LatestNews from '../components/LatestNews';
import DepartmentsBanner from '../components/DepartmentsBanner';
import Sponsors from '../components/Sponsors';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <InfoBlocks />

      <Specialties />
      
      <LatestNews />
      
      <DepartmentsBanner />

      <Team />

      {/* Trust Banner */}
      <div className="bg-secondary overflow-hidden py-16 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Phone size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight mb-1 uppercase tracking-tighter">Need Emergency Dental Care?</h3>
                <p className="text-white/70 text-lg">Our emergency specialists are available 24/7 for urgent cases.</p>
              </div>
            </div>
            <a
              href="tel:407-851-7740"
              className="bg-white text-secondary px-10 py-5 rounded font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3 group"
            >
              <span>Call 407-851-7740</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <Testimonials />
      
      <FAQ />

      <Sponsors />

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Ready for a healthier, <br />
              <span className="text-primary italic">special smile?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
              Join thousands of happy patients in Orlando. Book your consultation today and take the first step towards perfect dental health.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <button className="bg-primary text-white px-12 py-6 rounded font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group">
                Schedule Your Visit Now
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <span className="text-[40vw] font-black text-white whitespace-nowrap">ORLANDO</span>
        </div>
      </section>
    </div>
  );
}
