import React from 'react'; 
import ReactDOM from 'react-dom'; 
import HomeLayout from './layouts/HomeLayout';

import BookAdd from './components/BookAdd';
import BookListContainer from './containers/BookList';
import UserAdd from './components/UserAdd';
import UserListContainer from './components/UserList';
import FileAdd from './components/FileAdd';
import FileList from './components/FileList';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker'; 

{/*
    store的数据结构

    store = {
        bookReducer : {
            data : [{},{}]
        },

        userReducer : {
            data : [{},{}]
        }
    }

*/}

class App extends React.Component{
    render (){
        return (
            <Router>
                <HomeLayout>  
                    <div>
                        <Route path="/book/add" component={BookAdd}></Route>
                        <Route path="/book/list" component={BookListContainer}></Route>
                        <Route path="/user/add" component={UserAdd} ></Route>
                        <Route path="/user/list" component={UserListContainer}></Route>
                        <Route path="/file/add" component={FileAdd}></Route>
                        <Route path="/file/list" component={FileList}></Route>
                    </div>
                </HomeLayout>
            </Router>
        );
    
    }
}


export default App;

