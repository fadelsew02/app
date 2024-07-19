import React, { useEffect }from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Footer = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" style={{ textDecoration: 'none'}} className="logo d-flex align-items-center">
              <span className="sitename">ExamManager</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>Cotonou, Bénin</p>
              <p className="mt-3"><strong>Téléphone:</strong> <span>+229 01 23 45 67</span></p>
              <p><strong>Email:</strong> <span>contact@examensbenin.bj</span></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-3 footer-links">
            <h4>Liens Utiles</h4>
            <ul>
              <li><Link to="/" style={{ textDecoration: 'none'}} >Accueil</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none'}} >À propos</Link></li>
              <li><Link to="/services" style={{ textDecoration: 'none'}}>Services</Link></li>
              <li><Link to="/terms" style={{ textDecoration: 'none'}}>Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" style={{ textDecoration: 'none'}}>Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Notre Newsletter</h4>
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur nos services !</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Votre email" />
                <input type="submit" value="S'inscrire" />
              </div>
              <div className="loading">Chargement</div>
              <div className="error-message"></div>
              <div className="sent-message">Votre demande d'inscription a été envoyée. Merci !</div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Droits d'auteur</span> <strong className="px-1 sitename">Gestion Examens Bénin</strong> <span>Tous droits réservés</span></p>
      </div>
    </footer>
  );
};

export default Footer;
