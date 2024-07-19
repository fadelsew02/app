import React, { useEffect }from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <Link to="/" style={{ textDecoration: 'none'}} className="logo d-flex align-items-center me-auto">
                    <img src="assets/img/logo.png" alt="logo" />
                    <h1 className="sitename">ExamManager</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" className="active" style={{ textDecoration: 'none'}}>Accueil</Link></li>
                        <li><Link to="/#about" style={{ textDecoration: 'none'}}>À propos</Link></li>
                        <li><Link to="/#features" style={{ textDecoration: 'none'}}>Fonctionnalités</Link></li>
                        <li><Link to="/#services" style={{ textDecoration: 'none'}}>Services</Link></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
 
                <Link className="btn-getstarted" to="/login" style={{ textDecoration: 'none'}}>Se connecter</Link>

            </div>
        </header>
    );
}

export default Header;
