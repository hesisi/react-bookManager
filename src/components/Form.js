import React from 'react';
import { Form , Input , Button } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol : {span : 5},
    wrapperCol : {span : 15} 
};
class FormLayout extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        this.props.comfirmHandle(this.props.form.getFieldsValue()); //获取当前表单数据并当做回调函数的参数传递给父组件
    }

    render(){
        const { getFieldDecorator ,getFeildsValue } = this.props.form;
        const { record } = this.props;
        return (
            <Form onSubmit= {this.handleSubmit.bind(this)}>
                <FormItem label="编号" {...formItemLayout}>
                        {getFieldDecorator('id', { 
                            rules: [{ required: true, message: '请输入书籍编号!' }],
                            initialValue : record ? record.id : ""
                        })(
                            <Input placeholder="请输入书籍编号"/>
                        )}
                </FormItem>
                <FormItem label="名称" {...formItemLayout}>
                    {getFieldDecorator('name', { 
                        rules: [{ required: true, message: '请输入书籍名称!' }],
                        initialValue : record ? record.name : ""
                    })(
                        <Input placeholder="请输入书籍名称"/>
                    )}
                </FormItem>
                <FormItem label="价格"  {...formItemLayout}>
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: '请输入价格!' }],
                        initialValue : record ?  record.price : ""
                    })(
                        <Input placeholder="请输入价格"/>
                    )}
                </FormItem>
                <FormItem label="借阅者编号"  {...formItemLayout}>
                    {getFieldDecorator('owner_id', { 
                        rules: [{ required: true, message: '请输入借阅者编号!' }],
                        initialValue : record ? record.owner_id :""
                    })(
                        <Input placeholder="请输入借阅者编号"/>
                    )}
                </FormItem>
                <FormItem wrapperCol={{ span: 10, offset: 10 }}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default FormLayout = Form.create()(FormLayout);