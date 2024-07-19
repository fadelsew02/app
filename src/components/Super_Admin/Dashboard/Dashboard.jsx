import React, { useEffect } from 'react';


const Dashboard = () => {


  return (
    <div className="content-wrap">
        <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 p-r-0 title-margin-right">
                        <div className="page-header">
                            <div className="page-title">
                                <h1>Bienvue, <span>Admin</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-l-0 title-margin-left">
                        <div className="page-header">
                            <div className="page-title">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Examen App</a></li>
                                    <li className="breadcrumb-item active">Acceuil</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="main-content">
                    {/* <!-- La partie des trois examens --> */}
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="stat-widget-one">
                                    <div className="stat-icon dib">
                                        <p className="d-flex align-items-center examen examenCep">
                                            <span>
                                                C
                                            </span>
                                        </p>
                                    </div>
                                    <div className="stat-content dib">
                                        <div className="stat-text">CEP</div>
                                        <div className="stat-digit"><span>1,012</span> écoles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="stat-widget-one">
                                    <div className="stat-icon dib">
                                        <p className="d-flex align-items-center examen examenBepc">
                                            <span>
                                                BE
                                            </span>
                                        </p>
                                    </div>
                                    <div className="stat-content dib">
                                        <div className="stat-text">BEPC</div>
                                        <div className="stat-digit">961 écoles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="stat-widget-one">
                                    <div className="stat-icon dib">
                                        <p className="d-flex align-items-center examen examenBac">
                                            <span>
                                                BA
                                            </span>
                                        </p>
                                    </div>
                                    <div className="stat-content dib">
                                        <div className="stat-text">BAC</div>
                                        <div className="stat-digit">770 écoles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="stat-widget-one">
                                    <div className="stat-icon dib"><i className="ti-link color-danger border-danger"></i></div>
                                    <div className="stat-content dib">
                                        <div className="stat-text">Total</div>
                                        <div className="stat-digit">2,781 écoles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-title">
                                    <h4>Notice Board </h4>

                                </div>
                                <div className="recent-comment m-t-15">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/1.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-primary">john doe</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <p className="comment-date">10 min ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/2.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-success">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <p className="comment-date">1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/3.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-danger">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <div className="comment-date">Yesterday</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/1.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-primary">john doe</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <p className="comment-date">10 min ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/2.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-success">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <p className="comment-date">1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="media no-border">
                                        <div className="media-left">
                                            <a href="#"><img className="media-object" src="images/avatar/3.jpg"
                                                    alt="..."/></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading color-info">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                            <div className="comment-date">Yesterday</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-title">
                                    <h4>Timeline</h4>

                                </div>
                                <div className="card-body">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-badge primary"><i className="fa fa-smile-o"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h5 className="timeline-title">School promote video sharing</h5>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>10 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge warning"><i className="fa fa-sun-o"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h5 className="timeline-title">Ready our school website and online
                                                        service</h5>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>20 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge danger"><i className="fa fa-times-circle-o"></i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h5 className="timeline-title">Routine pubish our website form
                                                        10/03/2017 </h5>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>30 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge success"><i className="fa fa-check-circle-o"></i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h5 className="timeline-title">Principle quotation publish our website
                                                    </h5>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>15 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge warning"><i className="fa fa-sun-o"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h5 className="timeline-title">Class schedule publish our website</h5>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>20 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;

