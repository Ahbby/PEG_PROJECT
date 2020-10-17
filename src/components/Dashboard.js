import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
          <section id="main-content" className="animated fadeInUp">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="panel panel-solid-success widget-mini">
                      <div className="panel-body">
                        <i className="icon-bar-chart" />
                        <span className="total text-center">$3,200</span>
                        <span className="title text-center">Earnings</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="panel widget-mini">
                      <div className="panel-body">
                        <i className="icon-support" />
                        <span className="total text-center">1,230</span>
                        <span className="title text-center">Support</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="panel widget-mini">
                      <div className="panel-body">
                        <i className="icon-envelope-open" />
                        <span className="total text-center">1,680</span>
                        <span className="title text-center">Messages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="panel panel-solid-info widget-mini">
                      <div className="panel-body">
                        <i className="icon-user" />
                        <span className="total text-center">12,680</span>
                        <span className="title text-center">Signups</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-default browser-chart">
                  <div className="panel-heading">
                    <h3 className="panel-title">BROWSER STATS</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ul>
                          <li>
                            <i className="fa fa-circle success-color" /> Chrome
                          </li>
                          <li>
                            <i className="fa fa-circle primary-color" /> IE
                          </li>
                          <li>
                            <i className="fa fa-circle warning-color" /> Safari
                          </li>
                          <li>
                            <i className="fa fa-circle info-color" /> Firefox
                          </li>
                          <li>
                            <i className="fa fa-circle default-color" /> Other
                          </li>
                        </ul>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div id="doughnut-canvas-holder">
                          <canvas
                            id="doughnut-chart-area"
                            width={137}
                            height={137}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Monthly Goal</h3>
                    <div className="actions pull-right">
                      <i className="fa fa-expand" />
                    </div>
                  </div>
                  <div className="panel-body widget-gauge">
                    <canvas width={160} height={100} id="gauge" className />
                    <div className="goal-wrapper">
                      <span className="gauge-value pull-left">$</span>
                      <span id="gauge-text" className="gauge-value pull-left">
                        3,200
                      </span>
                      <span id="goal-text" className="goal-value pull-right">
                        $5,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">SERVER STATS</h3>
                    <div className="reportdate actions">
                      <i className="fa fa-calendar-o" />
                      <span>Jan 1 - June 30</span>
                      <b className="caret" />
                    </div>
                  </div>
                  <div className="panel-body server-chart">
                    <div className="row">
                      <div className="col-md-12 col-lg-4">
                        <ul>
                          <li>
                            <span className="text-left">Network Usage</span>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-success"
                                role="progressbar"
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "65%" }}
                              ></div>
                            </div>
                          </li>
                          <li>
                            <span className="text-left">CPU Load</span>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-info"
                                role="progressbar"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "40%" }}
                              ></div>
                            </div>
                          </li>
                        </ul>
                        <p>
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Nullam id dolor id
                          nibh ultricies vehicula.
                        </p>
                      </div>
                      <div className="col-md-12 col-lg-8">
                        <div className="row">
                          <div className="col-md-12 col-lg-6">
                            <div className="line-chart">
                              <canvas id="canvas1" height={100} />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6">
                            <div className="bar-chart">
                              <canvas id="canvas2" height={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="panel panel-default chat-widget">
                  <div className="panel-heading">
                    <h3 className="panel-title">chat</h3>
                    <div className="actions pull-right">
                      <i className="fa fa-expand" />
                      <i className="fa fa-chevron-down" />
                      <i className="fa fa-times" />
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="row wrapper animated fadeInRight">
                      <div className="col-xs-2 col-sm-2 col-md-2 ">
                        <span className="avatar">
                          <img
                            src="assets/img/avatar3.png"
                            className="img-circle"
                            alt
                          />
                          <i className="on animated bounceIn" />
                        </span>
                      </div>
                      <div className="col-xs-10 col-sm-10 col-md-10">
                        <div className="post default">
                          <span className="arrow left" />
                          <p>
                            Hey Mike...Nullam quis risus eget urna mollis ornare
                            vel eu leo. Cum sociis natoque penatibut
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row wrapper animated fadeInLeft">
                      <div className="col-xs-10 col-sm-10 col-md-10">
                        <div className="post primary">
                          <span className="arrow right" />
                          <p>
                            Nullam quis risus eget urna mollis ornare vel eu
                            leo. Cum sociis natoque penatibus et.
                          </p>
                        </div>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2">
                        <span className="avatar">
                          <img
                            src="assets/img/profile.jpg"
                            className="img-circle"
                            alt
                          />
                          <i className="on animated bounceIn" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Say something"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">
                            SEND
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="panel">
                  <div className="panel-body">
                    <div className="calendar-block ">
                      <div className="cal1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="panel panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Weather</h3>
                    <div className="actions pull-right">
                      <i className="fa fa-expand" />
                      <i className="fa fa-chevron-down" />
                      <i className="fa fa-times" />
                    </div>
                  </div>
                  <div className="panel-body widget-weather">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <h3 className="text-center title">Today</h3>
                        <div className="text-center">
                          <canvas id="clear-day" width={75} height={75} />
                          <div className="temp">62°C</div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <h3 className="text-center title">Tonight</h3>
                        <div className="text-center">
                          <canvas
                            id="partly-cloudy-night"
                            width={75}
                            height={75}
                          />
                          <div className="temp">44°C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Mon
                        </h6>
                        <div className="text-center">
                          <canvas
                            id="partly-cloudy-day"
                            width={32}
                            height={32}
                          />
                          <span>48°C</span>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Tue
                        </h6>
                        <div className="text-center">
                          <canvas id="rain" width={32} height={32} />
                          <span>39°C</span>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Wed
                        </h6>
                        <div className="text-center">
                          <canvas id="sleet" width={32} height={32} />
                          <span>32°C</span>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Thu
                        </h6>
                        <div className="text-center">
                          <canvas id="snow" width={32} height={32} />
                          <span>28°C</span>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Fri
                        </h6>
                        <div className="text-center">
                          <canvas id="wind" width={32} height={32} />
                          <span>40°C</span>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-2">
                        <h6 className="text-center small-thin uppercase">
                          Sat
                        </h6>
                        <div className="text-center">
                          <canvas id="fog" width={32} height={32} />
                          <span>42°C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
  }
}

export default Dashboard
