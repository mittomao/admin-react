import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="footer footer-black  footer-white mt-4">
              <div className="container-fluid">
                <div className="row">
                  <nav className="footer-nav">
                    <ul>
                      <li>
                        <a href = "#">Mit To Mao</a>
                      </li>
                      <li>
                        <a  href = "#">Profile</a>
                      </li>
                      <li>
                        <a  href = "#">About</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="credits ml-auto">
                    <span className="copyright">
                      ©made with <i className="fa fa-heart heart" /> Mit To Mao
                    </span>
                  </div>
                </div>
              </div>
      </footer>
        );
    }
}

export default Footer;