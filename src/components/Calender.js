import React, { Component } from "react"; 

export class Calender extends Component {
  render() {
    return (
      <div>
        {/* <body data-layout="horizontal" data-topbar="colored"> */}
        {/* Begin page */}
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box">
                  <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src="assets/images/logo-sm.png" alt height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src="assets/images/logo-dark.png" alt height={20} />
                    </span>
                  </a>
                  <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                      <img src="assets/images/logo-sm.png" alt height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src="assets/images/logo-light.png" alt height={20} />
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
                >
                  <i className="fa fa-fw fa-bars" />
                </button>
                {/* App Search*/}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="uil-search" />
                  </div>
                </form>
              </div>
              <div className="d-flex">
                <div className="dropdown d-inline-block d-lg-none ml-2">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    id="page-header-search-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-search" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                              <i className="mdi mdi-magnify" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown d-inline-block language-switch">
                  <button
                    type="button"
                    className="btn header-item waves-effect"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/flags/us.jpg"
                      alt="Header Language"
                      height={16}
                    />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/spain.jpg"
                        alt="user-image"
                        className="mr-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Spanish</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/germany.jpg"
                        alt="user-image"
                        className="mr-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">German</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/italy.jpg"
                        alt="user-image"
                        className="mr-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Italian</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/russia.jpg"
                        alt="user-image"
                        className="mr-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Russian</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ml-1">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-apps" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <div className="px-lg-2">
                      <div className="row no-gutters">
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/github.png"
                              alt="Github"
                            />
                            <span>GitHub</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/bitbucket.png"
                              alt="bitbucket"
                            />
                            <span>Bitbucket</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/dribbble.png"
                              alt="dribbble"
                            />
                            <span>Dribbble</span>
                          </a>
                        </div>
                      </div>
                      <div className="row no-gutters">
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/dropbox.png"
                              alt="dropbox"
                            />
                            <span>Dropbox</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/mail_chimp.png"
                              alt="mail_chimp"
                            />
                            <span>Mail Chimp</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/slack.png"
                              alt="slack"
                            />
                            <span>Slack</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ml-1">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    data-toggle="fullscreen"
                  >
                    <i className="uil-minus-path" />
                  </button>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    id="page-header-notifications-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-bell" />
                    <span className="badge badge-danger badge-pill">3</span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="m-0 font-size-16"> Notifications </h5>
                        </div>
                        <div className="col-auto">
                          <a href="#!" className="small">
                            {" "}
                            Mark all as read
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar style={{ maxHeight: 230 }}>
                      <a href className="text-reset notification-item">
                        <div className="media">
                          <div className="avatar-xs mr-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                              <i className="uil-shopping-basket" />
                            </span>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                If several languages coalesce the grammar
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 3 min
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href className="text-reset notification-item">
                        <div className="media">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="mr-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">James Lemire</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                It will seem like simplified English.
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 1 hours
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href className="text-reset notification-item">
                        <div className="media">
                          <div className="avatar-xs mr-3">
                            <span className="avatar-title bg-success rounded-circle font-size-16">
                              <i className="uil-truck" />
                            </span>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Your item is shipped</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                If several languages coalesce the grammar
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 3 min
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href className="text-reset notification-item">
                        <div className="media">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="mr-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Salena Layfield</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                As a skeptical Cambridge friend of mine
                                occidental.
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 1 hours
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-2 border-top">
                      <a
                        className="btn btn-sm btn-link font-size-14 btn-block text-center"
                        href="javascript:void(0)"
                      >
                        <i className="uil-arrow-circle-right mr-1" /> View
                        More..
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-4.jpg"
                      alt="Header Avatar"
                    />
                    <span className="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">
                      Marcus
                    </span>
                    <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    {/* item*/}
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-user-circle font-size-18 align-middle text-muted mr-1" />{" "}
                      <span className="align-middle">View Profile</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-wallet font-size-18 align-middle mr-1 text-muted" />{" "}
                      <span className="align-middle">My Wallet</span>
                    </a>
                    <a className="dropdown-item d-block" href="#">
                      <i className="uil uil-cog font-size-18 align-middle mr-1 text-muted" />{" "}
                      <span className="align-middle">Settings</span>{" "}
                      <span className="badge badge-soft-success badge-pill mt-1 ml-2">
                        03
                      </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-lock-alt font-size-18 align-middle mr-1 text-muted" />{" "}
                      <span className="align-middle">Lock screen</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-sign-out-alt font-size-18 align-middle mr-1 text-muted" />{" "}
                      <span className="align-middle">Sign out</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item noti-icon right-bar-toggle waves-effect"
                  >
                    <i className="uil-cog" />
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* ========== Left Sidebar Start ========== */}
          <div className="vertical-menu">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt height={20} />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt height={20} />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
            <div data-simplebar className="sidebar-menu-scroll">
              {/*- Sidemenu */}
              <div id="sidebar-menu">
                {/* Left Menu Start */}
                <ul className="metismenu list-unstyled" id="side-menu">
                  <li className="menu-title">Menu</li>
                  <li>
                    <a href="index.html">
                      <i className="uil-home-alt" />
                      <span className="badge badge-pill badge-primary float-right">
                        01
                      </span>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-window-section" />
                      <span>Layouts</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="layouts-horizontal.html">Horizontal</a>
                      </li>
                      <li>
                        <a href="layouts-dark-sidebar.html">Dark Sidebar</a>
                      </li>
                      <li>
                        <a href="layouts-compact-sidebar.html">
                          Compact Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="layouts-icon-sidebar.html">Icon Sidebar</a>
                      </li>
                      <li>
                        <a href="layouts-boxed.html">Boxed Width</a>
                      </li>
                      <li>
                        <a href="layouts-preloader.html">Preloader</a>
                      </li>
                      <li>
                        <a href="layouts-colored-sidebar.html">
                          Colored Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">Apps</li>
                  <li>
                    <a href="calendar.html" className="waves-effect">
                      <i className="uil-calender" />
                      <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html" className=" waves-effect">
                      <i className="uil-comments-alt" />
                      <span className="badge badge-pill badge-warning float-right">
                        New
                      </span>
                      <span>Chat</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-store" />
                      <span>Ecommerce</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="ecommerce-products.html">Products</a>
                      </li>
                      <li>
                        <a href="ecommerce-product-detail.html">
                          Product Detail
                        </a>
                      </li>
                      <li>
                        <a href="ecommerce-orders.html">Orders</a>
                      </li>
                      <li>
                        <a href="ecommerce-customers.html">Customers</a>
                      </li>
                      <li>
                        <a href="ecommerce-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="ecommerce-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="ecommerce-shops.html">Shops</a>
                      </li>
                      <li>
                        <a href="ecommerce-add-product.html">Add Product</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-envelope" />
                      <span>Email</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="email-inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="email-read.html">Read Email</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-invoice" />
                      <span>Invoices</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="invoices-list.html">Invoice List</a>
                      </li>
                      <li>
                        <a href="invoices-detail.html">Invoice Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-book-alt" />
                      <span>Contacts</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="contacts-grid.html">User Grid</a>
                      </li>
                      <li>
                        <a href="contacts-list.html">User List</a>
                      </li>
                      <li>
                        <a href="contacts-profile.html">Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">Pages</li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-user-circle" />
                      <span>Authentication</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="auth-login.html">Login</a>
                      </li>
                      <li>
                        <a href="auth-register.html">Register</a>
                      </li>
                      <li>
                        <a href="auth-recoverpw.html">Recover Password</a>
                      </li>
                      <li>
                        <a href="auth-lock-screen.html">Lock Screen</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-file-alt" />
                      <span>Utility</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="pages-starter.html">Starter Page</a>
                      </li>
                      <li>
                        <a href="pages-maintenance.html">Maintenance</a>
                      </li>
                      <li>
                        <a href="pages-comingsoon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="pages-timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="pages-faqs.html">FAQs</a>
                      </li>
                      <li>
                        <a href="pages-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="pages-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="pages-500.html">Error 500</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">Components</li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-flask" />
                      <span>UI Elements</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="ui-alerts.html">Alerts</a>
                      </li>
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-cards.html">Cards</a>
                      </li>
                      <li>
                        <a href="ui-carousel.html">Carousel</a>
                      </li>
                      <li>
                        <a href="ui-dropdowns.html">Dropdowns</a>
                      </li>
                      <li>
                        <a href="ui-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="ui-images.html">Images</a>
                      </li>
                      <li>
                        <a href="ui-lightbox.html">Lightbox</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-rangeslider.html">Range Slider</a>
                      </li>
                      <li>
                        <a href="ui-session-timeout.html">Session Timeout</a>
                      </li>
                      <li>
                        <a href="ui-progressbars.html">Progress Bars</a>
                      </li>
                      <li>
                        <a href="ui-sweet-alert.html">Sweet-Alert</a>
                      </li>
                      <li>
                        <a href="ui-tabs-accordions.html">
                          Tabs &amp; Accordions
                        </a>
                      </li>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-video.html">Video</a>
                      </li>
                      <li>
                        <a href="ui-general.html">General</a>
                      </li>
                      <li>
                        <a href="ui-colors.html">Colors</a>
                      </li>
                      <li>
                        <a href="ui-rating.html">Rating</a>
                      </li>
                      <li>
                        <a href="ui-notifications.html">Notifications</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript: void(0);" className="waves-effect">
                      <i className="uil-shutter-alt" />
                      <span className="badge badge-pill badge-info float-right">
                        6
                      </span>
                      <span>Forms</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="form-elements.html">Basic Elements</a>
                      </li>
                      <li>
                        <a href="form-validation.html">Validation</a>
                      </li>
                      <li>
                        <a href="form-advanced.html">Advanced Plugins</a>
                      </li>
                      <li>
                        <a href="form-editors.html">Editors</a>
                      </li>
                      <li>
                        <a href="form-uploads.html">File Upload</a>
                      </li>
                      <li>
                        <a href="form-xeditable.html">Xeditable</a>
                      </li>
                      <li>
                        <a href="form-repeater.html">Repeater</a>
                      </li>
                      <li>
                        <a href="form-wizard.html">Wizard</a>
                      </li>
                      <li>
                        <a href="form-mask.html">Mask</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-list-ul" />
                      <span>Tables</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="tables-basic.html">Bootstrap Basic</a>
                      </li>
                      <li>
                        <a href="tables-datatable.html">Datatables</a>
                      </li>
                      <li>
                        <a href="tables-responsive.html">Responsive</a>
                      </li>
                      <li>
                        <a href="tables-editable.html">Editable</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-chart" />
                      <span>Charts</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="charts-apex.html">Apex</a>
                      </li>
                      <li>
                        <a href="charts-chartjs.html">Chartjs</a>
                      </li>
                      <li>
                        <a href="charts-flot.html">Flot</a>
                      </li>
                      <li>
                        <a href="charts-knob.html">Jquery Knob</a>
                      </li>
                      <li>
                        <a href="charts-sparkline.html">Sparkline</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-streering" />
                      <span>Icons</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="icons-unicons.html">Unicons</a>
                      </li>
                      <li>
                        <a href="icons-boxicons.html">Boxicons</a>
                      </li>
                      <li>
                        <a href="icons-materialdesign.html">Material Design</a>
                      </li>
                      <li>
                        <a href="icons-dripicons.html">Dripicons</a>
                      </li>
                      <li>
                        <a href="icons-fontawesome.html">Font Awesome</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-location-point" />
                      <span>Maps</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <a href="maps-google.html">Google</a>
                      </li>
                      <li>
                        <a href="maps-vector.html">Vector</a>
                      </li>
                      <li>
                        <a href="maps-leaflet.html">Leaflet</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      className="has-arrow waves-effect"
                    >
                      <i className="uil-share-alt" />
                      <span>Multi Level</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="true">
                      <li>
                        <a href="javascript: void(0);">Level 1.1</a>
                      </li>
                      <li>
                        <a href="javascript: void(0);" className="has-arrow">
                          Level 1.2
                        </a>
                        <ul className="sub-menu" aria-expanded="true">
                          <li>
                            <a href="javascript: void(0);">Level 2.1</a>
                          </li>
                          <li>
                            <a href="javascript: void(0);">Level 2.2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Sidebar */}
            </div>
          </div>
          {/* Left Sidebar End */}
          {/* ============================================================== */}
          {/* Start right Content here */}
          {/* ============================================================== */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">Calendar</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Apps</a>
                          </li>
                          <li className="breadcrumb-item active">Calendar</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="card">
                          <div className="card-body">
                            <button
                              className="btn font-16 btn-primary btn-block"
                              id="btn-new-event"
                            >
                              <i className="mdi mdi-plus-circle-outline" />{" "}
                              Create New Event
                            </button>
                            <div className="row justify-content-center mt-5">
                              <img
                                src="assets/images/coming-soon-img.png"
                                alt
                                className="img-fluid d-block"
                              />
                            </div>
                            <div id="external-events" className="m-t-20">
                              <br />
                              <p className="text-muted">
                                Drag and drop your event or click in the
                                calendar
                              </p>
                              <div
                                className="external-event fc-event bg-success"
                                data-class="bg-success"
                              >
                                <i className="mdi mdi-checkbox-blank-circle font-size-11 mr-2" />
                                New Event Planning
                              </div>
                              <div
                                className="external-event fc-event bg-info"
                                data-class="bg-info"
                              >
                                <i className="mdi mdi-checkbox-blank-circle font-size-11 mr-2" />
                                Meeting
                              </div>
                              <div
                                className="external-event fc-event bg-warning"
                                data-class="bg-warning"
                              >
                                <i className="mdi mdi-checkbox-blank-circle font-size-11 mr-2" />
                                Generating Reports
                              </div>
                              <div
                                className="external-event fc-event bg-danger"
                                data-class="bg-danger"
                              >
                                <i className="mdi mdi-checkbox-blank-circle font-size-11 mr-2" />
                                Create New theme
                              </div>
                            </div>
                            <ol className="activity-feed mb-0 pl-2 mt-4 ml-1">
                              <li className="feed-item">
                                <p className="mt-0 mb-0">
                                  Andrei Coman magna sed porta finibus, risus
                                  posted a new article: Forget UX Rowland
                                </p>
                              </li>
                              <li className="feed-item">
                                <p className="mt-0 mb-0">
                                  Zack Wetass, sed porta finibus, risus Chris
                                  Wallace Commented Developer Moreno
                                </p>
                              </li>
                              <li className="feed-item">
                                <p className="mt-0 mb-0">
                                  Zack Wetass, Chris combined Commented UX
                                  Murphy
                                </p>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col*/}
                      <div className="col-lg-9">
                        <div className="card">
                          <div className="card-body">
                            <div id="calendar" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    <div style={{ clear: "both" }} />
                    {/* Add New Event MODAL */}
                    <div className="modal fade" id="event-modal" tabIndex={-1}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header py-3 px-4 border-bottom-0 d-block">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              ×
                            </button>
                            <h5 className="modal-title" id="modal-title">
                              Event
                            </h5>
                          </div>
                          <div className="modal-body p-4">
                            <form
                              className="needs-validation"
                              name="event-form"
                              id="form-event"
                              noValidate
                            >
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Event Name
                                    </label>
                                    <input
                                      className="form-control"
                                      placeholder="Insert Event Name"
                                      type="text"
                                      name="title"
                                      id="event-title"
                                      required
                                      defaultValue
                                    />
                                    <div className="invalid-feedback">
                                      Please provide a valid event name
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Category
                                    </label>
                                    <select
                                      className="form-control custom-select"
                                      name="category"
                                      id="event-category"
                                      required
                                    >
                                      <option value="bg-danger" selected>
                                        Danger
                                      </option>
                                      <option value="bg-success">
                                        Success
                                      </option>
                                      <option value="bg-primary">
                                        Primary
                                      </option>
                                      <option value="bg-info">Info</option>
                                      <option value="bg-dark">Dark</option>
                                      <option value="bg-warning">
                                        Warning
                                      </option>
                                    </select>
                                    <div className="invalid-feedback">
                                      Please select a valid event category
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-6">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    id="btn-delete-event"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="col-6 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-light mr-1"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success"
                                    id="btn-save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>{" "}
                        {/* end modal-content*/}
                      </div>{" "}
                      {/* end modal dialog*/}
                    </div>
                    {/* end modal*/}
                  </div>
                </div>
              </div>{" "}
              {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">© Minible.</div>
                  <div className="col-sm-6">
                    <div className="text-sm-right d-none d-sm-block">
                      Crafted with <i className="mdi mdi-heart text-danger" />{" "}
                      by{" "}
                      <a
                        href="https://themesbrand.com/"
                        target="_blank"
                        className="text-reset"
                      >
                        Themesbrand
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* end main content*/}
        </div>
        {/* END layout-wrapper */}
        {/* Right Sidebar */}
        <div className="right-bar">
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <a
                href="javascript:void(0);"
                className="right-bar-toggle float-right"
              >
                <i className="mdi mdi-close noti-icon" />
              </a>
              <h5 className="m-0">Settings</h5>
            </div>
            {/* Settings */}
            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>
            <div className="p-4">
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-1.jpg"
                  className="img-fluid img-thumbnail"
                  alt
                />
              </div>
              <div className="custom-control custom-switch mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input theme-choice"
                  id="light-mode-switch"
                  defaultChecked
                />
                <label
                  className="custom-control-label"
                  htmlFor="light-mode-switch"
                >
                  Light Mode
                </label>
              </div>
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-2.jpg"
                  className="img-fluid img-thumbnail"
                  alt
                />
              </div>
              <div className="custom-control custom-switch mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input theme-choice"
                  id="dark-mode-switch"
                  data-bsstyle="assets/css/bootstrap-dark.min.css"
                  data-appstyle="assets/css/app-dark.min.css"
                />
                <label
                  className="custom-control-label"
                  htmlFor="dark-mode-switch"
                >
                  Dark Mode
                </label>
              </div>
              <div className="mb-2">
                <img
                  src="assets/images/layouts/layout-3.jpg"
                  className="img-fluid img-thumbnail"
                  alt
                />
              </div>
              <div className="custom-control custom-switch mb-5">
                <input
                  type="checkbox"
                  className="custom-control-input theme-choice"
                  id="rtl-mode-switch"
                  data-appstyle="assets/css/app-rtl.min.css"
                />
                <label
                  className="custom-control-label"
                  htmlFor="rtl-mode-switch"
                >
                  RTL Mode
                </label>
              </div>
            </div>
          </div>{" "}
          {/* end slimscroll-menu*/}
        </div>
        {/* /Right-bar */}
        {/* Right bar overlay*/}
        <div className="rightbar-overlay" />
      </div>
    );
  }
}

export default Calender; 
