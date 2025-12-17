import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'TravelNest',
      description: 'An intelligent conversational AI built with advanced NLP models that understands context and provides accurate responses.',
      image: '/travelnest.png',
      tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
      category: 'AI',
     
    },
    {
      title: 'SuperMarket website',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
      image: '/supermarket.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web',
    
    },
    {
      title: 'Fitnese web',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered recommendations.',
     image: '/fitnes.png',
      tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      category: 'Mobile',
    
    },
    {
      title: 'Public writer website',
      description: 'Deep learning model for object detection and classification with real-time processing capabilities.',
      image: '/publicwriter.png',
      tags: ['PyTorch', 'YOLO', 'OpenCV', 'AWS'],
      category: 'AI',
    
    },
    {
      title: 'Algerie Post website',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      image: '/alger.png',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
      category: 'Web',
  
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work spanning AI, web, and mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`}
                  />
                  
                  <div className="absolute top-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                        {project.category}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline" className="text-xs bg-gray-50 border-gray-200">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full group">
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button 
  size="sm" 
  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0 text-white group transition-all"
>
  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
  Demo
</Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
