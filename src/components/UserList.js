import React,{ Component } from 'react';
import { Table ,Icon ,Button ,Popconfirm ,Divider} from 'antd';

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
            <Popconfirm title="确定要删除吗？">
                <Button size="small">删除</Button>
            </Popconfirm>
        </span>
    )
}];

class UserList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userList : []
        };
    }

    componentWillMount(){
        fetch("http://localhost:3001/user")
        .then(res => res.json())
        .then(res => {
            this.setState({
                userList : res
            });
        });
    }

    render(){
        const { userList } = this.state;
        return (
            <Table columns={columns} dataSource={userList} rowKey="id"/>
        );
    }
}

export default UserList;