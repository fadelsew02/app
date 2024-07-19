import React, { useEffect }from 'react'
import AOS from 'aos';

const Details = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <section id="features-details" className="features-details section">

    <div className="container">

      <div className="row gy-4 justify-content-between features-item">

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <img src="assets/img/features-1.jpg" className="img-fluid" alt=""/>
        </div>

        <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="content">
            <h3>Gestion complète des examens</h3>
            <p>
              Optimisez la gestion de vos examens blancs et nationaux avec notre plateforme intuitive. Facilitez l'organisation, la surveillance et l'évaluation de vos examens.
            </p>
            <a href="#" style={{ textDecoration: 'none'}} className="btn more-btn">En savoir plus</a>
          </div>
        </div>

      </div>

      <div className="row gy-4 justify-content-between features-item">

        <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">

          <div className="content">
            <h3>Fonctionnalités avancées</h3>
            <p>
              Découvrez nos outils avancés pour une gestion efficace et sans stress des examens.
            </p>
            <ul>
              <li><i className="bi bi-easel flex-shrink-0"></i> Suivi des performances des candidats.</li>
              <li><i className="bi bi-patch-check flex-shrink-0"></i> Gestion des inscriptions et des résultats.</li>
              <li><i className="bi bi-brightness-high flex-shrink-0"></i> Planification et organisation des sessions.</li>
            </ul>
            <p></p>
            <a href="#" style={{ textDecoration: 'none'}} className="btn more-btn">En savoir plus</a>
          </div>

        </div>

        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/features-2.jpg" className="img-fluid" alt=""/>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Details
