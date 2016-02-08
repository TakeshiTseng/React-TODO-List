import TodoListActions from '../action/list-action';

let alt = require('../alt');

class TodoListStore {
  constructor() {
    this.items = [];
  handleAddItem(text) {
  }

  handleCheckItem(itemId) {
  }
}

module.exports = alt.createStore(TodoListStore, 'TodoListStore');
