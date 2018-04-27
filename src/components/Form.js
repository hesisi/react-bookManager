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
        const comfirmHandle =  this.props.comfirmHandle;
        const fieldsValue = this.props.form.getFieldsValue();

        //表单校验
        this.props.form.validateFields(function(errors,value){
            //校验通过
            if(!errors){
                comfirmHandle(fieldsValue); //获取当前表单数据并当做回调函数的参数传递给父组件
            }
        });
       
    }

    render(){
        const { getFieldDecorator ,getFeildsValue } = this.props.form;
        const { record } = this.props;

        return (
            <Form onSubmit= {this.handleSubmit.bind(this)}>
                <FormItem label="编号" {...formItemLayout} style={{display:'none'}}>
                    {getFieldDecorator('id', { 
                        initialValue : record ? record.id : ""
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="名称" {...formItemLayout}>
                    {getFieldDecorator('name', { 
                        rules: [{ 
                            required: true, message: '请输入书籍名称!'
                        }],
                        initialValue : record ? record.name : ""
                    })(
                        <Input placeholder="请输入书籍名称"/>
                    )}
                </FormItem>
                <FormItem label="价格"  {...formItemLayout}>
                    {getFieldDecorator('price', {
                        rules: [{ 
                            required: true, message: '请输入价格!' 
                        },{
                            pattern : /(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/,message:'请输入正确的金额'
                        }],
                        initialValue : record ?  record.price : ""
                    })(
                        <Input placeholder="请输入价格" />
                    )}
                </FormItem>
                <FormItem label="借阅者编号"  {...formItemLayout}>
                    {getFieldDecorator('owner_id', { 
                        rules: [{ 
                            required: true, message: '请输入借阅者编号!' 
                        },{
                            pattern : /^(\d{5})$/,message:'请输入5位数字'
                        }],
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