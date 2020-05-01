import React, { Component } from 'react';
import Item_Oto from './Item_Oto';
import {firebaseConnect} from './firebaseConnect';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import Edit_Oto from './Edit_Oto';
import Search from './Search';
class DanhSachSanPham extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataFirebase : [],
        textSearch : ""
      }
    }

    componentWillMount() {
      firebaseConnect.on('value',(data)=>{
        var arr_data = [];
      data.forEach(element => {
          const key = element.key;
          const masp = element.val().masp;
          const tensp = element.val().tensp;
          const gia = element.val().gia;
          const hinhanh = element.val().hinhanh;
          arr_data.push({
            id : key,
            masp : masp,
            tensp : tensp,
            gia : gia,
            hinhanh : hinhanh
          })
      });
      this.setState({
        dataFirebase: arr_data
      });
      })
    }

    // Kiem Tra Show Form Edit
    // isEdit = ()=>{
     
    //   if(this.props.statusFormEdit===true)
    //   {
    //     return (
    //         <Edit_Oto/>
    //     )
    //   }
    // }
   
    render() {
        var ketqua = [];
        if(this.props.textSearch!=="")
        {
          this.state.dataFirebase.forEach((item)=>{
            if(item.tensp.indexOf(this.props.textSearch) !==-1)
            {
              ketqua.push(item);
            }
          })
        }
        else
        {
          ketqua = this.state.dataFirebase;
        }
        
        return (
        <div className="row m-auto">    
          {/* Start Form Sua */}
            {/* {this.isEdit()} */}
          {/* End */}
          <div className="col-md-10 col-md-offset-1"> 
            <div className="panel panel-default panel-table"> 
              <div className="panel-heading"> 
                <div className="row"> 
                  <div className="col col-xs-6"> 
                    <h3 className="panel-title">Danh sách Sản Phẩm</h3> 
                  </div> 
                  <Search/>
                  <div className="col col-xs-6 text-right">     
                    <NavLink to = "/add" className="btn btn-sm btn-primary btn-create">Thêm mới</NavLink>
                  </div>  
                </div> 
              </div>
              <div className="panel-body mt-3"> 
              <table className="table  w-100 table-fluid table-bordered table-hover tb m-auto">
                <thead className="thead-inverse">
                  <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Hình Ảnh</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                  <tbody>
                      {
                      ketqua.map((value,key)=>{
                         return <Item_Oto key = {key} item = {value} masp = {value.masp} tensp= {value.tensp} gia = {value.gia} hinhanh = {value.hinhanh}></Item_Oto>
                      })}
                  </tbody>
                  </table> 
              </div> 
            </div> 
          </div> 
        </div> 
     
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    statusFormEdit: state.data.statusFormEdit,
    textSearch : state.data.textSearch
  }
}

 
export default connect(mapStateToProps)(DanhSachSanPham);