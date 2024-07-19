import React, { useEffect }from 'react'
import AOS from 'aos';

const More = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
  return (
    <section id="more-features" className="more-features section">

    <div className="container">

      <div className="row justify-content-around gy-4">

        <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
          <h3>Gérez efficacement vos examens</h3>
          <p>Notre plateforme offre une solution complète pour la gestion des examens blancs et nationaux, assurant une organisation sans faille et des résultats précis.</p>

          <div className="row">

            <div className="col-lg-6 icon-box d-flex">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4>Suivi des Candidats</h4>
                <p>Surveillez les progrès des étudiants et identifiez les domaines nécessitant des améliorations.</p>
              </div>
            </div>

            <div className="col-lg-6 icon-box d-flex">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4>Gestion des Inscriptions</h4>
                <p>Gérez facilement les inscriptions aux examens avec un système centralisé et intuitif.</p>
              </div>
            </div>

            <div className="col-lg-6 icon-box d-flex">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4>Analyse des Résultats</h4>
                <p>Analysez les résultats des examens pour obtenir des insights précieux sur les performances des étudiants.</p>
              </div>
            </div>

            <div className="col-lg-6 icon-box d-flex">
              <i className="bi bi-calendar4-week flex-shrink-0"></i>
              <div>
                <h4>Planification des Examens</h4>
                <p>Organisez et planifiez les sessions d'examens en fonction des disponibilités et des contraintes des étudiants.</p>
              </div>
            </div>

          </div>

        </div>

        <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/features-3.jpg" alt=""/>
        </div>

      </div>

    </div>

  </section>
  )
}

export default More
