import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative font-medium overflow-hidden">
      {/* Upper Footer / Newsletter (Teal part) */}
      <div className="bg-primary pt-20 pb-20 text-white relative z-10">
        <div className="container-custom grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-xl group-hover:rotate-12 transition-transform">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-0 w-full h-1.5 bg-primary rounded-full -translate-y-1/2" />
                  <div className="absolute left-1/2 top-0 w-1.5 h-full bg-primary rounded-full -translate-x-1/2" />
                </div>
              </div>
              <div className="flex flex-col text-white">
                <span className="text-2xl font-display font-black leading-none tracking-tighter">ORLANDO</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Dental Center</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              We provide the most full medical services, so every person could have the opportunity to receive qualitative help.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 opacity-60">USEFUL LINKS</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              {['About Us', 'Contact', 'Faq', 'Patient Information', 'Special Offers'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:translate-x-2 transition-transform flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 opacity-60">DEPARTMENTS</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold text-white/80">
              {['Cardiology', 'Dental Care', 'Neurology', 'Diagnostics', 'Pharmacy'].map((dept) => (
                <li key={dept}>
                  <a href="#" className="hover:text-white transition-colors">{dept}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 opacity-60">NEWSLETTER</h4>
            <p className="text-sm text-white/70 mb-6">Receive the latest news and health tips in your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-sm focus:bg-white focus:text-slate-900 outline-none transition-all placeholder:text-white/40"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-white text-primary rounded font-bold text-xs hover:bg-slate-900 hover:text-white transition-all">
                JOIN
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lower Footer (Dark part) */}
      <div className="bg-slate-900 py-6 text-white/40 text-[10px] font-black uppercase tracking-widest relative z-10">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p>© 2024 ORLANDO DENTAL CENTER – ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
