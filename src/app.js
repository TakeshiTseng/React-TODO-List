import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import TodoList from './component/todo-list';


ReactDOM.render(
  <Router>
    <Route path="/" component={TodoList}></Route>
  </Router>,
  document.getElementById('app')
);
