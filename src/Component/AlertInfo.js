import React, { Component } from 'react';
import {Alert,AlertContainer} from 'react-bs-notifier';
import {connect} from 'react-redux';
class AlertInfo extends Component {
    handleOff = ()=>{
        this.props.alertOff();
    }
    render() {
        if(this.props.isShow ===false) return null;
        return (
            <AlertContainer>
                <Alert onDismiss = {()=>{this.handleOff()}} timeout = {2000} type = "success">{this.props.alertContent + "          "} </Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShow: state.data.alertStatus,
        alertContent : state.data.alertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type : "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertInfo);