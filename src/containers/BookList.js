import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { deleteBookAction , addBookAction ,updateBookAction } from '../actions/bookActions';

const mapStateToProps = (state) => {
    return {
        bookList : state.bookReducer.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook : (id) => {
            dispatch(deleteBookAction(id))
        },
        addBook : (data) => {
            dispatch(addBookAction(data))
        },
        editBook : (data) => {
            dispatch(updateBookAction(data))
        }
    }
}
const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);

export default BookListContainer;