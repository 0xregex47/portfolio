import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DecryptedText } from './DecryptedText';
import { SectionTitle } from './UI/SectionTitle';
import { ExternalLinkIcon, GithubIcon, ShieldCheckIcon, BrainIcon, DatabaseIcon } from 'lucide-react';
import projectsData from '../assets/data/projects.json';
export function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const iconMap: {
    [key: string]: any;
  } = {
    ShieldCheckIcon,
    BrainIcon,
    DatabaseIcon
  };
  return <section id="projects" ref={ref} className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Featured Projects" inView={inView} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectsData.map((project, index) => {
          const IconComponent = iconMap[project.icon];
          return <motion.div key={index} className="bg-black/40 backdrop-blur-sm border border-[#00f6ff]/20 rounded-lg overflow-hidden hover:border-[#00f6ff]/60 transition-all group" initial={{
            opacity: 0,
            y: 50
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -10
          }}>
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-20 h-20 text-[#00f6ff]/40 group-hover:text-[#00f6ff] transition-colors" />}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    <DecryptedText text={project.title} animateOn="view" />
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="text-xs px-3 py-1 bg-[#00f6ff]/10 text-[#00f6ff] rounded-full border border-[#00f6ff]/30">
                        {tech}
                      </span>)}
                  </div>
                  <div className="flex gap-4 pt-4">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#00f6ff] transition-colors">
                        <GithubIcon className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#00f6ff] transition-colors">
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>}
                  </div>
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}