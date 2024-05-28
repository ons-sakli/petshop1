import React from 'react';
import { motion } from 'framer-motion';

import PageHero from '../layout/PageHero';
import { ABOUT_IMG_URL } from '../utils/constants';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  };

  const underlineAnimate = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1,
        duration: .8,
      },
    },
};


const About = () => {


    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title="about" />
            <div className='w-full py-32'>
                <div className='w-[85vw] flex mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <img src={ABOUT_IMG_URL} alt="" />
                        </div>
                        <div>
                            <motion.h2 className='text-4xl lg:text-6xl font-bold capitalize tracking-wider'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >
                                Our Story
                                <svg
                                    className="svg-underline stroke-[#D891EF] relative z-10 w-1/2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={7}
                                    viewBox="0 0 422 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <motion.path
                                        d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                        variants={underlineAnimate}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.h2>
                            <motion.p className='leading-10 text-gray-600 py-8 text-lg'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: .5, duration: .8 }}
                            >
                            At Our Story Pet Shop, we are on a mission to provide pets and their owners with everything they need to live happy and healthy lives. We offer a wide range of high-quality products, from food and accessories to toys and treats, grooming supplies, and health products. We are also passionate about pet education and wellness, and we offer a variety of resources and information to help pet owners care for their furry friends.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default About;