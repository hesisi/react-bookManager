function bookReducer(book=null,action){
    switch(action.type){
        case 'INIT_BOOK_ACTION':
            console.log("reducer-book========:"+[...book,action.payload]);
        case 'ADD_BOOK_ACTION' : 
            return Object.assign({},book,action.payload);
        case 'DELETE_BOOK_ACTION' :
            return Object.assign({},book,action.payload);
        case 'UPDATE_BOOK_ACTION' :
            return Object.assign({},book.filter(item => item.id !== action.payload.id));
        default:
            return book;
    }
}

export default bookReducer;