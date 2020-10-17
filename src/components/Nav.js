import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
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
              {/* <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                <span className="meta">
                  <span className="avatar">
                    <img
                      src="./../../public/assets/img/profile.jpg"
                      className="img-circle"
                      alt
                    />
                  </span>
                  <span className="text">Mike Adams</span>
                  <span className="caret" />
                </span>
              </a> */}
              <ul className="dropdown-menu animated fadeInRight" role="menu">
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
    );
  }
}

export default Nav
