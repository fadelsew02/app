import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="float-left">
              <div className="hamburger sidebar-toggle">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="float-right">
              <div className="dropdown dib">
                <div className="header-icon" onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}>
                  <i className="ti-bell"></i>
                  {notificationDropdownOpen && (
                    <div className="drop-down dropdown-menu dropdown-menu-right">
                      <div className="dropdown-content-heading">
                        <span className="text-left">Recent Notifications</span>
                      </div>
                      <div className="dropdown-content-body">
                        <ul>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/3.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Mr. John</div>
                                <div className="notification-text">5 members joined today </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/3.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Mariam</div>
                                <div className="notification-text">likes a photo of you</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/3.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Tasnim</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/3.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Mr. John</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li className="text-center">
                            <Link to="#" className="more-link">See All</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="dropdown dib">
                <div className="header-icon" onClick={() => setMessageDropdownOpen(!messageDropdownOpen)}>
                  <i className="ti-email"></i>
                  {messageDropdownOpen && (
                    <div className="drop-down dropdown-menu dropdown-menu-right">
                      <div className="dropdown-content-heading">
                        <span className="text-left">2 New Messages</span>
                        <Link to="email.html">
                          <i className="ti-pencil-alt pull-right"></i>
                        </Link>
                      </div>
                      <div className="dropdown-content-body">
                        <ul>
                          <li className="notification-unread">
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/1.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Michael Qin</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li className="notification-unread">
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/2.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Mr. John</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/3.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Michael Qin</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img className="pull-left m-r-10 avatar-img" src="images/avatar/2.jpg" alt="" />
                              <div className="notification-content">
                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                <div className="notification-heading">Mr. John</div>
                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                              </div>
                            </Link>
                          </li>
                          <li className="text-center">
                            <Link to="#" className="more-link">See All</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="dropdown dib">
                <div className="header-icon" onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}>
                  <span className="user-avatar">John
                    <i className="ti-angle-down f-s-10"></i>
                  </span>
                  {profileDropdownOpen && (
                    <div className="drop-down dropdown-profile dropdown-menu dropdown-menu-right">
                      <div className="dropdown-content-body">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="ti-user"></i>
                              <span>Profile</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-email"></i>
                              <span>Inbox</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-settings"></i>
                              <span>Setting</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-lock"></i>
                              <span>Lock Screen</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-power-off"></i>
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
