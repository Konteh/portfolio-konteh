import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  
  const Header = () => (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Konteh.gm</h1>
              <p className="p-text">Co-Founder | Software Engineer | Digital Strategist</p>
            </div>
          </div>

           <div className="tag-cmp app__flex">
            {/* <span className="unicorn">Unicorn</span> */}
            <p className="p-text">Building Africa’s Digital Future Through Tech, Strategy & Design.</p>
            {/* <p className="p-text">backend Developer</p> */}
          </div>
  
          <div className="tag-cmp app__flex">
            {/* <span className="unicorn">Unicorn</span> */}
            <p className="p-text">Tech leader and creative strategist helping startups and institutions scale through AI, payments, and digital branding.</p>
            {/* <p className="p-text">backend Developer</p> */}
          </div>
          {/* <div className="tag-cmp app__flex">
            <p className="p-text">Chief Operations Officer, Gomindz. <br />
            Lead Instructor, Gomindz Academy
              
             </p>
          </div> */}
          {/* <div className="tag-cmp app__flex">
            <p className="p-text"> Visual Artist, kontehgraphics.
             </p>
          </div> */}
          <div className="tag-cmp app__flex">
            <p className="p-text"> A coffee enthusiast
             </p>
          </div>
        </div>
      </motion.div>
  
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.kontehgm} alt="profile_bg" className="profileImg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
  
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.git, images.figma,images.coffee3].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );

export default AppWrap(Header, 'home');