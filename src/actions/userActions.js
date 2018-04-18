const ADD_USER_ACTION = "ADD_USER_ACTION";
const DELETE_USER_ACTION = "DELETE_USER_ACTION";
const UPDATE_USER_ACTION = "UPDATE_USER_ACTION";

export  function addBookAction(data){
    return {
        type : ADD_USER_ACTION,
        payload : data
    }
}

export function deleteBookAction(id){
    return {
        type : DELETE_USER_ACTION,
        payload : id
    }
}

export function updateBookAction(id){
    return {
        type : UPDATE_USER_ACTION,
        payload : data
    }
}