import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Login extends Component {
  render() {
    return (
     <div >
  <section className="container animated fadeInUp">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div id="login-wrapper">
          <header>
            <div className="brand">
              <a href="index.html" className="logo">
                <i className="icon-layers" />
                <span>NEU</span>BOARD</a>
            </div>
          </header>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">     
                Sign In
              </h3>
            </div>
            <div className="panel-body">
              <p> Login to access your account.</p>
              <form className="form-horizontal" role="form">
                <div className="form-group">
                  <div className="col-md-12">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                    <i className="fa fa-user" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                    <i className="fa fa-lock" />
                    <a href="javascript:void(0)" className="help-block">Forgot Your Password?</a>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <Link to="/main/dashboard" className="btn btn-primary btn-block">Sign in</Link>
                    <hr />
                    {/* <a href="pages-sign-up.html" className="btn btn-default btn-block">Not a member? Sign Up</a> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    );
  }
}
