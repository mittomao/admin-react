import React, { Component } from 'react';

class Parameter extends Component {

    render() {
        return (
          <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-user text-warning" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">User</p>
                        <p className="card-title">{/*?=$user?*/}
                        </p><p>
                        </p></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" /> Update Now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-money text-success" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Product</p>
                        <p className="card-title">{/*?=$product?*/}
                        </p><p>
                        </p></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" /> Last day
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-envelope-open text-danger" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">FeedBack</p>
                        <p className="card-title">{/*?=$feed?*/}
                        </p><p>
                        </p></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" /> In the last hour
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-eye text-primary" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <p className="card-title">+45K
                        </p><p>
                        </p></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" /> Update now
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Parameter;