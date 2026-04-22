import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

/* ── Inline SVG icons (white, stroke-based, 28px) ──────── */
const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5" />
      <path d="M14.5 2.5C17 3 19 5 19 7.5c0 1-.3 2-.8 2.7" />
      <path d="M9.5 2.5C7 3 5 5 5 7.5c0 1 .3 2 .8 2.7" />
      <path d="M6 13c0 3.3 2.7 6 6 6s6-2.7 6-6v-2.5" />
      <path d="M6 10.5V13" />
      <path d="M12 10v9" />
      <path d="M18 10.5V13" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6"  y1="20" x2="6"  y2="14" />
      <line x1="2"  y1="20" x2="22" y2="20" />
    </svg>
  ),
  algo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12
               M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
};

const iconMap = ['code', 'brain', 'chart', 'algo'];

// Per-card: icon stroke color + glow shadow
const cardColors = [
  { color: '#60a5fa', glow: '0 0 12px rgba(96,165,250,0.5), 0 0 28px rgba(96,165,250,0.2)'  }, // blue  – Full-Stack
  { color: '#fb923c', glow: '0 0 12px rgba(251,146,60,0.5),  0 0 28px rgba(251,146,60,0.2)'  }, // orange – AI/ML
  { color: '#f87171', glow: '0 0 12px rgba(248,113,113,0.5), 0 0 28px rgba(248,113,113,0.2)' }, // red   – Data Science
  { color: '#fbbf24', glow: '0 0 12px rgba(251,191,36,0.5),  0 0 28px rgba(251,191,36,0.2)'  }, // yellow – Problem Solving
];

const iconClasses = ['icon-blue', 'icon-orange', 'icon-red', 'icon-yellow'];

const ServiceCard = ({ index, title, subtitle, description }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full p-[1px] rounded-[20px]"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.28)' }}>

      <div className="service-card bg-jetLight rounded-[20px] p-6 h-[300px]
                      flex flex-col justify-start gap-3 overflow-hidden relative">

        {/* Shine overlay */}
        <div className="shine-overlay" />

        {/* Icon */}
        <div
          className={`icon ${iconClasses[index]} service-icon w-[52px] h-[52px] rounded-xl
                      flex items-center justify-center bg-white/5 mb-1`}
          style={{
            color: cardColors[index].color,
            border: `1px solid ${cardColors[index].color}30`,
            boxShadow: cardColors[index].glow,
          }}>
          {icons[iconMap[index]]}
        </div>

        {/* Tag label */}
        <span className="text-[10px] font-poppins font-semibold uppercase
                         tracking-[1.5px] text-taupe self-start mb-4">
          {subtitle}
        </span>

        {/* Title */}
        <h3 className="text-timberWolf text-[16px] font-bold font-beckman
                       tracking-wide leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-french text-[12.5px] font-poppins leading-[20px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I'm a passionate Full Stack Developer with a strong foundation in the
        MERN stack and a growing interest in AI/ML and data science. I love
        turning ideas into intelligent, scalable systems — from responsive web
        apps to data-driven solutions. Always learning, always building.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
