import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBi8JM0Rkpb3po6K7Re0M8vEewmMJm4BXI',
            authDomain: 'manager-9a29a.firebaseapp.com',
            databaseURL: 'https://manager-9a29a.firebaseio.com',
            storageBucket: 'manager-9a29a.appspot.com',
            messagingSenderId: '60005925310'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
