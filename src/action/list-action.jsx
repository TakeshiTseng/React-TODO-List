let alt = require('../alt');

class TodoListActions {

  addItem(text) {
    return text;
  }

  checkItem(itemId) {
    return itemId;
  }
}

module.exports = alt.createActions(TodoListActions);
