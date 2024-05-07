import HeroSection from '../components/HeroSection'
import Advantage from "../components/Advantage"
import Workflow from "../components/Workflow"
import Footer from "../components/Footer"
import Contribution from "../components/Contribution"
import ChooseFeature from "../components/ChooseFeature"

const Home = () => {
  return  (
    <>
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection />
            <Advantage />
            <Workflow />
            <ChooseFeature/>
            <Contribution />
            <Footer /> 
        <div/>
    </div>
    </>
  )
}

export default Home