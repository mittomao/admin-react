import {firebaseConnect} from './firebaseConnect';
var redux = require("redux");
const allReducer = {
        alertStatus : false,
        statusFormEdit : false,
        itemAdd : {},
        itemEdit : {},
        alertContent : "",
        textSearch : ""
};
const data = (state = allReducer, action) => {
    switch (action.type) {
        case 'ADD':
            firebaseConnect.push(action.dataAdd);
            console.log("Them Thanh Cong " +JSON.stringify(action.dataAdd));
            return {...state,itemAdd:action.dataAdd}
        case 'CHANGE_STATUS_EDIT': 
            return {...state,statusFormEdit:!state.statusFormEdit }
        case 'GET_DATA_EDIT': 
            console.log(action.itemEdit);
            return {...state,itemEdit : action.itemEdit }
        case 'EDIT': 
            firebaseConnect.child(state.itemEdit.id).update(
                {
                    masp : action.dataEdit.masp,
                    tensp : action.dataEdit.tensp,
                    gia : action.dataEdit.gia,
                    hinhanh : action.dataEdit.hinhanh
                }
            );
           
            return {...state,dataEdit : action.dataEdit }
        case 'DELETE': 
            firebaseConnect.child(action.idDel).remove();
            return {...state,idDel : action.idDel}
        case 'ALERT_ON': 
            return {...state,alertStatus:true,alertContent:action.alertContent}
        case 'ALERT_OFF': 
            return {...state,alertStatus:false}
        case 'GET_TEXT_SEARCH': 
            console.log(action.textSearch);
            return {...state,textSearch : action.textSearch }
        default:
            return state
    }
}
var all = redux.combineReducers({
    data : data
});
var store1 = redux.createStore(all);
store1.subscribe(()=>{
    console.log(store1.getState());
}); 
export default store1;
