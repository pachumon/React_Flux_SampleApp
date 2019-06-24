import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>about</h1>
        <p>app uses following technologies</p>
        <ul>
          <li>react</li>
          <li>react router</li>
          <li>flux</li>
          <li>node</li>
          <li>webpack</li>
        </ul>
        <Prompt
          when={true}
          message={location =>
            `Are you sure you want to go to leave`
          }
        />
      </div>
    );
  }
}
