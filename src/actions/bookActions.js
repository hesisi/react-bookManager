const INIT_BOOK_ACTION = "INIT_BOOK_ACTION";
const ADD_BOOK_ACTION = "ADD_BOOK_ACTION";
const DELETE_BOOK_ACTION = "DELETE_BOOK_ACTION";
const UPDATE_BOOK_ACTION = "UPDATE_BOOK_ACTION";

export const initBookAction = (data) => {
    return {
        type : INIT_BOOK_ACTION,
        payload : data
    }
}

export  const addBookAction = (data) => {
    return {
        type : ADD_BOOK_ACTION,
        payload : data
    }
}

export const deleteBookAction = (id) => {
    return {
        type : DELETE_BOOK_ACTION,
        payload : id
    }
}

export const updateBookAction = (data) => {
    return {
        type : UPDATE_BOOK_ACTION,
        payload : data
    }
}