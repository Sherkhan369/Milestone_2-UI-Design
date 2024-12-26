import Image from "next/image";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";
 function Home() {
  return (
    
   <div className="h-auto">
    <div className="hero-section">
      <div className="hero-content">
        <h1 >Better Solutions For <br /> Your Business</h1>
        <p className="p1" >We are team of talanted designers and devolpers making <br />website nextJs</p>
        <div className="toogleButton">
          <button>Get Started</button>
          <p className="hero-p">Watch Video</p>
        </div>
      </div>
      <div>
      <Image src={"/hero.png"} alt="logo" height={500} width={500}/>
      </div>
    </div>

    {/* ===========Pages========== */}
    <About/>
    <Services/>
    <Contact/>
   </div>
   
  );
}
export default Home