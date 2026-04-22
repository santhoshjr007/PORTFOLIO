import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap, download, downloadHover } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase whitespace-nowrap">
                SANTHOSH JR
              </span>
            </h1>
            <p className="mt-3 text-eerieBlack font-medium
              lg:text-[22px] sm:text-[18px] xs:text-[15px] text-[13px]
              lg:leading-[34px] leading-[26px] tracking-wide">
              I build scalable web apps with MERN.<br />
              Exploring AI/ML &amp; data science to create smart solutions.
            </p>

            <a
              href="/Santhosh_Resume.pdf"
              download="Santhosh_Resume.pdf"
              className="mt-8 flex justify-center sm:gap-4 gap-3 
              sm:text-[20px] text-[16px] text-timberWolf 
              font-bold font-beckman items-center py-3 px-6
              whitespace-nowrap sm:w-[200px] sm:h-[50px] 
              w-[160px] h-[45px] rounded-[10px] bg-night 
              hover:bg-battleGray hover:text-eerieBlack 
              transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                const btn = document.querySelector('.download-btn');
                if(btn) btn.setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                const btn = document.querySelector('.download-btn');
                if(btn) btn.setAttribute('src', download);
              }}>
              RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </a>
          </div>
          <div
            className="w-full flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 right-0 z-10 w-auto 
            h-[50vh] sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="SANTHOSH"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
