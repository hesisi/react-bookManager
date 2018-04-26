import React from 'react';
import { Table ,Button ,Popconfirm ,Divider ,Modal} from 'antd';
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
            console.log("========请求booklist："+JSON.stringify(res)); //一直都有返回参数
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
        this.setState({
            visible : false,
            formData : data
        })

        let { operation } = this.state;
        const { formData } = this.state;

        if(operation === "edit"){
            this.props.editBook(formData);
        }else{
            this.props.addBook(formData);
        }
        
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
        //console.log("===================booklist props:"+JSON.stringify(this.props));
        
        const columns = [{
            title : '图书编号',
            dataIndex : 'id'
        },{
            title : '名称',
            dataIndex : 'name'
        },{
            title:'价格',
            dataIndex:'price'
        },{
            title:'借阅人编号',
            dataIndex:'owner_id'
        },{
            title:'操作',
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
                <Table columns={columns} dataSource={bookList}/>
                <Modal 
                    title={title}
                    visible= {visible}
                    confirmLoading = {confirmLoading}
                    onCancel = {() => this.cancelHandle()}
                    footer = {null}
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