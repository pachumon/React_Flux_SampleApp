import appDispatcher from "../dispatcher/appDispatcher";
import actionTypes from "../constants/actionTypes";
import AuthorApi from "../Api/AuthorApi";

const InitializeAction = {
  initApp: function() {
    appDispatcher.dispatch({
      actionType: actionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

export default InitializeAction;
