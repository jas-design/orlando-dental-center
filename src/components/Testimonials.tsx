import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Local Resident',
    text: 'I\'ve been coming here for 5 years. Dr. Orlando and the whole staff are incredibly professional and kind. Best dentist in Orlando hands down!',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'James Rodriguez',
    role: 'Dental Patient',
    text: 'Modern technology and very gentle care. I had a crown done and didn\'t feel a thing. Highly recommend for anyone with dental anxiety.',
    rating: 5,
    image: 'https://picsum.photos/seed/james/100/100'
  },
  {
    name: 'Emily Chen',
    role: 'Invisalign Patient',
    text: 'My Invisalign journey was seamless. The team kept me informed at every step and the results are better than I imagined. Thank you!',
    rating: 5,
    image: 'https://picsum.photos/seed/emily/100/100'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 gap-4">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Patient Stories</span>
          <h2 className="text-4xl lg:text-5xl">What Our Patients Are Saying</h2>
          <div className="flex items-center gap-2 text-yellow-400 mt-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            <span className="text-slate-900 font-bold ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col gap-6 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                <Quote size={24} />
              </div>

              <p className="text-slate-600 leading-relaxed italic pt-4">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=Orlando+Dental+Center+reviews"
            target="_blank"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors border-b-2 border-secondary/20 hover:border-primary pb-1"
          >
            Read All 500+ Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
