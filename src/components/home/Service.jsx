import React, { useEffect }from 'react'
import AOS from 'aos';

const Service = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
  return (
    <section id="services" className="services section light-background">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Découvrez nos services pour une gestion efficace des examens</p>
    </div>

    <div className="container">

      <div className="row g-5">

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item item-cyan position-relative">
            <i className="bi bi-activity icon"></i>
            <div>
              <h3>Suivi des Candidats</h3>
              <p>Surveillez les progrès des étudiants et identifiez les domaines nécessitant des améliorations pour mieux les préparer aux examens.</p>
              <a href="#" style={{ textDecoration: 'none'}} className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="service-item item-orange position-relative">
            <i className="bi bi-broadcast icon"></i>
            <div>
              <h3>Gestion des Inscriptions</h3>
              <p>Gérez facilement les inscriptions aux examens avec un système centralisé et intuitif.</p>
              <a href="#"  style={{ textDecoration: 'none'}} className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item item-teal position-relative">
            <i className="bi bi-easel icon"></i>
            <div>
              <h3>Analyse des Résultats</h3>
              <p>Analysez les résultats des examens pour obtenir des insights précieux sur les performances des étudiants.</p>
              <a href="#" style={{ textDecoration: 'none'}} className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <div className="service-item item-red position-relative">
            <i className="bi bi-bounding-box-circles icon"></i>
            <div>
              <h3>Planification des Examens</h3>
              <p>Organisez et planifiez les sessions d'examens en fonction des disponibilités et des contraintes des étudiants.</p>
              <a href="#" style={{ textDecoration: 'none'}} className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
          <div className="service-item item-indigo position-relative">
            <i className="bi bi-calendar4-week icon"></i>
            <div>
              <h3>Gestion des Horaires</h3>
              <p>Établissez des horaires d'examens clairs et accessibles pour tous les participants.</p>
              <a href="#" className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
          <div className="service-item item-pink position-relative">
            <i className="bi bi-chat-square-text icon"></i>
            <div>
              <h3>Communication Efficace</h3>
              <p>Facilitez la communication entre les étudiants, les enseignants et les administrateurs pour un déroulement sans accroc des examens.</p>
              <a href="#" className="read-more stretched-link">En savoir plus <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div> */}

      </div>

    </div>

  </section>
  )
}

export default Service
