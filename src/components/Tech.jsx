import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mt-14 max-w-5xl mx-auto">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="tech-card group"
          >
            <div className="tech-card-inner">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <p className="mt-3 text-[12px] text-[#aaa] font-medium tracking-wide group-hover:text-white transition-colors duration-300 text-center leading-tight">
                {technology.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
