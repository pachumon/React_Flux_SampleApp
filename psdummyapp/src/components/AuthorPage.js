import React, { Component } from "react";
// import AuthorApi from "../Api/AuthorApi";
import AuthorStore from "../stores/AuthorStore";
import authorActions from "../actions/authorActions";
import AuthorList from "./AuthorList";
import { Link } from "react-router-dom";
import toastr from "toastr";

export default class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = { authors: AuthorStore.getAllAuthors() };
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AuthorStore.addChangeListerner(this._onChange);
  }
  componentWillUnmount() {
    
    AuthorStore.removeChangeListerner(this._onChange);
  }

  _onChange() {
    this.setState(() => {
      return { authors: AuthorStore.getAllAuthors() };
    });
  }

  deleteAuthor(id, event) {
    event.preventDefault();
    authorActions.deleteAuthor(id);
    toastr.success("Author deleted");
  }

  // componentDidMount() {
  //   this.setState(() => {
  //     return { authors: AuthorApi.getAllAuthors() };
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="/AddAuthor" className="btn btn-outline-secondary">
          Add Authors
        </Link>
        <br />
        <br />
        <AuthorList authors={this.state.authors} onClick={this.deleteAuthor} />
      </div>
    );
  }
}
