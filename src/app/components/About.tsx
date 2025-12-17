import { Card } from './ui/card';
import { Brain, Code, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      icon: Brain,
      title: 'AI Engineering',
      description: 'Developing intelligent systems using machine learning, deep learning, and natural language processing to solve complex problems.',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with cutting-edge frameworks and technologies for optimal user experience.',
      gradient: 'from-purple-500 to-pink-500',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      gradient: 'from-green-500 to-emerald-500',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              About Me
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A passionate technologist dedicated to pushing the boundaries of what's possible with AI and modern development practices
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden group">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </motion.div>
                  
                  <h3 className="mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  
                  {/* Decorative element */}
                  <motion.div
                    className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} rounded-full mt-4 transition-all duration-500`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
