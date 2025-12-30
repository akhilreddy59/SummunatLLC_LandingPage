
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { TRUST_INDICATORS, PROCESS_STEPS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Why Partner With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              We Don't Just Build Software, <br /> We Craft Digital Legacies.
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our holistic approach combines deep technical expertise with strategic 
              design thinking to deliver solutions that actually work for your bottom line.
            </p>

            <div className="space-y-6">
              {[
                "Client-First collaborative approach",
                "Advanced AI & automation integration",
                "Scalable architectural foundations",
                "Dedicated post-launch maintenance"
              ].map((point, i) => (
                <motion.div 
                  key={point} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-200 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              {TRUST_INDICATORS.map((indicator, i) => (
                <div key={i}>
                  <div className="text-4xl font-extrabold text-white mb-1">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {indicator.value}
                    </motion.span>
                    {indicator.suffix}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{indicator.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-8 group"
                >
                  {i !== PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-[23px] top-[50px] w-[2px] h-[calc(100%+24px)] bg-slate-800 group-hover:bg-orange-600 transition-colors" />
                  )}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-xl font-bold group-hover:border-orange-600 group-hover:text-orange-500 transition-all duration-300">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
