import React, { Component } from "react";
import {Link} from "react-router-dom"
class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                title="samsun"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6779.047081027732!2d36.340060383453206!3d41.28716306482156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877b86e021ecf%3A0x4e0148450419c69c!2zQnVsdmFyIEFWTSBZYcWfYW0gdmUgQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2str!4v1586005624222!5m2!1str!2str"
                width="100%"
                height="315"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contacts Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                ></textarea>
                <Link className="btn btn-outline-primary text-uppercase mt-3">
                    <i className="fa-paper-plane-o" aria-hidden="true"></i>
                    <i className="fab fa-telegram-plane"></i>&nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
