import { motion } from 'motion/react';
import { 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Microscope,
  Stethoscope,
  Smile,
  Activity,
  Sparkles,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fullServices = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: Stethoscope,
    desc: 'The foundation of long-term oral health is routine care.',
    details: [
      'Comprehensive Dental Exams',
      'Professional Teeth Cleanings',
      'Advanced Digital X-Rays',
      'Oral Cancer Screenings',
      'Fluoride Treatments & Sealants'
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: Sparkles,
    desc: 'Expert transformations for the confident smile you deserve.',
    details: [
      'Porcelain Veneers',
      'Custom Smile Design',
      'In-Office Teeth Whitening',
      'Composite Bonding',
      'Gum Contouring'
    ]
  },
  {
    id: 'restorative',
    title: 'Restorative Care',
    icon: Activity,
    desc: 'Repairing damage and restoring functionality and aesthetics.',
    details: [
      'Natural Looking Dental Crowns',
      'Tooth-Colored Fillings',
      'Dental Bridges',
      'Full & Partial Dentures',
      'Full Mouth Rehabilitation'
    ]
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    icon: Microscope,
    desc: 'The permanent solution for missing teeth and stable smiles.',
    details: [
      'Single Tooth Implants',
      'Multiple Teeth Implants',
      'Implant Supported Bridges',
      'All-on-4® Solutions',
      '3D Computed Tomography'
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    icon: Smile,
    desc: 'Discreet and effective alignment for all ages.',
    details: [
      'Invisalign® Clear Aligners',
      'Traditional Braces',
      'Clear Ceramic Braces',
      'Early Orthodontic Intervention',
      'Retainers & Follow-up'
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    icon: Zap,
    desc: 'Fast relief when you need it most. No wait appointments.',
    details: [
      'Severe Toothache Relief',
      'Broken or Cracked Teeth',
      'Infected Gums or Abscess',
      'Lost Fillings or Crowns',
      'Traumatic Dental Injuries'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/10 rounded-full blur-[100px] translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4">Expert Services</span>
            <h1 className="text-5xl lg:text-7xl text-white mb-8 italic">World-Class <span className="text-primary not-italic">Dental Care.</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From preventative hygiene to complex oral surgeries, our team providing high-quality care with the latest technology available in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20">
            {fullServices.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8 p-1 bg-white rounded-[40px] transition-all">
                  <div className="w-full md:w-48 lg:w-56 aspect-square rounded-[32px] bg-slate-100 flex items-center justify-center shrink-0 border border-slate-50 shadow-sm relative overflow-hidden group-hover:bg-primary transition-colors duration-500">
                    <service.icon size={64} className="text-primary group-hover:text-white transition-colors duration-500 z-10" />
                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col justify-center gap-4 pr-4">
                    <h2 className="text-3xl font-display">{service.title}</h2>
                    <p className="text-slate-500 text-sm italic">{service.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                       {service.details.map(detail => (
                         <div key={detail} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                           {detail}
                         </div>
                       ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className="mt-4 text-secondary font-bold flex items-center gap-2 hover:text-primary transition-colors text-sm"
                    >
                      Book this service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="bg-white p-10 lg:p-20 rounded-[56px] shadow-xl border border-primary/10 grid lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold">Same Day Appointments</h3>
              <p className="text-slate-500">Emergency pain relief shouldn't wait. We reserve slots daily for immediate patient care.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold">Insurance Assistance</h3>
              <p className="text-slate-500">Our billing experts work directly with your providers to maximize your dental benefits.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                <Plus size={32} />
              </div>
              <h3 className="text-2xl font-bold">New Patient Specials</h3>
              <p className="text-slate-500">Ask about our limited-time promotions for comprehensive exams and teeth whitening.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
