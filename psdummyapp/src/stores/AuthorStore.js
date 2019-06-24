import appDispatcher from "../dispatcher/appDispatcher";
import actionTypes from "../constants/actionTypes";
import { EventEmitter } from "events";
import { find, indexOf, remove } from "lodash";
const CHANGE_EVENT = "change";
let _authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListerner: function(cb) {
    //this is a method exposed by eventemitter to register event listeners
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListerner: function(cb) {
    //this is a method exposed by eventemitter to remove event listeners
    this.removeListener(CHANGE_EVENT, cb);
  },

  emitChange: function() {
    //this is a method exposed by eventemitter to transmit event to listeners
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return find(_authors, { id: id });
  }
});

appDispatcher.register(function(action) {
  switch (action.actionType) {
    case actionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case actionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case actionTypes.UPDATE_AUTHOR:
      let existingAuthor = find(_authors, { id: action.author.id });
      let existingAuthorIndex = indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case actionTypes.DELETE_AUTHOR:
      remove(_authors, author => {
        return author.id === action.id;
      });
      AuthorStore.emitChange();
      break;
    default:
  }
});

export default AuthorStore;
