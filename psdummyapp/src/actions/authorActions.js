import dispatcher from "../dispatcher/appDispatcher";
import AuthorApi from "../Api/AuthorApi";
import ActionType from "../constants/actionTypes";

const AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);
    dispatcher.dispatch({
      actionType: ActionType.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);
    dispatcher.dispatch({
      actionType: ActionType.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },
  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id);
    dispatcher.dispatch({
      actionType: ActionType.DELETE_AUTHOR,
      id: id
    });
  }
};

export default AuthorActions;
