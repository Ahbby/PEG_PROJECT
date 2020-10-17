import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Sidebar extends Component {
  render() {
    return (
        <aside className="sidebar sidebar-left">
          <div className="sidebar-profile">
            {/* <div className="avatar">
              <img
                className="img-circle profile-image"
                src="../../public/assets/img/profile.jpg"
                alt="profile"
              />
              <i className="on border-dark animated bounceIn" />
            </div> */}
            <div className="profile-body dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <h4>
                  Mike Adams <span className="caret" />
                </h4>
              </a>
              <small className="title">Front-end Developer</small>
              <ul className="dropdown-menu animated fadeInRight" role="menu">
                <li className="profile-progress">
                  <h5>
                    <span>80%</span>
                    <small>Profile complete</small>
                  </h5>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-primary"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li className="divider" />
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon">
                      <i className="fa fa-user" />
                    </span>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon">
                      <i className="fa fa-envelope" />
                    </span>
                    Messages
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon">
                      <i className="fa fa-cog" />
                    </span>
                    Settings
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon">
                      <i className="fa fa-sign-out" />
                    </span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <h5 className="sidebar-header">Navigation</h5>
            <ul className="nav nav-pills nav-stacked">
              <li className="">
                <Link to="/main/dashboard" title="Dashboard">
                  <i className="fa  fa-fw fa-tachometer" /> Dashboard
                </Link>
              </li>
              <li className="nav-dropdown">
                <Link to="/main/table" title="UI Elements">
                  <i className="fa  fa-fw fa-cogs" /> UI Elements
                </Link>
                <ul className="nav-sub">
                  <li>
                    <a href="ui-buttons.html" title="Buttons">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a
                      href="ui-sliders-progress.html"
                      title="Sliders & Progress"
                    >
                      Sliders &amp; Progress
                    </a>
                  </li>
                  <li>
                    <a href="ui-modals-popus.html" title="Modals & Popups">
                      Modals &amp; Popups
                    </a>
                  </li>
                  <li>
                    <a href="ui-tabs-accordions.html" title="Tabs & Accordions">
                      Tabs &amp; Accordions
                    </a>
                  </li>
                  <li>
                    <a
                      href="ui-alerts-notifications.html"
                      title="Alerts & Notifications"
                    >
                      Alerts &amp; Notifications
                    </a>
                  </li>
                  <li>
                    <a href="ui-nestable-lists.html" title=" Nestable Lists">
                      Nestable Lists
                    </a>
                  </li>
                  <li>
                    <a href="ui-panels.html" title="Panels">
                      Panels
                    </a>
                  </li>
                  <li>
                    <a href="ui-icons.html" title="Icons">
                      Icons
                    </a>
                  </li>
                  <li>
                    <a href="ui-typography.html" title="Typography">
                      Typography
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Forms">
                  <i className="fa  fa-fw fa-edit" /> Forms
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="forms-components.html" title="Components">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="forms-validation.html" title="Validation">
                      Validation
                    </a>
                  </li>
                  <li>
                    <a href="forms-mask.html" title="Mask">
                      Mask
                    </a>
                  </li>
                  <li>
                    <a href="forms-wizard.html" title="Wizard">
                      Wizard
                    </a>
                  </li>
                  <li>
                    <a
                      href="forms-multiple-file.html"
                      title="Multiple File Upload"
                    >
                      Multiple File Upload
                    </a>
                  </li>
                  <li>
                    <a href="forms-wysiwyg.html" title="WYSIWYG Editor">
                      WYSIWYG Editor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Tables">
                  <i className="fa  fa-fw fa-th-list" /> Tables
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="tables-basic-tables.html" title="Basic Tables">
                      Basic Tables
                    </a>
                  </li>
                  <li>
                    <a href="tables-data-tables.html" title="Data Tables">
                      Data Tables
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Charts">
                  <i className="fa  fa-fw fa-bar-chart-o" /> Charts
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="charts-chartjs.html" title="Chartjs">
                      Chartjs
                    </a>
                  </li>
                  <li>
                    <a href="charts-c3.html" title="C3 Charts">
                      C3 Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-morris.html" title="Morris.js Charts">
                      Morris.js Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-sparkline.html" title="Sparkline Charts">
                      Sparkline Charts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Mail">
                  <i className="fa fa-fw fa-envelope-o" /> Mail
                  <span className="label label-primary label-circle pull-right">
                    8
                  </span>
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="mail-inbox.html" title="Mail Inbox">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a href="mail-compose.html" title="Mail Compose">
                      Compose Mail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Maps">
                  <i className="fa fa-fw fa-map-marker" /> Maps
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="maps-google.html" title="Google Maps">
                      Google Maps
                    </a>
                  </li>
                  <li>
                    <a href="maps-vector.html" title="Vector Maps">
                      Vector Maps
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="../Frontend/" title="Frontend">
                  <i className="fa  fa-fw fa-desktop" /> Front-end Theme
                  <span className="pull-right badge badge-danger">new</span>
                </a>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Pages">
                  <i className="fa fa-fw fa-file-text" /> Pages
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="pages-blank-page.html" title="Blank Page">
                      Blank Page
                    </a>
                  </li>
                  <li>
                    <a href="pages-profile.html" title="Profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="pages-sign-in.html" title="Sign In">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="pages-sign-up.html" title="Sign Up">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="pages-locked-screen.html" title="Locked Screen">
                      Locked Screen
                    </a>
                  </li>
                  <li>
                    <a href="pages-404.html" title="404 Page">
                      404 Page
                    </a>
                  </li>
                  <li>
                    <a href="pages-500.html" title="500 Page">
                      500 Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-dropdown">
                <a href="#" title="Menu Levels">
                  <i className="fa  fa-fw fa-folder-open" /> Menu Levels
                </a>
                <ul className="nav-sub">
                  <li>
                    <a href="javascript:;" title="Level 2.1">
                      <i className="fa fa-fw fa-file" /> Level 1.1
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" title="Level 2.2">
                      <i className="fa fa-fw fa-file" /> Level 1.2
                    </a>
                  </li>
                  <li className="nav-dropdown">
                    <a href="#" title="Level 2.3">
                      <i className="fa fa-fw fa-folder-open" /> Level 1.3
                    </a>
                    <ul className="nav-sub">
                      <li>
                        <a href="javascript:;" title="Level 3.1">
                          <i className="fa fa-fw fa-file" /> Level 2.1
                        </a>
                      </li>
                      <li className="nav-dropdown">
                        <a href="#" title="Level 3.2">
                          <i className="fa fa-fw fa-folder-open" /> Level 2.2
                        </a>
                        <ul className="nav-sub">
                          <li>
                            <a href="javascript:;" title="Level 4.1">
                              <i className="fa fa-fw fa-file" /> Level 3.1
                            </a>
                          </li>
                          <li className="nav-dropdown">
                            <a href="#" title="Level 4.2">
                              <i className="fa fa-fw fa-folder-open" /> Level
                              3.2
                            </a>
                            <ul className="nav-sub">
                              <li className="nav-dropdown">
                                <a href="#" title="Level 5.1">
                                  <i className="fa fa-fw fa-folder-open" />{" "}
                                  Level 4.1
                                </a>
                                <ul className="nav-sub">
                                  <li>
                                    <a href="javascript:;" title="Level 6.1">
                                      <i className="fa fa-fw fa-file" /> Level
                                      5.1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;" title="Level 6.2">
                                      <i className="fa fa-fw fa-file" /> Level
                                      5.2
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="javascript:;" title="Level 5.2">
                                  <i className="fa fa-fw fa-file" /> Level 4.2
                                </a>
                              </li>
                              <li>
                                <a href="javascript:;" title="Level 5.3">
                                  <i className="fa fa-fw fa-file" /> Level 4.3
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="animations.html" title="CSS Animations">
                  <i className="fa  fa-fw fa-magic" /> CSS Animations
                </a>
              </li>
            </ul>
          </nav>
          <h5 className="sidebar-header">Account Settings</h5>
          <div className="setting-list">
            <div className="row">
              <div className="col-xs-8">
                <label htmlFor="check1" className="control-label">
                  Share your status
                </label>
              </div>
              <div className="col-xs-4">
                <input
                  type="checkbox"
                  className="js-switch"
                  defaultChecked
                  id="check1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <label htmlFor="check2" className="control-label">
                  Push Notifications
                </label>
              </div>
              <div className="col-xs-4">
                <input type="checkbox" className="js-switch" id="check2" />
              </div>
            </div>
          </div>
        </aside>
    );
  }
}

export default Sidebar
