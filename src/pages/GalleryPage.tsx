import { motion } from 'motion/react';
import { Camera, Zap, CheckCircle } from 'lucide-react';

const categories = ['All', 'Cosmetic', 'Implants', 'Office'];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
            <div className="w-16 h-16 rounded-3xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <Camera size={32} />
            </div>
            <h1 className="text-5xl">Our Smile <span className="text-primary italic">Gallery.</span></h1>
            <p className="text-slate-600">See the real results we achieve for our patients every day. From dramatic transformations to our comfortable office environment.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          {/* Category Filter Desktop */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                  i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-[32px] overflow-hidden shadow-sm"
              >
                <img 
                  src={`https://picsum.photos/seed/dental-gal-${i}/800/800`} 
                  alt={`Gallery Case ${i + 1}`} 
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Before/After Overlay Mockup */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter text-slate-900 shadow-sm border border-white/50">
                   Result #{1024 + i}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Zap size={16} fill="currentColor" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Full Restoration</span>
                  </div>
                  <h4 className="text-white font-bold text-xl">Upper Jaw Implant</h4>
                  <p className="text-slate-300 text-sm italic">"I finally found my confidence again. Thank you Dr. Orlando!"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[48px] text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-20 blur-3xl" />
             <h3 className="text-3xl font-display mb-4 italic">Ready to be our next <span className="text-primary not-italic">Success Story?</span></h3>
             <p className="max-w-xl mx-auto text-slate-400 mb-8">Every smile is unique. Contact us for a personalized consultation and see what we can do for your confidence.</p>
             <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Schedule My Consultation
             </button>
          </div>
        </div>
      </section>

      {/* Office Tour Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6">
                 <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Environment</span>
                 <h2 className="text-4xl lg:text-5xl">Comfort-First Clinic Environment</h2>
                 <p className="text-slate-600 leading-relaxed">
                   We've designed our office to feel less like a clinical space and more like a modern wellness center. Enjoy relaxing chairs, TV entertainment, and a calming atmosphere while we care for you.
                 </p>
                 <div className="grid gap-4">
                    {['Advanced Sterilization Lab', 'Modern Recovery Lounge', 'Children\'s Play & Waiting Area', 'Private Consultation Rooms'].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="text-primary" size={20} />
                        <span className="font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://picsum.photos/seed/office1/600/800" className="rounded-3xl shadow-lg mt-12" referrerPolicy="no-referrer" />
                 <img src="https://picsum.photos/seed/office2/600/800" className="rounded-3xl shadow-lg mb-12" referrerPolicy="no-referrer" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
