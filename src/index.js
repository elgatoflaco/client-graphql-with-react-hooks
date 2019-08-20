import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import './index.css';
import App from './App';
import Character from './Character';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router";

const client = new ApolloClient ({
	uri: 'https://rickandmortyapi.com/graphql/' 
})

ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <App path="/"/>
        <Character path="character/:id"/>
    </Router>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
