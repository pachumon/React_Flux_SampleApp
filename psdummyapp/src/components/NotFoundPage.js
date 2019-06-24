import React from "react";
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="jumbotron">
      Sorry, the page you are looking for does not exist
      <br/>
      Back to <Link to='/'>Home</Link>
    </div>
  );
}
