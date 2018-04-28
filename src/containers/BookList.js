import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { deleteBookAction , addBookAction ,updateBookAction } from '../actions/bookActions';
import { message } from 'antd';

const mapStateToProps = (state) => {
    return {
        bookList : state.bookReducer.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook : (id) => {
            //dispatch(deleteBookAction(id))
            dispatch(dispatch => {
                fetch('http://localhost:3001/book/'+id,{
                    method : 'delete'
                })
                .then(res => res.json())
                .then(res => {
                    console.log("==============删除返回参数："+JSON.stringify(res));
                    dispatch(deleteBookAction(id));
                    message.success("删除记录成功");
                })
                .catch(err => {
                    message.error("删除记录失败");
                })
            })
        },
        addBook : (data) => {
            //dispatch(addBookAction(data))

            dispatch(dispatch => {
                fetch('http://localhost:3001/book',{
                    method : 'post',
                    body : JSON.stringify({
                        name : data.name,
                        price : data.price,
                        owner_id : data.owner_id
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json)
                .then(res => {
                    console.log("==============添加返回参数："+JSON.stringify(res));
                    dispatch(addBookAction(data))
                    //message.success("添加记录成功");
                    window.location.reload();
                })
                .catch(error => {
                    message.error("添加记录失败")
                })
            })
        },
        editBook : (data) => {
            //dispatch(updateBookAction(data))
            dispatch(dispatch => {
                fetch('http://localhost:3001/book/'+data.id,{
                    method : 'put',
                    body : JSON.stringify({
                        name : data.name,
                        price : data.price,
                        owner_id : data.owner_id
                    }),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                })
                .then(res => res.json())
                .then(res => {
                    console.log("==============修改返回参数："+JSON.stringify(res));
                    dispatch(updateBookAction(data))
                    message.success("修改记录成功")
                })
                .catch(error => {
                    message.error("修改记录失败")
                })
            })
        }
    }
}
const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);

export default BookListContainer;