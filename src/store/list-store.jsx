import TodoListActions from '../action/list-action';

let alt = require('../alt');

class TodoListStore {
  constructor() {
    this.items = [];
  }
}

module.exports = alt.createStore(TodoListStore, 'TodoListStore');
