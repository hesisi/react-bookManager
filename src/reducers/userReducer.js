function userReducer(state=null,action){
    switch(action.type){
        case 'REQUEST_USER_LIST':
            return action.payload
        case 'ADDUSER' : 
            return Object.assign({},state,action.payload);
        case 'UPDATEUSER' :
            return Object.assign({},state,action.payload);
        case 'DELETEUSER' :
            return Object.assign({},state.filter(item => item.id !== action.payload.id));
        default:
            return state;
    }
}

export default userReducer;