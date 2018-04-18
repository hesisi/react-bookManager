function userReducer(user=[{id:"1",name:"user1"},{id:"2",name:"user1"},{id:"2",name:"user1"}],action){
    switch(action.type){
        case 'REQUEST_USER_LIST':
            return action.payload
        case 'ADDUSER' : 
            return Object.assign({},user,action.payload);
        case 'UPDATEUSER' :
            return Object.assign({},user,action.payload);
        case 'DELETEUSER' :
            return Object.assign({},user.filter(item => item.id !== action.payload.id));
        default:
            return user;
    }
}

export default userReducer;