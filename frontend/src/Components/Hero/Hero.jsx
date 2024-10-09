import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/Hero Agri.png'
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";


const Hero = () => {
  return (
    <>
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

                {/* Brand Info */}
                <div className="flex flex-col justify-center p-14 md:py-0 font-playfair">
                    <div className="text-center md:text-left space-y-6">
                    <motion.h1 
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                      Fresh Vegetables,<span className="text-primary"> Directly from Farmers to You </span> {" "}
                    </motion.h1>
                    <motion.p
                    variants={SlideRight(1.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-gray-600">
                    Support local farmers, get fresh produce delivered to your doorstep
                    </motion.p>
                    

                {/* Button section */}
                <motion.div 
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                  <button className="primary-btn flex items-center gap-2 ">
                    Order Now
                  </button>
                  <button className="flex justify-center items-center gap-2">
                    <FaPlay/>Watch Now
                  </button>
                </motion.div>
                </div>
                </div>

              {/* Hero Image */}
              <div className="flex justify-center items-center">
                <motion.img
                variants={SlideLeft(0.6)}
                initial="hidden"
                animate="visible"
                // initial={{opacity:0, x:-100 }}
                 src={HeroImg} alt="" className="w-[350] md:w-[550px] xl-w[700px] drop-shadow" />
              </div>

            </div>
        </section>
    </>
  )
}

export default Hero