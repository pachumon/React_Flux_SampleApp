import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AuthorRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default function AuthorRow({ author, onClick }) {
  return (
    <tr>
      <td>
        <Link to={"/ManageAuthor/" + author.id}>{author.id}</Link>
      </td>
      <td>
        {author.firstName} {author.lastName}
      </td>
      <td>
        <a href="#" onClick={event => onClick(author.id, event)}>
          Delete this
        </a>
      </td>
    </tr>
  );
}
