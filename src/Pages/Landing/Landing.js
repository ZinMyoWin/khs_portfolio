import React from "react";
import "./landing.css";
import Navbar from "../../components/Navbar/Navbar";
import heroimage from "../../assets/img/Landing-KHS-Img.png";
import downArrow from "../../assets/icons/down-arrow.png";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";
import Footer from "../../components/Footer/Footer";
export default function Landing() {
  return (
    <div className='main-container'>
      <Navbar />

      <div className='hero'>
        <div className='hero-container'>
          <div className='hero-sub-container'>
            <div className='hero-left'>
              <img src={heroimage} alt='hero-image' className='hero-img' />
              <p className='hero-intro'>
                Hello, I’m
                <br /> Kaung Htike San
              </p>
            </div>
            <div className='hero-right'>
              <p className='hero-intro'>
                I design clean, user-centric interfaces that enhance user
                journeys.
              </p>
            </div>
          </div>
          <div className='down-arrow-container'>
            <img className='hero-down-arrow' src={downArrow} alt='down-arrow' />
          </div>
        </div>
      </div>

      <ProjectDisplay />

      <div className='contact'>
        <div className='contact-container'>
          <div className='contact-msg'>I am thrilled to answer to your next project </div>
          <div className='contact-email'>kaunghtikes726@gmail.com</div>
        </div>
      </div>


      <Footer/>
    </div>

    
  );
}
