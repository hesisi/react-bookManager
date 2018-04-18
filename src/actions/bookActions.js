const INIT_BOOK_ACTION = "INIT_BOOK_ACTION";
const ADD_BOOK_ACTION = "ADD_BOOK_ACTION";
const DELETE_BOOK_ACTION = "DELETE_BOOK_ACTION";
const UPDATE_BOOK_ACTION = "UPDATE_BOOK_ACTION";

export function requestBookList(){
    return (dispatch,getState) => {
        fetch("http://localhost:3001/book")
        .then(res => res.json())
        .then(res => {
            dispatch(initBookAction(res));
        });
    }
}

export function initBookAction(data){
    return {
        type : INIT_BOOK_ACTION,
        payload : data
    }
}

export  function addBookAction(data){
    return {
        type : ADD_BOOK_ACTION,
        payload : data
    }
}

export function deleteBookAction(id){
    return {
        type : DELETE_BOOK_ACTION,
        payload : id
    }
}

export function updateBookAction(id){
    return {
        type : UPDATE_BOOK_ACTION,
        payload : id
    }
}