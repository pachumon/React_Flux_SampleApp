import React, { Component } from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

export default class AuthorForm extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,  
    onSave:PropTypes.func.isRequired,     
    errors: PropTypes.object
  };
  render() {   
    return (
      <div>
        <form noValidate>
          <TextInput
            name="firstName"
            label="First Na<mes"
            value={this.props.firstName}
            onChange={this.props.onChange}
            error={this.props.errors.firstName}
          />
          <br />
          <TextInput
            name="lastName"
            label="Last Name"
            value={this.props.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName}
          />
          <br />
          <input
            type="submit"
            value="save"
            className="btn btn-info"
            onClick={this.props.onSave}
            error={this.props.errors.lastName}
          />
        </form>
      </div>
    );
  }
}
