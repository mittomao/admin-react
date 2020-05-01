import React, { Component } from 'react';
import avavtar from "./../1.png";
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

class Menu extends Component {

    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
        {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */}
        <div className="logo">
          <a  className="simple-text logo-mini">
            <div className="logo-image-small">
              <img src={avavtar} />
            </div>
          </a>
          <a className="simple-text logo-normal">
            Mit To Mao
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <NavLink to = "/">
                <i className="fa fa-home" />
                <p>Trang Chu</p>
              </NavLink>
            </li>
            <li>
              <NavLink to = "/danhsachsanpham">
                <i className="fa fa-star" />
                <p>San Pham</p>
              </NavLink>
            </li>
            <li>
              <a href="?module=map">
                <i className="fa fa-map" />
                <p>Maps</p>
              </a>
            </li>
            <li>
              <a href="?module=nhomsp">
                <i className="fa fa-globe" />
                <p>Nhom San Pham</p>
              </a>
            </li>
            <li>
              <a href="?module=taikhoan">
                <i className="fa fa-facebook" />
                <p>User Profile</p>
              </a>
            </li>
            <li>
              <a href="?module=phanhoi">
                <i className="fa fa-envelope-open" />
                <p>FeedBack</p>
              </a>
            </li>
            <li>
              <a href="logout.php">
                <i className="fa fa-lock" />
                <p>Log out</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
        );
    }
}

export default Menu;