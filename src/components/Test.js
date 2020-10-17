import React, { Component } from 'react'

export class Test extends Component {
    render() {
        return (
          <div>
            <section id="main-wrapper" className="theme-default">
              <header id="header">
                {/*logo start*/}
                <div className="brand">
                  <a href="index.html" className="logo">
                    <i className="icon-layers" />
                    <span>NEU</span>BOARD
                  </a>
                </div>
                {/*logo end*/}
                <ul className="nav navbar-nav navbar-left">
                  <li className="toggle-navigation toggle-left">
                    <button className="sidebar-toggle" id="toggle-left">
                      <i className="fa fa-bars" />
                    </button>
                  </li>
                  <li className="toggle-profile hidden-xs">
                    <button
                      type="button"
                      className="btn btn-default"
                      id="toggle-profile"
                    >
                      <i className="icon-user" />
                    </button>
                  </li>
                  <li className="hidden-xs hidden-sm">
                    <input
                      type="text"
                      className="search"
                      placeholder="Search project..."
                    />
                    <button type="submit" className="btn btn-sm btn-search">
                      <i className="fa fa-search" />
                    </button>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown profile hidden-xs">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="meta">
                        <span className="avatar">
                          <img
                            src="assets/img/profile.jpg"
                            className="img-circle"
                            alt
                          />
                        </span>
                        <span className="text">Mike Adams</span>
                        <span className="caret" />
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu animated fadeInRight"
                      role="menu"
                    >
                      <li>
                        <span className="arrow top" />
                        <h5>
                          <span>80%</span>
                          <small className="text-muted">Profile complete</small>
                        </h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar"
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
                  </li>
                  <li className="toggle-fullscreen hidden-xs">
                    <button
                      type="button"
                      className="btn btn-default expand"
                      id="toggle-fullscreen"
                    >
                      <i className="fa fa-expand" />
                    </button>
                  </li>
                  <li className="toggle-navigation toggle-right">
                    <button className="sidebar-toggle" id="toggle-right">
                      <i className="fa fa-indent" />
                    </button>
                  </li>
                </ul>
              </header>
              {/*sidebar left start*/}
              <aside className="sidebar sidebar-left">
                <div className="sidebar-profile">
                  <div className="avatar">
                    <img
                      className="img-circle profile-image"
                      src="assets/img/profile.jpg"
                      alt="profile"
                    />
                    <i className="on border-dark animated bounceIn" />
                  </div>
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
                    <ul
                      className="dropdown-menu animated fadeInRight"
                      role="menu"
                    >
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
                    <li>
                      <a href="index.html" title="Dashboard">
                        <i className="fa  fa-fw fa-tachometer" /> Dashboard
                      </a>
                    </li>
                    <li className="nav-dropdown">
                      <a href="#" title="UI Elements">
                        <i className="fa  fa-fw fa-cogs" /> UI Elements
                      </a>
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
                          <a
                            href="ui-modals-popus.html"
                            title="Modals & Popups"
                          >
                            Modals &amp; Popups
                          </a>
                        </li>
                        <li>
                          <a
                            href="ui-tabs-accordions.html"
                            title="Tabs & Accordions"
                          >
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
                          <a
                            href="ui-nestable-lists.html"
                            title=" Nestable Lists"
                          >
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
                    <li className="nav-dropdown  open active">
                      <a href="#" title="Tables">
                        <i className="fa  fa-fw fa-th-list" /> Tables
                      </a>
                      <ul className="nav-sub">
                        <li>
                          <a
                            href="tables-basic-tables.html"
                            title="Basic Tables"
                          >
                            Basic Tables
                          </a>
                        </li>
                        <li className="active">
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
                          <a
                            href="charts-sparkline.html"
                            title="Sparkline Charts"
                          >
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
                        <i className="fa  fa-fw fa-map-marker" /> Maps
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
                        <span className="pull-right badge badge-danger">
                          new
                        </span>
                      </a>
                    </li>
                    <li className="nav-dropdown">
                      <a href="#" title="Pages">
                        <i className="fa  fa-fw fa-file-text" /> Pages
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
                          <a
                            href="pages-locked-screen.html"
                            title="Locked Screen"
                          >
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
                                <i className="fa fa-fw fa-folder-open" /> Level
                                2.2
                              </a>
                              <ul className="nav-sub">
                                <li>
                                  <a href="javascript:;" title="Level 4.1">
                                    <i className="fa fa-fw fa-file" /> Level 3.1
                                  </a>
                                </li>
                                <li className="nav-dropdown">
                                  <a href="#" title="Level 4.2">
                                    <i className="fa fa-fw fa-folder-open" />{" "}
                                    Level 3.2
                                  </a>
                                  <ul className="nav-sub">
                                    <li className="nav-dropdown">
                                      <a href="#" title="Level 5.1">
                                        <i className="fa fa-fw fa-folder-open" />{" "}
                                        Level 4.1
                                      </a>
                                      <ul className="nav-sub">
                                        <li>
                                          <a
                                            href="javascript:;"
                                            title="Level 6.1"
                                          >
                                            <i className="fa fa-fw fa-file" />{" "}
                                            Level 5.1
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="javascript:;"
                                            title="Level 6.2"
                                          >
                                            <i className="fa fa-fw fa-file" />{" "}
                                            Level 5.2
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="javascript:;" title="Level 5.2">
                                        <i className="fa fa-fw fa-file" /> Level
                                        4.2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;" title="Level 5.3">
                                        <i className="fa fa-fw fa-file" /> Level
                                        4.3
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
                      <input
                        type="checkbox"
                        className="js-switch"
                        id="check2"
                      />
                    </div>
                  </div>
                </div>
              </aside>
              {/*sidebar left end*/}
              {/*main content start*/}
              <section className="main-content-wrapper">
                <div className="pageheader">
                  <h1>Data Tables</h1>
                  <div className="breadcrumb-wrapper hidden-xs">
                    <span className="label">You are here:</span>
                    <ol className="breadcrumb">
                      <li>
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li>Tables</li>
                      <li className="active">Data Tables</li>
                    </ol>
                  </div>
                </div>
                <section id="main-content" className="animated fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">Data Tables</h3>
                          <div className="actions pull-right">
                            <i className="fa fa-expand" />
                            <i className="fa fa-chevron-down" />
                            <i className="fa fa-times" />
                          </div>
                        </div>
                        <div className="panel-body">
                          <table
                            id="example"
                            className="table table-striped table-bordered"
                            cellSpacing={0}
                            width="100%"
                          >
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                              </tr>
                              <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                              </tr>
                              <tr>
                                <td>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>66</td>
                                <td>2009/01/12</td>
                                <td>$86,000</td>
                              </tr>
                              <tr>
                                <td>Cedric Kelly</td>
                                <td>Senior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>22</td>
                                <td>2012/03/29</td>
                                <td>$433,060</td>
                              </tr>
                              <tr>
                                <td>Airi Satou</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>33</td>
                                <td>2008/11/28</td>
                                <td>$162,700</td>
                              </tr>
                              <tr>
                                <td>Brielle Williamson</td>
                                <td>Integration Specialist</td>
                                <td>New York</td>
                                <td>61</td>
                                <td>2012/12/02</td>
                                <td>$372,000</td>
                              </tr>
                              <tr>
                                <td>Herrod Chandler</td>
                                <td>Sales Assistant</td>
                                <td>San Francisco</td>
                                <td>59</td>
                                <td>2012/08/06</td>
                                <td>$137,500</td>
                              </tr>
                              <tr>
                                <td>Rhona Davidson</td>
                                <td>Integration Specialist</td>
                                <td>Tokyo</td>
                                <td>55</td>
                                <td>2010/10/14</td>
                                <td>$327,900</td>
                              </tr>
                              <tr>
                                <td>Colleen Hurst</td>
                                <td>Javascript Developer</td>
                                <td>San Francisco</td>
                                <td>39</td>
                                <td>2009/09/15</td>
                                <td>$205,500</td>
                              </tr>
                              <tr>
                                <td>Sonya Frost</td>
                                <td>Software Engineer</td>
                                <td>Edinburgh</td>
                                <td>23</td>
                                <td>2008/12/13</td>
                                <td>$103,600</td>
                              </tr>
                              <tr>
                                <td>Jena Gaines</td>
                                <td>Office Manager</td>
                                <td>London</td>
                                <td>30</td>
                                <td>2008/12/19</td>
                                <td>$90,560</td>
                              </tr>
                              <tr>
                                <td>Quinn Flynn</td>
                                <td>Support Lead</td>
                                <td>Edinburgh</td>
                                <td>22</td>
                                <td>2013/03/03</td>
                                <td>$342,000</td>
                              </tr>
                              <tr>
                                <td>Charde Marshall</td>
                                <td>Regional Director</td>
                                <td>San Francisco</td>
                                <td>36</td>
                                <td>2008/10/16</td>
                                <td>$470,600</td>
                              </tr>
                              <tr>
                                <td>Haley Kennedy</td>
                                <td>Senior Marketing Designer</td>
                                <td>London</td>
                                <td>43</td>
                                <td>2012/12/18</td>
                                <td>$313,500</td>
                              </tr>
                              <tr>
                                <td>Tatyana Fitzpatrick</td>
                                <td>Regional Director</td>
                                <td>London</td>
                                <td>19</td>
                                <td>2010/03/17</td>
                                <td>$385,750</td>
                              </tr>
                              <tr>
                                <td>Michael Silva</td>
                                <td>Marketing Designer</td>
                                <td>London</td>
                                <td>66</td>
                                <td>2012/11/27</td>
                                <td>$198,500</td>
                              </tr>
                              <tr>
                                <td>Paul Byrd</td>
                                <td>Chief Financial Officer (CFO)</td>
                                <td>New York</td>
                                <td>64</td>
                                <td>2010/06/09</td>
                                <td>$725,000</td>
                              </tr>
                              <tr>
                                <td>Gloria Little</td>
                                <td>Systems Administrator</td>
                                <td>New York</td>
                                <td>59</td>
                                <td>2009/04/10</td>
                                <td>$237,500</td>
                              </tr>
                              <tr>
                                <td>Bradley Greer</td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>41</td>
                                <td>2012/10/13</td>
                                <td>$132,000</td>
                              </tr>
                              <tr>
                                <td>Dai Rios</td>
                                <td>Personnel Lead</td>
                                <td>Edinburgh</td>
                                <td>35</td>
                                <td>2012/09/26</td>
                                <td>$217,500</td>
                              </tr>
                              <tr>
                                <td>Jenette Caldwell</td>
                                <td>Development Lead</td>
                                <td>New York</td>
                                <td>30</td>
                                <td>2011/09/03</td>
                                <td>$345,000</td>
                              </tr>
                              <tr>
                                <td>Yuri Berry</td>
                                <td>Chief Marketing Officer (CMO)</td>
                                <td>New York</td>
                                <td>40</td>
                                <td>2009/06/25</td>
                                <td>$675,000</td>
                              </tr>
                              <tr>
                                <td>Caesar Vance</td>
                                <td>Pre-Sales Support</td>
                                <td>New York</td>
                                <td>21</td>
                                <td>2011/12/12</td>
                                <td>$106,450</td>
                              </tr>
                              <tr>
                                <td>Doris Wilder</td>
                                <td>Sales Assistant</td>
                                <td>Sidney</td>
                                <td>23</td>
                                <td>2010/09/20</td>
                                <td>$85,600</td>
                              </tr>
                              <tr>
                                <td>Angelica Ramos</td>
                                <td>Chief Executive Officer (CEO)</td>
                                <td>London</td>
                                <td>47</td>
                                <td>2009/10/09</td>
                                <td>$1,200,000</td>
                              </tr>
                              <tr>
                                <td>Gavin Joyce</td>
                                <td>Developer</td>
                                <td>Edinburgh</td>
                                <td>42</td>
                                <td>2010/12/22</td>
                                <td>$92,575</td>
                              </tr>
                              <tr>
                                <td>Jennifer Chang</td>
                                <td>Regional Director</td>
                                <td>Singapore</td>
                                <td>28</td>
                                <td>2010/11/14</td>
                                <td>$357,650</td>
                              </tr>
                              <tr>
                                <td>Brenden Wagner</td>
                                <td>Software Engineer</td>
                                <td>San Francisco</td>
                                <td>28</td>
                                <td>2011/06/07</td>
                                <td>$206,850</td>
                              </tr>
                              <tr>
                                <td>Fiona Green</td>
                                <td>Chief Operating Officer (COO)</td>
                                <td>San Francisco</td>
                                <td>48</td>
                                <td>2010/03/11</td>
                                <td>$850,000</td>
                              </tr>
                              <tr>
                                <td>Shou Itou</td>
                                <td>Regional Marketing</td>
                                <td>Tokyo</td>
                                <td>20</td>
                                <td>2011/08/14</td>
                                <td>$163,000</td>
                              </tr>
                              <tr>
                                <td>Michelle House</td>
                                <td>Integration Specialist</td>
                                <td>Sidney</td>
                                <td>37</td>
                                <td>2011/06/02</td>
                                <td>$95,400</td>
                              </tr>
                              <tr>
                                <td>Suki Burks</td>
                                <td>Developer</td>
                                <td>London</td>
                                <td>53</td>
                                <td>2009/10/22</td>
                                <td>$114,500</td>
                              </tr>
                              <tr>
                                <td>Prescott Bartlett</td>
                                <td>Technical Author</td>
                                <td>London</td>
                                <td>27</td>
                                <td>2011/05/07</td>
                                <td>$145,000</td>
                              </tr>
                              <tr>
                                <td>Gavin Cortez</td>
                                <td>Team Leader</td>
                                <td>San Francisco</td>
                                <td>22</td>
                                <td>2008/10/26</td>
                                <td>$235,500</td>
                              </tr>
                              <tr>
                                <td>Martena Mccray</td>
                                <td>Post-Sales support</td>
                                <td>Edinburgh</td>
                                <td>46</td>
                                <td>2011/03/09</td>
                                <td>$324,050</td>
                              </tr>
                              <tr>
                                <td>Unity Butler</td>
                                <td>Marketing Designer</td>
                                <td>San Francisco</td>
                                <td>47</td>
                                <td>2009/12/09</td>
                                <td>$85,675</td>
                              </tr>
                              <tr>
                                <td>Howard Hatfield</td>
                                <td>Office Manager</td>
                                <td>San Francisco</td>
                                <td>51</td>
                                <td>2008/12/16</td>
                                <td>$164,500</td>
                              </tr>
                              <tr>
                                <td>Hope Fuentes</td>
                                <td>Secretary</td>
                                <td>San Francisco</td>
                                <td>41</td>
                                <td>2010/02/12</td>
                                <td>$109,850</td>
                              </tr>
                              <tr>
                                <td>Vivian Harrell</td>
                                <td>Financial Controller</td>
                                <td>San Francisco</td>
                                <td>62</td>
                                <td>2009/02/14</td>
                                <td>$452,500</td>
                              </tr>
                              <tr>
                                <td>Timothy Mooney</td>
                                <td>Office Manager</td>
                                <td>London</td>
                                <td>37</td>
                                <td>2008/12/11</td>
                                <td>$136,200</td>
                              </tr>
                              <tr>
                                <td>Jackson Bradshaw</td>
                                <td>Director</td>
                                <td>New York</td>
                                <td>65</td>
                                <td>2008/09/26</td>
                                <td>$645,750</td>
                              </tr>
                              <tr>
                                <td>Olivia Liang</td>
                                <td>Support Engineer</td>
                                <td>Singapore</td>
                                <td>64</td>
                                <td>2011/02/03</td>
                                <td>$234,500</td>
                              </tr>
                              <tr>
                                <td>Bruno Nash</td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>38</td>
                                <td>2011/05/03</td>
                                <td>$163,500</td>
                              </tr>
                              <tr>
                                <td>Sakura Yamamoto</td>
                                <td>Support Engineer</td>
                                <td>Tokyo</td>
                                <td>37</td>
                                <td>2009/08/19</td>
                                <td>$139,575</td>
                              </tr>
                              <tr>
                                <td>Thor Walton</td>
                                <td>Developer</td>
                                <td>New York</td>
                                <td>61</td>
                                <td>2013/08/11</td>
                                <td>$98,540</td>
                              </tr>
                              <tr>
                                <td>Finn Camacho</td>
                                <td>Support Engineer</td>
                                <td>San Francisco</td>
                                <td>47</td>
                                <td>2009/07/07</td>
                                <td>$87,500</td>
                              </tr>
                              <tr>
                                <td>Serge Baldwin</td>
                                <td>Data Coordinator</td>
                                <td>Singapore</td>
                                <td>64</td>
                                <td>2012/04/09</td>
                                <td>$138,575</td>
                              </tr>
                              <tr>
                                <td>Zenaida Frank</td>
                                <td>Software Engineer</td>
                                <td>New York</td>
                                <td>63</td>
                                <td>2010/01/04</td>
                                <td>$125,250</td>
                              </tr>
                              <tr>
                                <td>Zorita Serrano</td>
                                <td>Software Engineer</td>
                                <td>San Francisco</td>
                                <td>56</td>
                                <td>2012/06/01</td>
                                <td>$115,000</td>
                              </tr>
                              <tr>
                                <td>Jennifer Acosta</td>
                                <td>Junior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>43</td>
                                <td>2013/02/01</td>
                                <td>$75,650</td>
                              </tr>
                              <tr>
                                <td>Cara Stevens</td>
                                <td>Sales Assistant</td>
                                <td>New York</td>
                                <td>46</td>
                                <td>2011/12/06</td>
                                <td>$145,600</td>
                              </tr>
                              <tr>
                                <td>Hermione Butler</td>
                                <td>Regional Director</td>
                                <td>London</td>
                                <td>47</td>
                                <td>2011/03/21</td>
                                <td>$356,250</td>
                              </tr>
                              <tr>
                                <td>Lael Greer</td>
                                <td>Systems Administrator</td>
                                <td>London</td>
                                <td>21</td>
                                <td>2009/02/27</td>
                                <td>$103,500</td>
                              </tr>
                              <tr>
                                <td>Jonas Alexander</td>
                                <td>Developer</td>
                                <td>San Francisco</td>
                                <td>30</td>
                                <td>2010/07/14</td>
                                <td>$86,500</td>
                              </tr>
                              <tr>
                                <td>Shad Decker</td>
                                <td>Regional Director</td>
                                <td>Edinburgh</td>
                                <td>51</td>
                                <td>2008/11/13</td>
                                <td>$183,000</td>
                              </tr>
                              <tr>
                                <td>Michael Bruce</td>
                                <td>Javascript Developer</td>
                                <td>Singapore</td>
                                <td>29</td>
                                <td>2011/06/27</td>
                                <td>$183,000</td>
                              </tr>
                              <tr>
                                <td>Donna Snider</td>
                                <td>Customer Support</td>
                                <td>New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>$112,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              {/*main content end*/}
            </section>
            {/*sidebar right start*/}
            <aside id="sidebar-right">
              <h4 className="sidebar-title">contact List</h4>
              <div id="contact-list-wrapper">
                <div className="heading">
                  <ul>
                    <li className="new-contact">
                      <a href="javascript:void(0)">
                        <i className="fa fa-plus" />
                      </a>
                    </li>
                    <li>
                      <input
                        type="text"
                        className="search"
                        placeholder="Search"
                      />
                      <button type="submit" className="btn btn-sm btn-search">
                        <i className="fa fa-search" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="contact-list">
                  <ul>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar3.png"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Ashley Bell </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Sarasota, FL
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar1.png"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Brian Johnson </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> San Francisco, CA
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar2.png"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Chris Jones </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Brooklyn, NY
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar4.jpg"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Erica Hill </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Palo Alto, Ca
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar5.png"
                              className="img-circle"
                              alt
                            />
                            <i className="away animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Greg Smith </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> London, UK
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar6.png"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Jason Kendall</div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> New York, NY{" "}
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar7.png"
                              className="img-circle"
                              alt
                            />
                            <i className="on animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Kristen Davis </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Greenville, SC
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar8.png"
                              className="img-circle off"
                              alt
                            />
                            <i className="off animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Michael Shepard </div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Vancouver, BC
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <span className="avatar">
                            <img
                              src="assets/img/avatar9.png"
                              className="img-circle off"
                              alt
                            />
                            <i className="off animated bounceIn" />
                          </span>
                        </div>
                        <div className="col-md-9">
                          <div className="name">Paul Allen</div>
                          <small className="location text-muted">
                            <i className="icon-pointer" /> Savannah, GA
                          </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="contact-user">
                  <div className="chat-user active">
                    <span>
                      <i className="icon-bubble" />
                    </span>
                  </div>
                  <div className="email-user">
                    <span>
                      <i className="icon-envelope-open" />
                    </span>
                  </div>
                  <div className="call-user">
                    <span>
                      <i className="icon-call-out" />
                    </span>
                  </div>
                </div>
              </div>
            </aside>
            {/*sidebar right end*/}
            {/*Config demo*/}
            <div id="config" className="config hidden-xs">
              <h4>
                Settings
                <a href="javascript:void(0)" className="config-link closed">
                  <i className="icon-settings" />
                </a>
              </h4>
              <div className="config-swatch-wrap">
                <div className="row">
                  <div className="col-xs-6">
                    <ul className="options">
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-default"
                        >
                          <span className="header bg-white" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-dark"
                        >
                          <span className="header bg-dark" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-blue"
                        >
                          <span className="header bg-info" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-blue-full"
                        >
                          <span className="header bg-info" />
                          <span className="header bg-info" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-grey"
                        >
                          <span className="header bg-grey" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-grey-full"
                        >
                          <span className="header bg-grey" />
                          <span className="header bg-grey" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6">
                    <ul className="options">
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-dark-full"
                        >
                          <span className="header bg-dark" />
                          <span className="header bg-dark" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-green"
                        >
                          <span className="header bg-green" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-green-full"
                        >
                          <span className="header bg-green" />
                          <span className="header bg-green" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-red"
                        >
                          <span className="header bg-red" />
                          <span className="header bg-white" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-red-full"
                        >
                          <span className="header bg-red" />
                          <span className="header bg-red" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                      <li>
                        <div
                          className="theme-style-wrapper"
                          data-theme="theme-dark-blue-full"
                        >
                          <span className="header bg-dark-blue" />
                          <span className="header bg-dark-blue" />
                          <span className="nav bg-dark" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Test
