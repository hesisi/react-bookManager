import React from 'react';
import { Input ,Row ,Col ,Button } from 'antd'; 

const Search = Input.Search;
class SearchInput extends React.Component{
    render(){
        return (
            //利用栅格系统，使searchInput和button在同一行
            <div>
                <Row>
                    <Col span={10}>
                        <Search
                            placeholder="输入编号查询..."
                            onSearch = {value => console.log(value)}
                            style={{ width:400 ,marginBottom :20}}
                            enterButton = "搜索"
                        />
                    </Col>
                    <Col span={3}>
                        <Button type="primary" onClick={this.props.addHandle}>添加</Button>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default SearchInput;