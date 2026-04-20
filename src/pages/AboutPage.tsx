import { motion } from 'motion/react';
import { Shield, Target, UserCheck, Star, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="bg-slate-50 py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4"
            >
              Our Clinic Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl mb-8"
            >
              Excellence in Dentistry <span className="text-secondary">Since 1999.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Founded by Dr. John Orlando, our center has grown from a small family practice into one of Orlando's most trusted providers of cosmetic and restorative dentistry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[48px] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/about1/800/800" 
                  alt="Our Clinic" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary p-10 rounded-[32px] text-white shadow-2xl hidden md:block">
                <div className="flex flex-col items-center">
                  <Star size={40} className="mb-2 text-primary" fill="currentColor" />
                  <span className="text-4xl font-bold italic">Top Choice</span>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60">Orlando FL</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl leading-tight">Our Core Mission & Values</h2>
              <p className="text-slate-600 leading-relaxed">
                At Orlando Dental Center, we aren't just treating teeth—we're caring for people. Our mission is to provide high-quality dental care through surgical precision and compassionate patient management.
              </p>
              
              <div className="grid gap-6">
                {[
                  { icon: Shield, title: 'Uncompromising Quality', desc: 'We only use the highest grade materials and latest lab technologies.' },
                  { icon: Target, title: 'Patient Transparency', desc: 'Detailed treatment plans with no hidden costs or unnecessary procedures.' },
                  { icon: UserCheck, title: 'Continual Education', desc: 'Our team stays updated with the latest clinical advancements annually.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 italic">
                       <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities / Stats */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-6">Our Impact in Numbers</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Providing reliable dental services to thousands of patients across Central Florida.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Successful Implants', value: '5,000+' },
              { label: 'Smile Makeovers', value: '2,500+' },
              { label: 'Professional Staff', value: '15+' },
              { label: 'Years of Experience', value: '25+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-8 bg-white/5 rounded-3xl border border-white/10">
                <span className="text-5xl font-display font-bold text-primary italic">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
