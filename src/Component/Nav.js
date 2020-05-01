import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div className="navbar-toggle">
                <button type="button" className="navbar-toggler">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <a className="navbar-brand" href="#pablo">Xin Chao {/*?=$_SESSION['user']?*/}</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navigation">
              <form>
                <div className="input-group no-border">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link btn-magnify" href="#pablo">
                    <i className="fa fa-facebook" />
                    <p>
                      <span className="d-lg-none d-md-block">Status</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item btn-rotate dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-youtube" />
                    <p>
                      <span className="d-lg-none d-md-block">Some Actions</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn-rotate" href="#pablo">
                    <i className="fa fa-github" />
                    <p>
                      <span className="d-lg-none d-md-block">Account</span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
        );
    }
}

export default Nav;