import { motion } from 'motion/react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Top 10 tips for a healthy smile during holidays',
    date: 'OCTOBER 24, 2024',
    category: 'PEDIATRICS',
    comments: 12,
    image: 'https://picsum.photos/seed/n1/600/400'
  },
  {
    title: 'New advanced laser treatment now available',
    date: 'OCTOBER 21, 2024',
    category: 'TECHNOLOGY',
    comments: 0,
    image: 'https://picsum.photos/seed/n2/600/400'
  }
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">THE BLOG</span>
            <h2 className="text-4xl font-display font-black text-slate-800 mt-2">Latest News</h2>
          </div>
          <button className="text-primary font-black text-xs uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1 hidden md:block">
            VISIT OUR BLOG
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            >
              <div className="md:w-1/2 relative overflow-hidden rounded shadow-lg h-64 md:h-auto">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded shadow-lg">
                  <Star size={20} fill="currentColor" />
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col justify-center py-4">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-slate-400 text-xs font-bold mb-6">
                  <span>{item.date}</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span>{item.comments} COMMENTS</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-800 group-hover:gap-4 transition-all">
                  READ ARTICLE <ArrowRight size={14} className="text-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
