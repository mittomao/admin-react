import React, { Component } from 'react';
import {connect} from 'react-redux'
class Search extends Component {
 // Search
 constructor(props) {
   super(props);
   this.state = {
     textSearch : ""
   }
 }
 
 getTextSearch = (event)=>{
    this.setState({
      textSearch : event.target.value
    });
    if(this.state.textSearch !== null)
    {
      this.props.getTextSearch(this.state.textSearch);
    }
  }
   searchText = ()=>{
     
   }
    render() {
        return (
            <form>
                    <div className="input-group no-border">
                      <input type="text" className="form-control" placeholder="Search..."  onChange = {(event)=>{this.getTextSearch(event)}}/>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <i className="fa fa-search" onClick={()=>this.searchText()}/>
                        </div>
                      </div>
                    </div>
            </form>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getTextSearch: (textSearch ) => {
        dispatch({
          type : 'GET_TEXT_SEARCH'
          ,textSearch 
        })
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Search);