import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Photo */}
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
            <img
              src="https://picsum.photos/seed/clinic/800/1000"
              alt="Our Dental Office"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Stats Badges */}
          <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden sm:block border border-slate-50">
            <div className="flex flex-col items-center">
              <Award className="text-primary mb-2" size={32} />
              <span className="text-3xl font-bold">25+</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-tight">Years Exp.</span>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-8 rounded-3xl shadow-xl z-20 hidden sm:block">
            <div className="flex flex-col items-center">
              <Users className="mb-2" size={32} />
              <span className="text-3xl font-bold">10k+</span>
              <span className="text-xs opacity-60 font-bold uppercase tracking-tight">Satisifed Fans</span>
            </div>
          </div>

          {/* Abstract blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">About Our Clinic</span>
            <h2 className="text-4xl lg:text-5xl leading-tight">Expert Care for Every Member of Your Family</h2>
            <p className="text-slate-600 leading-relaxed">
              Based in the heart of Orlando, our center has been a pillar of dental health for over two decades. We believe that a trip to the dentist should be stress-free and rewarding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'State-of-the-art Technology',
              'Personalized Treatment Plans',
              'Compassionate & Gentle Care',
              'Easy Financing Options',
              'Emergency Appointments',
              'Experienced Specialists'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Heart className="text-red-500" size={24} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold">Our Philosophy</h4>
                <p className="text-sm text-slate-500 italic">"We treat every patient like a member of our own family."</p>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="flex items-center justify-center bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg shadow-secondary/20 w-fit"
          >
            Read Our Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
