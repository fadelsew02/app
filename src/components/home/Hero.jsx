import React, { useEffect }from 'react'
import AOS from 'aos';

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src="assets/img/hero-bg-light.webp" alt="" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">Bienvenue sur <span>ExamManager</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Gérez facilement les examens blancs et nationaux<br/></p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" style={{ textDecoration: 'none'}} className="btn-get-started">Commencer</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" style={{ textDecoration: 'none'}} className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Voir la vidéo</span></a>
          </div>
          <img src="assets/img/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
        </div>
      </div>

    </section>

  )
}

export default Hero