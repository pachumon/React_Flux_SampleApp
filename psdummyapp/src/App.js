import React, { Component } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import AuthorPage from "./components/AuthorPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import ManageAuthorPage from "./components/ManageAuthorPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container-fluid">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Authors" exact component={AuthorPage} />
                <Route path="/AddAuthor" component={ManageAuthorPage} />
                <Route path="/ManageAuthor/:id" component={ManageAuthorPage} />
                <Route path="/About" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
