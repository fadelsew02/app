

import React, { useEffect }from 'react'
import AOS from 'aos';


const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <section id="about" className="about section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
          <p className="who-we-are">Qui Nous Sommes</p>
          <h3>Optimiser la Gestion des Examens</h3>
          <p className="fst-italic">
            Notre plateforme révolutionne la manière dont les examens blancs et nationaux sont organisés et administrés, garantissant une expérience fluide et efficace pour tous les acteurs concernés.
          </p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Faciliter la planification et la gestion des examens.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Assurer la transparence et l'équité tout au long du processus.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Offrir une interface utilisateur intuitive et accessible à tous.</span></li>
          </ul>
          <a href="#" style={{ textDecoration: 'none'}} className="read-more"><span>En savoir plus</span><i className="bi bi-arrow-right"></i></a>
        </div>

        <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">
            <div className="col-lg-6">
              <img src="assets/img/about-company-1.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <img src="assets/img/about-company-2.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-12">
                  <img src="assets/img/about-company-3.jpg" className="img-fluid" alt=""/>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  )
}

export default About
