
import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 group mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Rocket size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                SAMMUNAT
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed mb-8">
              Transforming businesses through modern digital excellence. We build 
              for the future, ensuring your brand stays ahead of the curve.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'UI/UX Design'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Portfolio', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Subscribe</h4>
            <p className="text-slate-500 text-sm mb-4">Get the latest digital trends and insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm"
              />
              <button className="px-4 py-3 bg-orange-600 text-white font-bold rounded-xl text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SAMMUNAT Digital Services. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
