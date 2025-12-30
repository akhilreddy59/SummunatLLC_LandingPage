
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const CaseStudies: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      // Smooth scroll the parent container to the top of the case studies section 
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">
              Digital <span className="text-orange-600">Impact</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              We create world-class digital experiences. Explore our selection of high-performance 
              projects that have driven significant growth for our global clients.
            </p>
          </div>
          <button className="flex items-center gap-3 font-extrabold text-orange-600 hover:text-orange-700 transition-all group px-6 py-3 border-2 border-orange-600/10 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/20">
            View All Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Improved grid alignment and container spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {CASE_STUDIES.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full flex justify-center"
              onClick={() => setSelectedProject(project)}
            >
              <div className="case-card max-w-[400px]">
                <svg className="img-svg" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_1421394342400">
                      <g>
                        <polygon fill="#f97316" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
                        <polygon fill="#ea580c" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
                        <polygon fill="#9a3412" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
                        <polygon fill="#7c2d12" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
                        <polygon fill="#431407" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
                        <polygon fill="#2e1005" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="textBox">
                  <p className="text head">{project.title}</p>
                  <span>{project.tag}</span>
                  <p className="text price line-clamp-2">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.98 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-full"
            >
              <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                <img 
                  src={selectedProject.image.replace('800/1000.webp', '1600/1200.webp')} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                  loading="eager"
                  decoding="sync"
                  onLoad={(e) => (e.currentTarget as HTMLImageElement).classList.add('loaded')}
                />
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar flex flex-col bg-white dark:bg-slate-900">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors z-20 text-slate-900 dark:text-white"
                  aria-label="Close Case Study Details"
                >
                  <X size={24} />
                </button>

                <div className="relative pt-4 md:pt-0">
                  <span className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-4 block">
                    {selectedProject.tag} Solution
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Problem</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                        Scaling digital operations while maintaining a premium user experience required a robust architectural overhaul.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Strategy</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                        We focused on performance optimization and modular design to ensure long-term scalability and ease of use.
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Result</h4>
                    <div className="p-6 md:p-8 rounded-3xl bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30">
                       <p className="text-slate-800 dark:text-slate-100 text-lg md:text-xl font-semibold italic">
                        "{selectedProject.impact}"
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 py-5 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20">
                      View Live Project <ExternalLink size={20} />
                    </button>
                    <button className="flex-1 py-5 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                      Case Study PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
