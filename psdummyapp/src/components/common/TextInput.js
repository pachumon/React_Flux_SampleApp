import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
  };

  render() {
        
    let wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " is-invalid";
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input
            type="text"
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="is-invalid">{this.props.error}</div>
        </div>
      </div>
    );
  }
}
