import React, { useEffect }from 'react'
import AOS from 'aos';

const Features = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
  return (
    <section id="features" className="features section">
   
    <div className="container section-title" data-aos="fade-up">
      <h2>Fonctionnalités</h2>
      <p>Découvrez les fonctionnalités essentielles pour la gestion efficace des examens</p>
    </div>

    <div className="container">
      <div className="row justify-content-between">

        <div className="col-lg-5 d-flex align-items-center">

          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
              <a className="nav-link active show" style={{ textDecoration: 'none'}} data-bs-toggle="tab" data-bs-target="#features-tab-1">
                <i className="bi bi-binoculars"></i>
                <div>
                  <h4 className="d-none d-lg-block">Suivi des Candidats</h4>
                  <p>
                    Suivez les performances et les progrès des candidats tout au long de leur préparation aux examens.
                  </p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ textDecoration: 'none'}} data-bs-toggle="tab" data-bs-target="#features-tab-2">
                <i className="bi bi-box-seam"></i>
                <div>
                  <h4 className="d-none d-lg-block">Gestion des Inscriptions</h4>
                  <p>
                    Gérez les inscriptions de manière centralisée et simplifiée, avec des outils intuitifs et efficaces.
                  </p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ textDecoration: 'none'}} data-bs-toggle="tab" data-bs-target="#features-tab-3">
                <i className="bi bi-brightness-high"></i>
                <div>
                  <h4 className="d-none d-lg-block">Analyse des Résultats</h4>
                  <p>
                    Analysez les résultats des examens pour identifier les points forts et les axes d'amélioration des candidats.
                  </p>
                </div>
              </a>
            </li>
          </ul>

        </div>

        <div className="col-lg-6">

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

            <div className="tab-pane fade active show" id="features-tab-1">
              <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid"/>
            </div>

            <div className="tab-pane fade" id="features-tab-2">
              <img src="assets/img/tabs-2.jpg" alt="" className="img-fluid"/>
            </div>

            <div className="tab-pane fade" id="features-tab-3">
              <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default Features
