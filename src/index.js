import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { bootPosts } from './actions/posts'
import { fetchComments } from './actions/comments'
import { bootCategories } from './actions/categories'

const logger = store => next => action => {
   console.group(action.type)
   console.info('dispatching', action)
   let result = next(action)
   console.log('next state', store.getState())
   console.groupEnd(action.type)
   return result
 }

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 const store = createStore(
   reducer,
   composeEnhancers(
     applyMiddleware(thunkMiddleware, logger)
   )
 )

// store.dispatch(bootPosts())
// store.dispatch(fetchComments('6ni6ok3ym7mf1p33lnez'))
store.dispatch(bootCategories())

 ReactDOM.render(
   <Provider store={store} >
     <BrowserRouter><App /></BrowserRouter>
   </Provider>, document.getElementById('root'));
 registerServiceWorker();
