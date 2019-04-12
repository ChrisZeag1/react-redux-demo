import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import  { TodoApp } from './main';
import { todoAppReducer } from './reducers';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createStore(todoAppReducer)}>
     <TodoApp/>
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
