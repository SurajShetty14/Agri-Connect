import React from "react";
import { FaCarrot } from "react-icons/fa";
import { GiFarmer, GiMoneyStack } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const WhatWeProvideData = [
  {
    id: 1,
    title: "Direct Farmer-to-Consumer Sales",
    desc: "Fresh produce directly from the farm to your home, supporting local farmers and ensuring fresher vegetables.",
    icon: <GiFarmer />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Farming Posts & Updates",
    desc: "Farmers can share updates on their crops and farming techniques, connecting directly with consumers.",
    link: "/",
    icon: <FaCarrot />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fair Pricing",
    desc: "Our platform ensures farmers set fair prices for their produce, offering transparency for both sellers and buyers.",
    link: "/",
    icon: <GiMoneyStack />,
    delay: 0.9,
  },
];

const WhatWeProvide = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What We Provide for You
            </h1>
            <p className="text-gray-500">
              We offer an easy-to-use platform where farmers and consumers can connect for fresh produce and farming insights.
            </p>
          </div>
          {WhatWeProvideData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
