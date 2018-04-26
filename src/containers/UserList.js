import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { deleteUserAction ,addUserAction ,updateUserAction } from '../actions/userActions';

const mapStateToProps = (state) => {
    return {
        userList : state.userReducer.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser : (id) => {
            dispatch(deleteUserAction(id))
        },
        addUser : (data) => {
            dispatch(addUserAction(data))
        },
        editUser : (data) => {
            dispatch(updateUserAction(data))
        }
    }
}
const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListContainer;