import React, { useEffect }from 'react'
import AOS from 'aos';

const Faq = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <section id="faq" className="faq section">

    <div className="container section-title" data-aos="fade-up">
      <h2>Questions Fréquemment Posées</h2>
    </div>

    <div className="container">

      <div className="row justify-content-center">

        <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">

          <div className="faq-container">

            <div className="faq-item faq-active">
              <h3>Comment m'inscrire à un examen blanc ou national ?</h3>
              <div className="faq-content">
                <p>Pour vous inscrire à un examen, créez un compte sur notre plateforme et suivez les instructions d'inscription. Vous pouvez choisir les examens disponibles et compléter le processus en quelques étapes simples.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item">
              <h3>Comment puis-je suivre mes résultats d'examen ?</h3>
              <div className="faq-content">
                <p>Vos résultats d'examen seront disponibles dans votre espace personnel sur notre plateforme. Connectez-vous pour consulter vos notes et obtenir des analyses détaillées de vos performances.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item">
              <h3>Quelles sont les fonctionnalités de la plateforme ?</h3>
              <div className="faq-content">
                <p>Notre plateforme offre une gestion complète des examens, incluant l'inscription, la planification, le suivi des performances, et l'accès aux résultats. Nous offrons également des outils pour l'analyse et l'amélioration continue.</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item">
              <h3>Comment accéder à mon calendrier d'examens ?</h3>
              <div className="faq-content">
                <p>Votre calendrier d'examens est disponible dans votre espace personnel. Connectez-vous pour voir les dates et les horaires des examens auxquels vous êtes inscrit.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item">
              <h3>Comment contacter le support en cas de problème ?</h3>
              <div className="faq-content">
                <p>Si vous rencontrez un problème ou avez des questions, vous pouvez contacter notre support via le formulaire de contact sur notre plateforme. Notre équipe est là pour vous aider.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item">
              <h3>Comment modifier mes informations personnelles ?</h3>
              <div className="faq-content">
                <p>Vous pouvez modifier vos informations personnelles en vous connectant à votre compte et en accédant à la section "Profil". Assurez-vous de sauvegarder vos modifications.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default Faq
