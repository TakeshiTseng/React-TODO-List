import TodoListActions from '../action/list-action';

let alt = require('../alt');

class TodoListStore {
  constructor() {
    this.items = [];
    this.tempText = '';

    this.bindListeners({
      handleAddItem: TodoListActions.ADD_ITEM,
      handleCheckItem: TodoListActions.CHECK_ITEM
    });
  }

  handleAddItem(text) {
  }

  handleCheckItem(itemId) {
  }
}

module.exports = alt.createStore(TodoListStore, 'TodoListStore');
