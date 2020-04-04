import React, { Component } from "react";
import {Link} from "react-router-dom"
class NotFound extends Component {
  render() {
    return (
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-md-12">
              <div className="error-template">
                <h1>Ops!</h1>
                <h2>error 404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error occured. The requested page was not found
                </div>
                <div className="error-actions mb-3">
                    <Link to="/" className="btn btn-outline-primary btn-lg ml-2 mr-2">
                        <i className="fas fa-home"></i>&nbsp; Back To Home
                    </Link>
                    <Link className="btn btn-outline-secondy btn-lg ml-2 mr-2">
                        <i className="fas fa-envelope"></i>&nbsp; Support
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
