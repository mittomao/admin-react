import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
class Item_Oto extends Component {
    editData = ()=>{
       this.props.changeStatus();
       this.props.getDataEdit(this.props.item);
    }
   delData = ()=>{
        this.props.getIdDel(this.props.item.id);
        this.props.alertOn("Xoa Thanh Cong San Pham Co Id La " + this.props.item.id );
     }
    render() {
        return (
            <tr>
                
                <td>{this.props.masp}</td>
                <td>{this.props.tensp}</td>
                <td>{this.props.gia}</td>
                <td><img alt = {this.props.hinhanh} width = {40} src ={this.props.hinhanh}/></td>
                <td>
                    <NavLink to = "/edit" onClick = {()=>{this.editData()}} className = "btn btn-outline-warning"><i className = "fa fa-edit"></i></NavLink>
                    <button onClick = {()=>{this.delData()}}  className = "btn btn-outline-danger"><i className = "fa fa-trash"></i></button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: () => {
            dispatch({
                type : "CHANGE_STATUS_EDIT"
            })
        },
       getDataEdit: (itemEdit) => {
            dispatch({
                type : "GET_DATA_EDIT",
                itemEdit
            })
        },
        getIdDel: (idDel) => {
            dispatch({
                type : "DELETE",
                idDel
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
export default connect(mapStateToProps, mapDispatchToProps)(Item_Oto)