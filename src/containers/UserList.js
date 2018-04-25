import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { deleteUserAction ,updateUserAction } from '../actions/userActions';

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