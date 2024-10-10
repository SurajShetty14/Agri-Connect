import React from "react";
import BgImage from "../assets/bg.png";
import Equipments from "../Components/Equipments/Equipments";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Footer />
    </div>
  );
};

export default Home;
