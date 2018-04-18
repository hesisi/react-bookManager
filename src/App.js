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

import bookReducer from './reducers/bookReducer';
import userReducer from './reducers/userReducer';
import { createStore ,applyMiddleware ,combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    book :bookReducer,
    user :userReducer
});
const store = createStore(rootReducer,applyMiddleware(thunk));

class App extends React.Component{

    render (){
        return (
            <Router onEnter={store.dispatch(requestList())}>
                <HomeLayout>
                    <div>
                        <Route path="/book/add" component={BookAdd}></Route>
                        <Route path="/book/list" component={BookList}></Route>
                        <Route path="/user/add" component={UserAdd} ></Route>
                        <Route path="/user/list" component={UserList}></Route>
                        {/* <Route path="/file/add" component={FileAdd}></Route>
                        <Route path="/file/list" component={FileList}></Route> */}
                    </div>
                </HomeLayout>
            </Router>
           
        );
    
    }
}

export default App;

