import React, { Component } from 'react';
import {
    Route
  } from "react-router-dom";
import DanhSachSanPham from './DanhSachSanPham';
import Add_oto from './Add_Oto';
import Edit_Oto from './Edit_Oto';

  
class DieuHuongUrl extends Component {

    render() {
        return (
           
            <div className = "container m-auto">
               <Route exact path="/">
                  
                </Route>
                <Route path="/danhsachsanpham">
                    <DanhSachSanPham/>
                </Route>
                <Route path="/add">
                   <Add_oto/>
                </Route>
                <Route path="/edit">
                   <Edit_Oto/>
                </Route>
            </div>
            
        );
    }
}

export default DieuHuongUrl;