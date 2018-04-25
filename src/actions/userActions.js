const INIT_USER_ACTION = "INIT_USER_ACTION";
const ADD_USER_ACTION = "ADD_USER_ACTION";
const DELETE_USER_ACTION = "DELETE_USER_ACTION";
const UPDATE_USER_ACTION = "UPDATE_USER_ACTION";

export const initUserAction = (data) => {
    return {
        type : INIT_USER_ACTION,
        payload : data
    }
}

export  const addUserAction = (data) => {
    return {
        type : ADD_USER_ACTION,
        payload : data
    }
}

export const deleteUserAction = (id) => {
    return {
        type : DELETE_USER_ACTION,
        payload : id
    }
}

export const updateUserAction = (data) => {
    return {
        type : UPDATE_USER_ACTION,
        payload : data
    }
}