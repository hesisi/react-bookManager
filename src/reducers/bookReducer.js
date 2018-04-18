function bookReducer(state=null,action){
    switch(action.type){
        case 'REQUEST_BOOK_LIST':
            return action.payload
        case 'ADDBOOK' : 
            return Object.assign({},state,action.payload);
        case 'UPDATEBOOK' :
            return Object.assign({},state,action.payload);
        case 'DELETEBOOK' :
            return Object.assign({},state.filter(item => item.id !== action.payload.id));
        default:
            return state;
    }
}

export default bookReducer;