import React,{ Component } from 'react';
import { Table ,Icon ,Button ,Popconfirm ,Divider} from 'antd';
import {initUserAction} from "../actions/userActions";
import PropTypes from 'prop-types';

class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const {store} = this.context;
        fetch("http://localhost:3001/user")
        .then(res => res.json())
        .then(res => {
            console.log("======userList:"+JSON.stringify(res));
            store.dispatch(initUserAction(res));
        });
    }

    render(){
        const { userList, deleteUser, editUser } = this.props; //connect传递的props
        console.log("===================props:"+JSON.stringify(this.props));

        const columns = [{
            title : '用户编号',
            dataIndex : 'id'
        },{
            title : '姓名',
            dataIndex : 'name',
            render : text => <a href="javascript:;">{text}</a>
        },{
            title:'学号',
            dataIndex:'student_id'
        },{
            title:'性别',
            dataIndex:'gender'
        
        },{
            title:'操作',
            render : (text,record) => (
                <span type="ghost">
                    <Button size="small">编辑</Button>
                    <Divider type="vertical" />
                    <Popconfirm title="确定要删除吗？" onConfirm={() => deleteUser(record)}>
                        <Button size="small">删除</Button>
                    </Popconfirm>
                </span>
            )
        }];

        return (
            <Table columns={columns} dataSource={userList} rowKey="id"/>
        );
    }
}


UserList.contextTypes = {
    store: PropTypes.object.isRequired
};


export default UserList;