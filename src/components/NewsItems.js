import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, discription, imgURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgURL} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}...</p>
            <a href={newsURL} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
