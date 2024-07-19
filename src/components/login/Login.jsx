import React, { useState, useRef } from 'react'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../style.css';
import '../helper.css';
import '../sweetalert.css';


const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6jdyjso', 'template_zf1zoph', form.current, 'AGKx2agxzEol7OyAt')
            .then(
                () => {
                    Swal.fire({
                        title: 'Inscription réussie!',
                        text: 'Vos informations ont été transmises à l\'administrateur. Vous recevrez un email contenant vos informations de connexion.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                },
                (error) => {
                    Swal.fire({
                        title: 'Erreur',
                        text: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        sendEmail(e);
    };


    return (
        <div className="unix-login">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="login-content">

                            <div className="login-form">
                                <h4>ExamApp - Se Connecter</h4>
                                <form>
                                    <div className="form-group">
                                        <label>Adresse Email</label>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Mot de passe</label>
                                        <input type="password" className="form-control" placeholder="Mot de passe" />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Se souvenir de moi
                                        </label>
                                        <label className="pull-right">
                                            <a href="#">Mot de passe oublié ?</a>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Se connecter</button>

                                    <div className="register-link m-t-15 text-center">
                                        {/* <p><button style={{ fontSize: '12px'}} type="button" className='btn btn-secondary btn-flat' onClick={handleOpenModal}> Vous n'avez pas de compte ?  Faites-vous enregistrer </button></p> */}
                                        <button type="button" style={{ fontSize: '12px' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Vous n'avez pas de compte ?  Faites-vous enregistrer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" style={{paddingBlockStart: '80px', marginBlockStart: '10px' }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" style={{ fontWeight: 'bold' }} id="exampleModalLabel">Vos Informations pour l'enregistrement</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                    <div className="basic-form">
                                        <form ref={form}>
                                        <div className="form-group">
                                                <label>Nom de l'école</label>
                                                <input style={{fontSize: '13px'}} type="email" className="form-control" placeholder="Renseignez votre email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Adresse Email</label>
                                                <input style={{fontSize: '13px'}} type="email" className="form-control" placeholder="Renseignez votre email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Adresse Physique</label>
                                                <input style={{fontSize: '13px'}} type="text" className="form-control" placeholder="Renseignez votre adresse physique "/>
                                            </div>
                                            <div className="form-group" > 
                                                <label>Contact</label>
                                                <input style={{fontSize: '13px'}} type="tel" className="form-control" placeholder="Renseignez votre contact téléphonique"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Sigle</label>
                                                <input style={{fontSize: '13px'}} type="text" className="form-control" placeholder="Renseignez le sigle de votre école"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Logo</label>
                                                <input style={{fontSize: '13px'}} type="file" className="form-control" placeholder="Renseignez le logo de votre école"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Capacité</label>
                                                <input style={{fontSize: '13px'}} type="text" className="form-control" placeholder="Estimez la capacité de votre école en termes d'élèves "/>
                                            </div>
                                            {/* <button type="submit" className="btn btn-default">Submit</button> */}
                                        </form>
                                    </div>
                            
                         
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
