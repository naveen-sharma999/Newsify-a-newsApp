import React from "react";

function NewsItems(props) {
    let { title, description, imgURL, newsURL, date, source, itemsMode, Headline } = props;
    return (
      <div className="my-3">
        <div className={`card bg-${itemsMode}`} style={{width: "18rem", minHeight: "32rem"}}>
          <img src={imgURL} className="card-img-top" alt="" style={{maxHeight: "10rem"}}/>
          <div className="card-body">
            <h5 className={`card-title text-${Headline}`}>{title}</h5>
            <p className="card-text">{description} <a href={newsURL} target="_blank" className="text-decoration-none">read more...</a></p>
            <small className="text-muted">Source : {source}</small>
            <p className="card-text"><small className="text-muted">Date : {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;
