const initialState = {
    data : []
};

function userReducer(state=initialState ,action){
    switch(action.type){
        case 'INIT_USER_ACTION':
            return Object.assign({},state,{
                data : [...action.payload]
            });

        case 'ADD_USER_ACTION' : 
            return Object.assign({},state,{
                data : state.data.push(action.payload)
            });

        case 'DELETE_USER_ACTION' :
            return Object.assign({},state,{
                data : state.data.filter(item => item.id != action.payload.id)
            });

        case 'UPDATE_USER_ACTION' :
            return Object.assign({},state,{
                data : state.data.map(item => {
                    if(item.id == action.payload.id){
                        return Object.assign({},item,action.payload);
                    }else{
                        return item;
                    }
                })
            }); 
        default:
            return state;
    }
}

export default userReducer;