import TodoListStore from '../store/list-store';
import TodoListActions from '../action/list-action';
import React from 'react';
import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/todo-list.css';


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: props.checked, text: props.text, itemId: props.itemId};
    this._onChecked = this._onChecked.bind(this);
  }

  _onChecked() {
    const itemId = this.state.itemId;
    TodoListActions.checkItem(itemId);
  }

  render() {
  }
};
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TodoListStore.getState();
  }
  render() {
  }
};

export default TodoList;
