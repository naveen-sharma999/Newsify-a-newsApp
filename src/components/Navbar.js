import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
          <div className="container-fluid"><Link className="navbar-brand" to="/">Newsify</Link>
            <div className="form-check form-switch form-check-reverse mx-3">
              <input className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckReverse" onClick={props.toggleMode}/>
              <label className="form-check-label text-muted" htmlFor="flexSwitchCheckReverse">Dark-Mode {props.btnText}</label>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="To" aria-current="page" to="/">Home</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link> </li>
                <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
