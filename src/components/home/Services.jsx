import React, { useEffect }from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Services = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
  return (
    <section id="featured-services" className="featured-services section light-background">

    <div className="container">

      <div className="row gy-4">

        <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item d-flex">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar-event"></i></div>
            <div>
              <h4 className="title"><Link to="#" style={{ textDecoration: 'none'}} className="stretched-link">Planification d'Examens</Link></h4>
              <p className="description">Organisez facilement les examens blancs et nationaux avec notre outil de planification.</p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="service-item d-flex">
            <div className="icon flex-shrink-0"><i className="bi bi-file-earmark-text"></i></div>
            <div>
              <h4 className="title"><Link to="#" style={{ textDecoration: 'none'}} className="stretched-link">Gestion des Inscriptions</Link></h4>
              <p className="description">Suivez et gérez les inscriptions des candidats de manière efficace et transparente.</p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item d-flex">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><Link to="#" style={{ textDecoration: 'none'}} className="stretched-link">Analyse des Résultats</Link></h4>
              <p className="description">Accédez à des rapports détaillés et analysez les résultats des examens pour une meilleure prise de décision.</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Services
