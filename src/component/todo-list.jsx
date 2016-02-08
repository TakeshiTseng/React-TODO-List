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
    if(this.props.checked) {
      return (<li onClick={this._onChecked} className='list-item'>
        <a href="#"><s>{this.props.text}</s> (Done !)</a>
      </li>);
    } else {
      return (<li className='list-item' onClick={this._onChecked}>
        <a href="#">{this.props.text}</a>
      </li>);
    }
  }
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TodoListStore.getState();
  }

  componentDidMount() {
    TodoListStore.listen(this.onStateChange);
  }

  componentWillUnmount() {
    TodoListStore.unlisten(this.onStateChange);
  }

  onStateChange(state) {
    this.setState(state);
  }

  render() {
  }
};

export default TodoList;
