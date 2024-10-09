import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Equipments from "./Components/Equipments/Equipments"
import TabComp from "./Components/Tab/TabComp"
import Footer from "./Components/Footer/Footer"
import BgImage from "./assets/bg.png"

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar/>
        <Hero/>
      </div>
        <Equipments/>
        <TabComp/>
        <Footer/>
    </div>
  )
}

export default App
