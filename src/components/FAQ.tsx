import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes! We accept most major PPO dental insurance plans. Our team will handle all the paperwork and help you maximize your benefits. Please call us to verify your specific plan.'
  },
  {
    question: 'What financing options do you offer?',
    answer: 'We believe financial constraints shouldn\'t stand in the way of a healthy smile. We offer flexible payment plans and work with third-party financing like CareCredit.'
  },
  {
    question: 'Are you taking new patients?',
    answer: 'Absolutely! We are always excited to welcome new members to the Orlando Dental Center family. Whether you need a simple cleaning or a complex restoration, we\'re here for you.'
  },
  {
    question: 'Do you offer emergency dental services?',
    answer: 'Yes, we prioritize dental emergencies and aim to see patients on the same day whenever possible. If you\'re in pain, call us immediately at 407-851-7740.'
  },
  {
    question: 'Is parking available at your office?',
    answer: 'Yes, we have a large, private parking lot with free parking for all our patients, making your visit convenient and stress-free.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl leading-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-md">
              Have questions about your visit? We've gathered the most common inquiries here. If you need more information, don't hesitate to reach out.
            </p>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
              <h4 className="font-bold">Still have questions?</h4>
              <p className="text-sm text-slate-500">Our patient care team is available Monday through Friday to assist you.</p>
              <a 
                href="mailto:help@orlandodentalcenter.com" 
                className="text-primary font-bold flex items-center gap-2 hover:underline"
              >
                Email Support Team
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-3xl border transition-all duration-300 ${
                  openIndex === index ? 'bg-white border-primary shadow-xl shadow-primary/5' : 'bg-white/50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
