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
    var lastItemId = 1;
    if(this.items.length > 0) {
      let lastItem = this.items[this.items.length - 1];
      lastItemId = lastItem.itemId;
    }

    this.items.push({text: text, checked: false, itemId: lastItemId + 1});
    this.tempText = '';
  }

  handleCheckItem(itemId) {
    this.items.map((i) => {
      if(i.itemId == itemId) {
        i.checked = !i.checked;
      }
    });

  }
}

module.exports = alt.createStore(TodoListStore, 'TodoListStore');
