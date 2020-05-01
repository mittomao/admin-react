import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
class Edit_Oto extends Component {
  
  componentWillMount() {
    if(this.props.itemEdit)
    {
      this.setState({
        masp : this.props.itemEdit.masp,
        tensp : this.props.itemEdit.tensp,
        gia : this.props.itemEdit.gia,
        hinhanh : this.props.itemEdit.hinhanh
      })
    }
  }
  
  editData = ()=>{
      
    this.props.changeStatus();
    var objEdit = {};
    objEdit.masp = this.state.masp;
    objEdit.tensp = this.state.tensp;
    objEdit.gia = this.state.gia;
    objEdit.hinhanh = this.state.hinhanh;
    this.props.getDataEdit(objEdit);
    this.props.alertOn("Sua Thanh Cong" + this.state.tensp);
  }
  getValue = (event)=>{
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name] : value
    })
  }
    render() {
        return (
          <div className = "card w-50 m-auto p-3">
          <h4 className="text-center">Form Sửa Danh Sach Oto</h4>
          <form>
          <div className="form-group">
            <label>Ma Sp</label>
            <input type="text" defaultValue = {this.props.itemEdit.masp} name="masp" id="masp" className="form-control" placeholder="Ma San Pham" required onChange = {(event)=>this.getValue(event)}/>
            
          </div>
          <div className="form-group">
            <label>Ten Sp</label>
            <input type="text" defaultValue = {this.props.itemEdit.tensp} name="tensp" id="tensp" className="form-control" placeholder="Ten Sp" required onChange = {(event)=>this.getValue(event)}/>
            
          </div>
          <div className="form-group">
            <label>Gia</label>
            <input type="text" defaultValue = {this.props.itemEdit.gia} name="gia" id="gia" className="form-control" placeholder="gia" required onChange = {(event)=>this.getValue(event)}/>
          </div>
          <div className="form-group">
            <label>Hinh Anh</label>
            <input type="file"   name="hinhanh" id="hinhanh" className="form-control-file" onChange = {(event)=>this.getValue(event)}/>
          </div>
          <button  onClick = {()=>{this.editData()}} type="reset" className="btn btn-block btn-primary" >Edit</button>
          <NavLink className="btn btn-block btn-danger" to = "/danhsachsanpham">CLOSE</NavLink>
          </form>
        </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    itemEdit : state.data.itemEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      changeStatus: () => {
          dispatch({
              type : "CHANGE_STATUS_EDIT"
          })
      },
      getDataEdit: (dataEdit) => {
        dispatch({
            type : "EDIT",
            dataEdit
        })
    },
    alertOn: (alertContent) => {
      dispatch({
          type : "ALERT_ON",
         alertContent
      })
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit_Oto);