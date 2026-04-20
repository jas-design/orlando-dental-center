import { motion } from 'motion/react';
import { 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Smile, 
  Activity, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventative care for a lifetime of healthy smiles.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and bonding for a camera-ready look.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Activity,
    title: 'Dental Implants',
    description: 'The gold standard for tooth replacement. Permanent, natural-looking solutions.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Smile,
    title: 'Invisalign®',
    description: 'Straighten your teeth discreetly without the hassle of traditional metal braces.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: ShieldCheck,
    title: 'Root Canal Therapy',
    description: 'Pain-free root canal treatments to save your natural teeth and alleviate discomfort.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: 'Fast, reliable relief for dental emergencies. Same-day appointments available.',
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 gap-4">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-4xl lg:text-5xl">Comprehensive Solutions for Your Dental Health</h2>
          <p className="text-slate-500">
            We offer a wide range of services designed to address all your oral health needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="text-primary font-bold text-sm flex items-center gap-2 group/btn"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-secondary text-white p-10 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Don't see the service you need?</h3>
            <p className="opacity-80">Call us today and speak with our friendly team about your needs.</p>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-secondary transition-all whitespace-nowrap"
          >
            Contact our office
          </Link>
        </div>
      </div>
    </section>
  );
}
