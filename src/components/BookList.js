import React,{ Component } from 'react';
import { Table ,Icon ,Button ,Popconfirm ,Divider} from 'antd';

const columns = [{
    title : '图书编号',
    dataIndex : 'id'
},{
    title : '名称',
    dataIndex : 'name',
    render : text => <a href="javascript:;">{text}</a>
},{
    title:'价格',
    dataIndex:'price'
},{
    title:'借阅人编号',
    dataIndex:'owner_id',
    render : text => <a href="javascript:;">{text}</a>
},{
    title:'操作',
    key: 'action',
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

class BookList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            bookList : []
        };
    }

    componentWillMount(){
        fetch("http://localhost:3001/book")
        .then(res => res.json())
        .then(res => {
            this.setState({
                bookList : res
            });
        });
    }

    render(){
        const { bookList } = this.state;
        return (
            <Table columns={columns} dataSource={bookList}/>
        );
    }
}

export default BookList;