import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="home-btn d-none d-sm-block">
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <a href="index.html" className="mb-5 d-block auth-logo">
                    <img
                      src="assets/images/logo-dark.png"
                      alt
                      height={22}
                      className="logo logo-dark"
                    />
                    <img
                      src="assets/images/logo-light.png"
                      alt
                      height={22}
                      className="logo logo-light"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                    </div>
                    <div className="p-2 mt-4">
                      <form action="index.html">
                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                          />
                        </div>
                        <div className="form-group">
                          <div className="float-right">
                            <a
                              href="auth-recoverpw.html"
                              className="text-muted"
                            >
                              Forgot password?
                            </a>
                          </div>
                          <label htmlFor="userpassword">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="userpassword"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="auth-remember-check"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="auth-remember-check"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="mt-3 text-right">
                          <Link
                            to="/main"
                            className="btn btn-primary w-sm waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
      </div>
    );
  }
}
