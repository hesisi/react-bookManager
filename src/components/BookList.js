import React from 'react';
import { Table, Button, Popconfirm, Divider, Modal, message} from 'antd';
import {initBookAction} from "../actions/bookActions";
import PropTypes from 'prop-types';
import FormLayout from './Form';
import SearchInput from '../components/SearchInput';

class BookList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : "",
            visible : false,
            confirmLoading : false,
            formData : {},
            operation : ""
        };
    }

    componentWillMount(){
        const {store} = this.context;
        fetch("http://localhost:3001/book")
        .then(res => res.json())
        .then(res => {
            store.dispatch(initBookAction(res));
        });
    }

    //点击编辑
    editHandle(record){
        //record：{"id":10002,"name":"PHP从入门到死亡","price":89,"owner_id":10002}
        this.setState({
            title : "修改",
            visible : true,
            formData : record,
            operation : "edit"   //编辑状态
        });     
    }

    //在子组件中点击添加需要调用的props函数
    addHandle(){
        this.setState({
            title : "添加",
            visible : true,
            operation : "add"
        });
    }

    //Form表单点击确定的时候要执行的props函数，动态获取Input组件的值
    comfirmHandle(data){
        
        //这个地方要注意setState是异步的，
        //只有在重新render的时候state的值才会被重新修改
        //所以通过回调函数解决

        this.setState({
            visible : false,
            formData : data
        },() => {
            let { operation } = this.state;
            const { formData } = this.state;
    
            if(operation === "edit"){
                this.props.editBook(formData);
            }else{
                this.props.addBook(formData);
            }

            //处理完之后再次置空
            this.setState({
                formData : {}
            })
            
        })  
    }

    //取消
    cancelHandle(){
        this.setState({
            visible : false,
            formData : {}   //点击取消置空record对象
        });
    }

    render(){
        const { bookList, deleteBook } = this.props; //connect传递的props
        const { title,visible ,confirmLoading } = this.state;
        
        const columns = [{
            title : '图书编号',
            dataIndex : 'id',
            key : 'id'
        },{
            title : '名称',
            dataIndex : 'name',
            key : 'name'
        },{
            title:'价格',
            dataIndex:'price',
            key : 'price'
        },{
            title:'借阅人编号',
            dataIndex:'owner_id',
            key : 'owner_id'
        },{
            title:'操作',
            key : 'operation',
            render : (text,record) => (
                <span type="ghost">
                    <Button size="small" onClick={() => this.editHandle(record)}>编辑</Button>
                    <Divider type="vertical" />
                    <Popconfirm title="确定要删除吗？" onConfirm={() => deleteBook(record)}>
                        <Button size="small" >删除</Button>
                    </Popconfirm>
                </span>
            )
        }];

        return (
            <div>
                <div>
                    <SearchInput addHandle={this.addHandle.bind(this)}/>
                </div>
                <Table columns={columns} dataSource={bookList} rowKey="id"/>
                <Modal 
                    title={title}
                    visible= {visible}
                    confirmLoading = {confirmLoading}
                    onCancel = {this.cancelHandle.bind(this)}
                    footer = {null}
                    destroyOnClose
                >
                    <FormLayout record={this.state.formData} comfirmHandle={this.comfirmHandle.bind(this)}/>
                </Modal>
            </div>
        );
    }
}

BookList.contextTypes = {
    store: PropTypes.object.isRequired
};

export default BookList;