import React, { Component } from "react";
import AuthorForm from "./AuthorForm";
import authorActions from "../actions/authorActions";
import AuthorStore from "../stores/AuthorStore";
//import AuthorApi from '../Api/AuthorApi'
import toastr from "toastr";
import { Prompt } from "react-router-dom";

export default class ManageAuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: { id: "", firstName: "", lastName: "" },
      errors: {},
      isDirty: false
    };
    this.setAuthorState = this.setAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillMount() {
    let { params } = this.props.match;

    if (params !== undefined && params.id !== undefined) {
      this.setState(() => {
        
        return { author: AuthorStore.getAuthorById(params.id) };
      });
    }
  }

  setAuthorState(event) {
    this.setState(() => {
      return { isDirty: true };
    });
    var tempauthor = this.state.author;
    var field = event.target.name;
    var value = event.target.value;
    tempauthor[field] = value;
    return this.setState(() => {
      return { author: tempauthor };
    });
  }
  authorFormValid() {
    let formIsValid = true;
    let tempauthor = this.state.author;

    let errors = {};
    if (tempauthor.firstName.length < 3) {
      errors.firstName = "first name must be at least 3 characters";
      formIsValid = false;
    }
    if (tempauthor.lastName.length < 3) {
      errors.lastName = "last name must be at least 3 characters";
      formIsValid = false;
    }
    this.setState(() => {
      return { errors: errors };
    });
    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault();
    if (!this.authorFormValid()) {
      return;
    }
    this.setState(
      () => {
        return { isDirty: false };
      },
      () => {
        this.props.history.push("/Authors");
      }
    );
    if (this.state.author.id) {
      authorActions.updateAuthor(this.state.author);
    } else {
      authorActions.createAuthor(this.state.author);
    }
    //AuthorApi.saveAuthor(this.state.author);
    toastr.success("author saved");
  }

  render() {
    return (
      <div>
        <h1>manage author</h1>
        <Prompt
          when={this.state.isDirty}
          message={location => `Are you sure you want to leave`}
        />
        <AuthorForm
          {...this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
        />
      </div>
    );
  }
}
