import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card bg-light" style={{width: "18rem", minHeight: "28rem"}}>
          <img src={imgURL} className="card-img-top" alt="" style={{maxHeight: "10rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} more...</p>
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
