import CountUp from '../components/Counterup';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="container-xl">
        <div className="counter_wrapper d-flex justify-content-center align-items-center">
            <div className="counter_div">
            <CountUp />
            </div>
            <div className="counter_div">
            <CountUp />
            </div>
            <div className="counter_div">
            <CountUp />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
