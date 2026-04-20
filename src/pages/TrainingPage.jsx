import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Play, 
  Flame, 
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingPage = () => {
  const courses = [
    {
      title: "Fire Warden Training",
      description: "Comprehensive training for staff nominated as fire wardens. Includes legal duties, fire prevention, and emergency evacuation procedures.",
      duration: "4 Hours",
      icon: <ShieldCheck className="h-8 w-8 text-brand-red" />,
      tag: "MOST POPULAR",
      slug: "fire-warden-training"
    },
    {
      title: "Basic Fire Awareness",
      description: "Essential training for all employees. Learn how to identify hazards, use extinguishers correctly, and respond to fire alarms.",
      duration: "2 Hours",
      icon: <BookOpen className="h-8 w-8 text-brand-red" />,
      tag: "ESSENTIAL",
      slug: "basic-fire-awareness"
    },
    {
      title: "Evacuation Drill Oversight",
      description: "Professional supervision and evaluation of your building's evacuation drills to identify bottlenecks and improve safety response times.",
      duration: "Variable",
      icon: <Users className="h-8 w-8 text-brand-red" />,
      tag: "PRACTICAL",
      slug: "evacuation-drill-oversight"
    },
    {
      title: "Hands-on Extinguisher Training",
      description: "Live fire training sessions where participants learn the PASS technique and gain confidence in using different types of extinguishers.",
      duration: "1.5 Hours",
      icon: <Flame className="h-8 w-8 text-brand-red" />,
      tag: "CERTIFIED",
      slug: "hands-on-extinguisher"
    }
  ];

  return (
    <div className="bg-brand-red min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[url('/fire.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-red/20 border border-brand-red/30 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-brand-red" />
              <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Certified Programs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Safety <span className="text-brand-red">Training</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Equip your team with the knowledge and skills to react decisively in an emergency. Professional training that saves lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Available Training Programs</h2>
          <div className="h-1 w-24 bg-brand-amber mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group glass-dark p-8 rounded-3xl border-white/5 hover:border-brand-red/40 transition-all duration-500 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8"
            >
              <div className="flex-shrink-0 bg-white/5 p-6 rounded-2xl group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-brand-red tracking-[0.2em]">{course.tag}</span>
                  <span className="text-gray-500 text-xs font-bold uppercase">{course.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-brand-amber transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center space-x-4">
                  <Link 
                    to={course.slug ? `/details/training/${course.slug}` : "#"}
                    className="flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest bg-brand-red/20 px-4 py-2 rounded-lg hover:bg-brand-red transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <button className="p-2 text-gray-500 hover:text-white transition-colors">
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[url('/fire.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"></div>
      <div className="relative z-10 text-center px-0 max-w-4xl mx-auto"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-white/0 relative"
          >
            <GraduationCap className="h-16 w-16 text-brand-amber mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Corporate Safety Workshops</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Need training for a large team? We provide on-site corporate workshops and customized training modules to meet your organization's specific safety requirements.
            </p>
            <div className="flex justify-center">
              <Link to="/book-consultation" className="btn-primary px-10 py-4 text-sm tracking-widest uppercase">
                Request Corporate Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
