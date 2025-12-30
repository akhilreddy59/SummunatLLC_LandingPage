
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { ContactFormData } from '../types';

// Define the schema using Yup.
// We remove the explicit yup.ObjectSchema<ContactFormData> annotation from the variable
// to allow Yup to infer its own internal types, which often avoids complex mismatch issues with react-hook-form's resolver.
const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name is too short'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string().required('Company name is required'),
  requirement: yup.string().required('Please select a service'),
  budget: yup.string().required('Please select your budget range'),
  message: yup.string().required('Message is required').min(10, 'Tell us more about your project'),
}).required();

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // We explicitly type useForm with ContactFormData.
  // We use "as any" for the resolver to bypass deep type reconciliation issues between Yup and React Hook Form
  // which often causes TFieldValues to fall back to FieldValues, breaking handleSubmit typing.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form Submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Let's Build Something <br /> Extraordinary Together.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
              Ready to take your digital presence to the next level? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-orange-600 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                  <p className="text-slate-500">hello@sammunat.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-orange-600 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Call Us</h4>
                  <p className="text-slate-500">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-orange-600 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Visit Us</h4>
                  <p className="text-slate-500">123 Tech Avenue, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-500">We've received your inquiry and will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        {...register('email')}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company</label>
                      <input
                        {...register('company')}
                        placeholder="Company Name"
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all ${
                          errors.company ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'
                        }`}
                      />
                      {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Service</label>
                      <select
                        {...register('requirement')}
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none ${
                          errors.requirement ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'
                        }`}
                      >
                        <option value="">Select Service</option>
                        <option value="Dev">Web/Mobile Dev</option>
                        <option value="Design">UI/UX Design</option>
                        <option value="Marketing">Digital Marketing</option>
                        <option value="AI">AI Solutions</option>
                      </select>
                      {errors.requirement && <p className="text-xs text-red-500 mt-1">{errors.requirement.message}</p>}
                    </div>

                    <div className="md:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Budget Range</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['< $5k', '$5k - $20k', '$20k - $50k', '$50k+'].map(range => (
                          <label key={range} className="relative cursor-pointer group">
                            <input
                              type="radio"
                              value={range}
                              {...register('budget')}
                              className="peer hidden"
                            />
                            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl text-center text-xs font-bold peer-checked:bg-orange-600 peer-checked:text-white peer-checked:border-orange-600 transition-all">
                              {range}
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.budget && <p className="text-xs text-red-500 mt-1">{errors.budget.message}</p>}
                    </div>

                    <div className="md:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Tell us about your project..."
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message <Send size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
