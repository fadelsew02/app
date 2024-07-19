import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
      <div className="nano">
        <div className="nano-content">
          <ul>
            <div className="logo">
              <Link to="/">
                <span>Examen App</span>
              </Link>
            </div>
            <li className="label">Navigation</li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-home"></i> Acceuil
                <span className="badge badge-primary">2</span>
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li><Link to="/">Détails examen</Link></li>
                <li><Link to="/">Détails par école</Link></li>
              </ul>
            </li>
            <li className="label">Gestion</li>
            <li><Link to="/form-basic"><i className="ti-calendar"></i> Ajout des écoles</Link></li>
            <li><Link to="/liste_ecoles"><i className="ti-email"></i> Liste des écoles</Link></li>
            <li><Link to="/liste_eleves"><i className="ti-user"></i> Liste des élèves</Link></li>
            <li><Link to="/programmer_session"><i className="ti-layout-grid2-alt"></i> Programmer une session</Link></li>
            <li><Link to="/ajout_note"><i className="ti-view-list-alt"></i> Ajouter les notes</Link></li>
            <li><Link to="/login"><i className="ti-close"></i> Déconnexion</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
