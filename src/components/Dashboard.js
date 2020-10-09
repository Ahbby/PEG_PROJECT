import React, { Component } from 'react'

export class Dashboard extends Component {

    componentDidMount = () => {
        const script = document.createElement("script");
        script.src = `./../../public/assets/libs/apexcharts/apexcharts.min.js`
        script.async = true
        document.body.appendChild(script)
    }


    render() {
        return (
          <div>
            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  {/* start page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">Dashboard</h4>
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="javascript: void(0);">Minible</a>
                            </li>
                            <li className="breadcrumb-item active">
                              Dashboard
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end page title */}
                  <div className="row">
                    <div className="col-md-6 col-xl-3">
                      <div className="card">
                        <div className="card-body">
               <div className="float-right mt-2" style={{position: 'relative'}}>
  <div id="total-revenue-chart" style={{minHeight: 40}}><div id="apexchartsb7e97" className="apexcharts-canvas apexchartsb7e97 apexcharts-theme-light" style={{width: 70, height: 40}}><svg id="SvgjsSvg1251" width={70} height={40} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><g id="SvgjsG1253" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1252"><linearGradient id="SvgjsLinearGradient1256" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1257" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} /><stop id="SvgjsStop1258" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /><stop id="SvgjsStop1259" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /></linearGradient><clipPath id="gridRectMaskb7e97"><rect id="SvgjsRect1262" width={74} height={40} x={-2} y={0} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} /></clipPath><clipPath id="gridRectMarkerMaskb7e97"><rect id="SvgjsRect1263" width={72} height={42} x={-1} y={-1} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} /></clipPath></defs><line id="SvgjsLine1261" x1="33.727275501598015" y1={0} x2="33.727275501598015" y2={40} strokeDasharray={3} className="apexcharts-xcrosshairs" x="33.727275501598015" y={0} width={1} height={40} fill="url(#SvgjsLinearGradient1256)" filter="none" fillOpacity="0.9" strokeWidth={0} /><g id="SvgjsG1279" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1280" className="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)" /></g><g id="SvgjsG1282" className="apexcharts-grid"><g id="SvgjsG1283" className="apexcharts-gridlines-horizontal" style={{display: 'none'}}><line id="SvgjsLine1285" x1={0} y1={0} x2={70} y2={0} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1286" x1={0} y1={8} x2={70} y2={8} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1287" x1={0} y1={16} x2={70} y2={16} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1288" x1={0} y1={24} x2={70} y2={24} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1289" x1={0} y1={32} x2={70} y2={32} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1290" x1={0} y1={40} x2={70} y2={40} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /></g><g id="SvgjsG1284" className="apexcharts-gridlines-vertical" style={{display: 'none'}} /><line id="SvgjsLine1292" x1={0} y1={40} x2={70} y2={40} stroke="transparent" strokeDasharray={0} /><line id="SvgjsLine1291" x1={0} y1={1} x2={0} y2={40} stroke="transparent" strokeDasharray={0} /></g><g id="SvgjsG1265" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1266" className="apexcharts-series" rel={1} seriesname="seriesx1" data:realindex={0}><path id="SvgjsPath1268" d="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 40L 1.5909090909090908 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 40L 1.5909090909090908 40" pathfrom="M 1.5909090909090908 40L 1.5909090909090908 40L 4.7727272727272725 40L 4.7727272727272725 40L 1.5909090909090908 40" cy={30} cx="7.954545454545454" j={0} val={25} barheight={10} barwidth="3.1818181818181817" /><path id="SvgjsPath1269" d="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 7.954545454545454 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 7.954545454545454 40" pathfrom="M 7.954545454545454 40L 7.954545454545454 40L 11.136363636363637 40L 11.136363636363637 40L 7.954545454545454 40" cy="13.600000000000001" cx="14.318181818181817" j={1} val={66} barheight="26.4" barwidth="3.1818181818181817" /><path id="SvgjsPath1270" d="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 40L 14.318181818181817 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 40L 14.318181818181817 40" pathfrom="M 14.318181818181817 40L 14.318181818181817 40L 17.5 40L 17.5 40L 14.318181818181817 40" cy="23.6" cx="20.68181818181818" j={2} val={41} barheight="16.4" barwidth="3.1818181818181817" /><path id="SvgjsPath1271" d="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 20.68181818181818 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 20.68181818181818 40" pathfrom="M 20.68181818181818 40L 20.68181818181818 40L 23.86363636363636 40L 23.86363636363636 40L 20.68181818181818 40" cy="4.399999999999999" cx="27.045454545454543" j={3} val={89} barheight="35.6" barwidth="3.1818181818181817" /><path id="SvgjsPath1272" d="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 27.045454545454543 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 27.045454545454543 40" pathfrom="M 27.045454545454543 40L 27.045454545454543 40L 30.227272727272727 40L 30.227272727272727 40L 27.045454545454543 40" cy="14.8" cx="33.40909090909091" j={4} val={63} barheight="25.2" barwidth="3.1818181818181817" /><path id="SvgjsPath1273" d="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 40L 33.40909090909091 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 40L 33.40909090909091 40" pathfrom="M 33.40909090909091 40L 33.40909090909091 40L 36.590909090909086 40L 36.590909090909086 40L 33.40909090909091 40" cy={30} cx="39.772727272727266" j={5} val={25} barheight={10} barwidth="3.1818181818181817" /><path id="SvgjsPath1274" d="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 39.772727272727266 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 39.772727272727266 40" pathfrom="M 39.772727272727266 40L 39.772727272727266 40L 42.954545454545446 40L 42.954545454545446 40L 39.772727272727266 40" cy="22.4" cx="46.136363636363626" j={6} val={44} barheight="17.6" barwidth="3.1818181818181817" /><path id="SvgjsPath1275" d="M 46.136363636363626 40L 46.136363636363626 32L 49.318181818181806 32L 49.318181818181806 40L 46.136363636363626 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 46.136363636363626 40L 46.136363636363626 32L 49.318181818181806 32L 49.318181818181806 40L 46.136363636363626 40" pathfrom="M 46.136363636363626 40L 46.136363636363626 40L 49.318181818181806 40L 49.318181818181806 40L 46.136363636363626 40" cy={32} cx="52.499999999999986" j={7} val={20} barheight={8} barwidth="3.1818181818181817" /><path id="SvgjsPath1276" d="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 52.499999999999986 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 52.499999999999986 40" pathfrom="M 52.499999999999986 40L 52.499999999999986 40L 55.681818181818166 40L 55.681818181818166 40L 52.499999999999986 40" cy="25.6" cx="58.863636363636346" j={8} val={36} barheight="14.4" barwidth="3.1818181818181817" /><path id="SvgjsPath1277" d="M 58.863636363636346 40L 58.863636363636346 24L 62.045454545454525 24L 62.045454545454525 40L 58.863636363636346 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 58.863636363636346 40L 58.863636363636346 24L 62.045454545454525 24L 62.045454545454525 40L 58.863636363636346 40" pathfrom="M 58.863636363636346 40L 58.863636363636346 40L 62.045454545454525 40L 62.045454545454525 40L 58.863636363636346 40" cy={24} cx="65.2272727272727" j={9} val={40} barheight={16} barwidth="3.1818181818181817" /><path id="SvgjsPath1278" d="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 65.2272727272727 40" fill="rgba(91,115,232,0.85)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskb7e97)" pathto="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 65.2272727272727 40" pathfrom="M 65.2272727272727 40L 65.2272727272727 40L 68.40909090909089 40L 68.40909090909089 40L 65.2272727272727 40" cy="18.4" cx="71.59090909090907" j={10} val={54} barheight="21.6" barwidth="3.1818181818181817" /></g><g id="SvgjsG1267" className="apexcharts-datalabels" /></g><line id="SvgjsLine1293" x1={0} y1={0} x2={70} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs" /><line id="SvgjsLine1294" x1={0} y1={0} x2={70} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1295" className="apexcharts-yaxis-annotations" clipPath="url(#gridRectMaskb7e97)" /><g id="SvgjsG1296" className="apexcharts-xaxis-annotations" clipPath="url(#gridRectMaskb7e97)" /><g id="SvgjsG1297" className="apexcharts-point-annotations" clipPath="url(#gridRectMaskb7e97)" /></g><rect id="SvgjsRect1260" width={0} height={0} x={0} y={0} rx={0} ry={0} fill="#fefefe" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} /><g id="SvgjsG1281" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" /></svg><div className="apexcharts-legend" /><div className="apexcharts-tooltip apexcharts-theme-light" style={{left: '-7.17897px', top: 5}}><div className="apexcharts-tooltip-series-group apexcharts-active" style={{display: 'flex'}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(0, 143, 251)', display: 'none'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value">25</span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div></div></div>
  <div className="resize-triggers"><div className="expand-trigger"><div style={{width: 71, height: 41}} /></div><div className="contract-trigger" /></div></div>

                            <div id="total-revenue-chart" />
                          </div>

                        
                        <div>
                            <h4 className="mb-1 mt-1">
                              $<span data-plugin="counterup">34,152</span>
                            </h4>
                            <p className="text-muted mb-0">Total Revenue</p>
                          </div>
                          <p className="text-muted mt-3 mb-0">
                            <span className="text-success mr-1">
                              <i className="mdi mdi-arrow-up-bold ml-1" />
                              2.65%
                            </span>{" "}
                            since last week
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right mt-2">
                            <div id="orders-chart"> </div>
                          </div>
                          <div>
                            <h4 className="mb-1 mt-1">
                              <span data-plugin="counterup">5,643</span>
                            </h4>
                            <p className="text-muted mb-0">Orders</p>
                          </div>
                          <p className="text-muted mt-3 mb-0">
                            <span className="text-danger mr-1">
                              <i className="mdi mdi-arrow-down-bold ml-1" />
                              0.82%
                            </span>{" "}
                            since last week
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right mt-2">
                            <div id="customers-chart"> </div>
                          </div>
                          <div>
                            <h4 className="mb-1 mt-1">
                              <span data-plugin="counterup">45,254</span>
                            </h4>
                            <p className="text-muted mb-0">Customers</p>
                          </div>
                          <p className="text-muted mt-3 mb-0">
                            <span className="text-danger mr-1">
                              <i className="mdi mdi-arrow-down-bold ml-1" />
                              6.24%
                            </span>{" "}
                            since last week
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right mt-2">
                            <div id="growth-chart" />
                          </div>
                          <div>
                            <h4 className="mb-1 mt-1">
                              + <span data-plugin="counterup">12.58</span>%
                            </h4>
                            <p className="text-muted mb-0">Growth</p>
                          </div>
                          <p className="text-muted mt-3 mb-0">
                            <span className="text-success mr-1">
                              <i className="mdi mdi-arrow-up-bold ml-1" />
                              10.51%
                            </span>{" "}
                            since last week
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle text-reset"
                                href="#"
                                id="dropdownMenuButton5"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="font-weight-semibold">
                                  Sort By:
                                </span>{" "}
                                <span className="text-muted">
                                  Yearly
                                  <i className="mdi mdi-chevron-down ml-1" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton5"
                              >
                                <a className="dropdown-item" href="#">
                                  Monthly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Yearly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Weekly
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="card-title mb-4">Sales Analytics</h4>
                          <div className="mt-1">
                            <ul className="list-inline main-chart mb-0">
                              <li className="list-inline-item chart-border-left mr-0 border-0">
                                <h3 className="text-primary">
                                  $<span data-plugin="counterup">2,371</span>
                                  <span className="text-muted d-inline-block font-size-15 ml-3">
                                    Income
                                  </span>
                                </h3>
                              </li>
                              <li className="list-inline-item chart-border-left mr-0">
                                <h3>
                                  <span data-plugin="counterup">258</span>
                                  <span className="text-muted d-inline-block font-size-15 ml-3">
                                    Sales
                                  </span>
                                </h3>
                              </li>
                              <li className="list-inline-item chart-border-left mr-0">
                                <h3>
                                  <span data-plugin="counterup">3.6</span>%
                                  <span className="text-muted d-inline-block font-size-15 ml-3">
                                    Conversation Ratio
                                  </span>
                                </h3>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-3">
                            <div
                              id="sales-analytics-chart"
                              className="apex-charts"
                              dir="ltr"
                            />
                          </div>
                        </div>{" "}
                        {/* end card-body*/}
                      </div>{" "}
                      {/* end card*/}
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-xl-4">
                      <div className="card bg-primary">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-sm-8">
                              <p className="text-white font-size-18">
                                Enhance your <b>Campaign</b> for better outreach{" "}
                                <i className="mdi mdi-arrow-right" />
                              </p>
                              <div className="mt-4">
                                <a
                                  href="javascript: void(0);"
                                  className="btn btn-success waves-effect waves-light"
                                >
                                  Upgrade Account!
                                </a>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="mt-4 mt-sm-0">
                                <img
                                  src="assets/images/setup-analytics-amico.svg"
                                  className="img-fluid"
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end card-body*/}
                      </div>{" "}
                      {/* end card*/}
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle text-reset"
                                href="#"
                                id="dropdownMenuButton1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="font-weight-semibold">
                                  Sort By:
                                </span>{" "}
                                <span className="text-muted">
                                  Yearly
                                  <i className="mdi mdi-chevron-down ml-1" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <a className="dropdown-item" href="#">
                                  Monthly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Yearly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Weekly
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="card-title mb-4">
                            Top Selling Products
                          </h4>
                          <div className="row align-items-center no-gutters mt-3">
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-primary mr-2" />{" "}
                                Desktops{" "}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "52%" }}
                                  aria-valuenow={52}
                                  aria-valuemin={0}
                                  aria-valuemax={52}
                                ></div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end row*/}
                          <div className="row align-items-center no-gutters mt-3">
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-info mr-2" />{" "}
                                iPhones{" "}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "45%" }}
                                  aria-valuenow={45}
                                  aria-valuemin={0}
                                  aria-valuemax={45}
                                ></div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end row*/}
                          <div className="row align-items-center no-gutters mt-3">
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-success mr-2" />{" "}
                                Android{" "}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "48%" }}
                                  aria-valuenow={48}
                                  aria-valuemin={0}
                                  aria-valuemax={48}
                                ></div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end row*/}
                          <div className="row align-items-center no-gutters mt-3">
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-warning mr-2" />{" "}
                                Tablets{" "}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "78%" }}
                                  aria-valuenow={78}
                                  aria-valuemin={0}
                                  aria-valuemax={78}
                                ></div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end row*/}
                          <div className="row align-items-center no-gutters mt-3">
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-purple mr-2" />{" "}
                                Cables{" "}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-purple"
                                  role="progressbar"
                                  style={{ width: "63%" }}
                                  aria-valuenow={63}
                                  aria-valuemin={0}
                                  aria-valuemax={63}
                                ></div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end row*/}
                        </div>{" "}
                        {/* end card-body*/}
                      </div>{" "}
                      {/* end card*/}
                    </div>{" "}
                    {/* end Col */}
                  </div>{" "}
                  {/* end row*/}
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right">
                            <div className="dropdown">
                              <a
                                className=" dropdown-toggle"
                                href="#"
                                id="dropdownMenuButton2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted">
                                  All Members
                                  <i className="mdi mdi-chevron-down ml-1" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton2"
                              >
                                <a className="dropdown-item" href="#">
                                  Locations
                                </a>
                                <a className="dropdown-item" href="#">
                                  Revenue
                                </a>
                                <a className="dropdown-item" href="#">
                                  Join Date
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="card-title mb-4">Top Users</h4>
                          <div data-simplebar style={{ maxHeight: 336 }}>
                            <div className="table-responsive">
                              <table className="table table-borderless table-centered table-nowrap">
                                <tbody>
                                  <tr>
                                    <td style={{ width: 20 }}>
                                      <img
                                        src="assets/images/users/avatar-4.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Glenn Holden
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        Nevada
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-danger font-size-12">
                                        Cancel
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-success"
                                        data-feather="trending-up"
                                      />
                                      $250.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-5.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Lolita Hamill
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        Texas
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-success font-size-12">
                                        Success
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-danger"
                                        data-feather="trending-down"
                                      />
                                      $110.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-6.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Robert Mercer
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        California
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-info font-size-12">
                                        Active
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-success"
                                        data-feather="trending-up"
                                      />
                                      $420.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-7.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Marie Kim
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        Montana
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-warning font-size-12">
                                        Pending
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-danger"
                                        data-feather="trending-down"
                                      />
                                      $120.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-8.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Sonya Henshaw
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        Colorado
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-info font-size-12">
                                        Active
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-success"
                                        data-feather="trending-up"
                                      />
                                      $112.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Marie Kim
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        Australia
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-success font-size-12">
                                        Success
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-danger"
                                        data-feather="trending-down"
                                      />
                                      $120.00
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src="assets/images/users/avatar-1.jpg"
                                        className="avatar-xs rounded-circle "
                                        alt="..."
                                      />
                                    </td>
                                    <td>
                                      <h6 className="font-size-15 mb-1 font-weight-normal">
                                        Sonya Henshaw
                                      </h6>
                                      <p className="text-muted font-size-13 mb-0">
                                        <i className="mdi mdi-map-marker" />{" "}
                                        India
                                      </p>
                                    </td>
                                    <td>
                                      <span className="badge badge-soft-danger font-size-12">
                                        Cancel
                                      </span>
                                    </td>
                                    <td className="text-muted font-weight-semibold text-right">
                                      <i
                                        className="icon-xs icon mr-2 text-success"
                                        data-feather="trending-up"
                                      />
                                      $112.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>{" "}
                            {/* enbd table-responsive*/}
                          </div>{" "}
                          {/* data-sidebar*/}
                        </div>
                        {/* end card-body*/}
                      </div>{" "}
                      {/* end card*/}
                    </div>
                    {/* end col */}
                    <div className="col-xl-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                id="dropdownMenuButton3"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted">
                                  Recent
                                  <i className="mdi mdi-chevron-down ml-1" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton3"
                              >
                                <a className="dropdown-item" href="#">
                                  Recent
                                </a>
                                <a className="dropdown-item" href="#">
                                  By Users
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="card-title mb-4">Recent Activity</h4>
                          <ol
                            className="activity-feed mb-0 pl-2"
                            data-simplebar
                            style={{ maxHeight: 336 }}
                          >
                            <li className="feed-item">
                              <div className="feed-item-list">
                                <p className="text-muted mb-1 font-size-13">
                                  Today
                                  <small className="d-inline-block ml-1">
                                    12:20 pm
                                  </small>
                                </p>
                                <p className="mt-0 mb-0">
                                  Andrei Coman magna sed porta finibus, risus
                                  posted a new article:{" "}
                                  <span className="text-primary">
                                    Forget UX Rowland
                                  </span>
                                </p>
                              </div>
                            </li>
                            <li className="feed-item">
                              <p className="text-muted mb-1 font-size-13">
                                22 Jul, 2020{" "}
                                <small className="d-inline-block ml-1">
                                  12:36 pm
                                </small>
                              </p>
                              <p className="mt-0 mb-0">
                                Andrei Coman posted a new article:{" "}
                                <span className="text-primary">
                                  Designer Alex
                                </span>
                              </p>
                            </li>
                            <li className="feed-item">
                              <p className="text-muted mb-1 font-size-13">
                                18 Jul, 2020{" "}
                                <small className="d-inline-block ml-1">
                                  07:56 am
                                </small>
                              </p>
                              <p className="mt-0 mb-0">
                                Zack Wetass, sed porta finibus, risus Chris
                                Wallace Commented{" "}
                                <span className="text-primary">
                                  {" "}
                                  Developer Moreno
                                </span>
                              </p>
                            </li>
                            <li className="feed-item">
                              <p className="text-muted mb-1 font-size-13">
                                10 Jul, 2020{" "}
                                <small className="d-inline-block ml-1">
                                  08:42 pm
                                </small>
                              </p>
                              <p className="mt-0 mb-0">
                                Zack Wetass, Chris combined Commented{" "}
                                <span className="text-primary">UX Murphy</span>
                              </p>
                            </li>
                            <li className="feed-item">
                              <p className="text-muted mb-1 font-size-13">
                                23 Jun, 2020{" "}
                                <small className="d-inline-block ml-1">
                                  12:22 am
                                </small>
                              </p>
                              <p className="mt-0 mb-0">
                                Zack Wetass, sed porta finibus, risus Chris
                                Wallace Commented{" "}
                                <span className="text-primary">
                                  {" "}
                                  Developer Moreno
                                </span>
                              </p>
                            </li>
                            <li className="feed-item pb-1">
                              <p className="text-muted mb-1 font-size-13">
                                20 Jun, 2020{" "}
                                <small className="d-inline-block ml-1">
                                  09:48 pm
                                </small>
                              </p>
                              <p className="mt-0 mb-0">
                                Zack Wetass, Chris combined Commented{" "}
                                <span className="text-primary">UX Murphy</span>
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-right">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                id="dropdownMenuButton4"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted">
                                  Monthly
                                  <i className="mdi mdi-chevron-down ml-1" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton4"
                              >
                                <a className="dropdown-item" href="#">
                                  Yearly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Monthly
                                </a>
                                <a className="dropdown-item" href="#">
                                  Weekly
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="card-title">Social Source</h4>
                          <div className="text-center">
                            <div className="avatar-sm mx-auto mb-4">
                              <span className="avatar-title rounded-circle bg-soft-primary font-size-24">
                                <i className="mdi mdi-facebook text-primary" />
                              </span>
                            </div>
                            <p className="font-16 text-muted mb-2" />
                            <h5>
                              <a href="#" className="text-dark">
                                Facebook -{" "}
                                <span className="text-muted font-16">
                                  125 sales
                                </span>{" "}
                              </a>
                            </h5>
                            <p className="text-muted">
                              Maecenas nec odio et ante tincidunt tempus. Donec
                              vitae sapien ut libero venenatis faucibus
                              tincidunt.
                            </p>
                            <a href="#" className="text-reset font-16">
                              Learn more <i className="mdi mdi-chevron-right" />
                            </a>
                          </div>
                          <div className="row mt-4">
                            <div className="col-4">
                              <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                  <span className="avatar-title rounded-circle bg-primary font-size-16">
                                    <i className="mdi mdi-facebook text-white" />
                                  </span>
                                </div>
                                <h5 className="font-size-15">Facebook</h5>
                                <p className="text-muted mb-0">125 sales</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                  <span className="avatar-title rounded-circle bg-info font-size-16">
                                    <i className="mdi mdi-twitter text-white" />
                                  </span>
                                </div>
                                <h5 className="font-size-15">Twitter</h5>
                                <p className="text-muted mb-0">112 sales</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                  <span className="avatar-title rounded-circle bg-pink font-size-16">
                                    <i className="mdi mdi-instagram text-white" />
                                  </span>
                                </div>
                                <h5 className="font-size-15">Instagram</h5>
                                <p className="text-muted mb-0">104 sales</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 text-center">
                            <a
                              href="#"
                              className="text-primary font-size-14 font-weight-medium"
                            >
                              View All Sources{" "}
                              <i className="mdi mdi-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title mb-4">
                            Latest Transaction
                          </h4>
                          <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                              <thead className="thead-light">
                                <tr>
                                  <th style={{ width: 20 }}>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck1"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </th>
                                  <th>Order ID</th>
                                  <th>Billing Name</th>
                                  <th>Date</th>
                                  <th>Total</th>
                                  <th>Payment Status</th>
                                  <th>Payment Method</th>
                                  <th>View Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck2"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2540
                                    </a>{" "}
                                  </td>
                                  <td>Neal Matthews</td>
                                  <td>07 Oct, 2019</td>
                                  <td>$400</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-mastercard mr-1" />{" "}
                                    Mastercard
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck3"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck3"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2541
                                    </a>{" "}
                                  </td>
                                  <td>Jamal Burnett</td>
                                  <td>07 Oct, 2019</td>
                                  <td>$380</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-danger font-size-12">
                                      Chargeback
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-visa mr-1" /> Visa
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck4"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck4"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2542
                                    </a>{" "}
                                  </td>
                                  <td>Juan Mitchell</td>
                                  <td>06 Oct, 2019</td>
                                  <td>$384</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-paypal mr-1" />{" "}
                                    Paypal
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck5"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck5"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2543
                                    </a>{" "}
                                  </td>
                                  <td>Barry Dick</td>
                                  <td>05 Oct, 2019</td>
                                  <td>$412</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-mastercard mr-1" />{" "}
                                    Mastercard
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck6"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck6"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2544
                                    </a>{" "}
                                  </td>
                                  <td>Ronald Taylor</td>
                                  <td>04 Oct, 2019</td>
                                  <td>$404</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-warning font-size-12">
                                      Refund
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-visa mr-1" /> Visa
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck7"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheck7"
                                      >
                                        &nbsp;
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript: void(0);"
                                      className="text-body font-weight-bold"
                                    >
                                      #MB2545
                                    </a>{" "}
                                  </td>
                                  <td>Jacob Hunter</td>
                                  <td>04 Oct, 2019</td>
                                  <td>$392</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <i className="fab fa-cc-paypal mr-1" />{" "}
                                    Paypal
                                  </td>
                                  <td>
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* end table-responsive */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
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
          </div>
        );
    }
}

export default Dashboard
