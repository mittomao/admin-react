import React, { Component } from 'react';
import Footer from './Footer';
import Parameter from './Parameter';
import Nav from './Nav';
import DieuHuongUrl from './DieuHuongUrl';
import AlertInfo from './AlertInfo';
class Main extends Component {

    render() {
        return (  
            <div className="main-panel">
                <AlertInfo/>
                <Nav/>
                <div className="content">
                    <Parameter/>
                    <DieuHuongUrl/>
                </div>
                <Footer></Footer>
            </div>
            
        );
    }
}

export default Main;