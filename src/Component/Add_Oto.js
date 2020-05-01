import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
class Add_oto extends Component {

    addData = ()=>{
      if(this.state !== null)
      {
        var obj = {};
      obj.masp = this.state.masp;
      obj.tensp = this.state.tensp;
      obj.gia = this.state.gia;
      obj.hinhanh = this.state.hinhanh;
      this.props.add_Data(obj);
      this.props.alertOn("Them Thanh Cong San Pham " + this.state.tensp);
      }
      
    }
    getValue = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className = "card w-50 m-auto p-3">
                <h4 className="text-center">Form Them Danh Sach Oto</h4>
                <form>
                <div className="form-group">
                  <label>Ma Sp</label>
                  <input type="text" name="masp" id="masp" className="form-control" placeholder="Ma San Pham" required = "required" onChange = {(event)=>this.getValue(event)}/>
                  
                </div>
                <div className="form-group">
                  <label>Ten Sp</label>
                  <input type="text" name="tensp" id="tensp" className="form-control" placeholder="Ten Sp" required = "required" onChange = {(event)=>this.getValue(event)}/>
                  
                </div>
                <div className="form-group">
                  <label>Gia</label>
                  <input type="text" name="gia" id="gia" className="form-control" placeholder="gia" required = "required" onChange = {(event)=>this.getValue(event)}/>
                </div>
                <div className="form-group">
                  <label>Hinh Anh</label>
                  <input type="file" name="hinhanh" id="hinhanh" className="form-control-file" onChange = {(event)=>this.getValue(event)}/>
                </div>
                
                
                <button type="submit" className="btn btn-block btn-primary" onClick = {()=>{this.addData()}}>ADD</button>
                <NavLink className="btn btn-block btn-danger" to = "/danhsachsanpham">CLOSE</NavLink>
                </form>
              </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
      
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add_Data: (dataAdd) => {
      dispatch({
        type : "ADD",
        dataAdd
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
export default connect(mapStateToProps,mapDispatchToProps)(Add_oto);