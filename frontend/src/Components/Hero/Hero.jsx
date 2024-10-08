import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/Hero Agri.png'


const Hero = () => {
  return (
    <>
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

                {/* Brand Info */}
                <div className="flex flex-col justify-center p-14 md:py-0 font-playfair">
                    <div className="text-center md:text-left space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                    Fresh Vegetables,<span className="text-primary">Directly from Farmers to You </span> {" "}
                    </h1>
                    <p className="text-gray-600">
                    Support local farmers, get fresh produce delivered to your doorstep
                    </p>
                    

                {/* Button section */}
                <div className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                  <button className="primary-btn flex items-center gap-2 ">
                    Order Now
                  </button>
                  <button className="flex justify-center items-center gap-2">
                    <FaPlay/>Watch Now
                  </button>
                </div>
                </div>
                </div>

              {/* Hero Image */}
              <div className="flex justify-center items-center">
                <img src={HeroImg} alt="" className="w-[350] md:w-[550px] xl-w[700px] drop-shadow" />
              </div>

            </div>
        </section>
    </>
  )
}

export default Hero