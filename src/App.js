import React, { Component } from 'react'; import ReactDOM from 'react-dom'; 
import HomeLayout from './layouts/HomeLayout';
import BookAdd from './components/BookAdd';
import BookList from './components/BookList';
import UserAdd from './components/UserAdd';
import UserList from './components/UserList';
import FileAdd from './components/FileAdd';
import FileList from './components/FileList';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker'; 

class App extends React.Component{
    render (){
        return (
            <Router>
                <HomeLayout>
                    <div>
                        <Route path="/book/add" component={BookAdd}></Route>
                        <Route path="/book/list" component={BookList}></Route>
                        <Route path="/user/add" compoennt={UserAdd}></Route>
                        <Route path="/user/list" compoennt={UserList}></Route>
                        <Route path="/file/add" compoennt={FileAdd}></Route>
                        <Route path="/file/list" compoennt={FileList}></Route>
                    </div>
                </HomeLayout>
            </Router>
        );
    
    }
}

export default App;

