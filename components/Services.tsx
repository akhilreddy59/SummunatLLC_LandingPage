
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SERVICES, SERVICE_ICONS } from '../constants';

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We offer specialized digital services designed to scale your operations and 
            elevate your brand identity in a competitive marketplace.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => toggleExpand(service.id)}
              className={`relative cursor-pointer group p-8 rounded-3xl transition-all duration-300 ${
                expandedId === service.id 
                  ? 'bg-orange-600 text-white shadow-2xl shadow-orange-500/20' 
                  : 'bg-white dark:bg-slate-800 hover:shadow-xl'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-colors ${
                expandedId === service.id ? 'bg-white/20' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
              }`}>
                {SERVICE_ICONS[service.icon]}
              </div>

              <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${
                expandedId === service.id ? 'text-orange-200' : 'text-orange-500'
              }`}>
                {service.category}
              </span>

              <h3 className={`text-2xl font-bold mb-4 ${
                expandedId === service.id ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}>
                {service.title}
              </h3>

              <p className={`mb-6 text-sm leading-relaxed ${
                expandedId === service.id ? 'text-orange-50/80' : 'text-slate-600 dark:text-slate-400'
              }`}>
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-bold">Learn More</span>
                {expandedId === service.id ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-6 space-y-3 pt-6 border-t border-white/20">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-3 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
