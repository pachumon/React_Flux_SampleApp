import React from "react";
import AuthorRow from "./AuthorRow";

export default function AuthorList({ authors, onClick }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(item => (
            <AuthorRow key={item.id} author={item} onClick={onClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
