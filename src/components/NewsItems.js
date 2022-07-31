import React from "react";

function NewsItems(props) {
    let { title, description, imgURL, newsURL, date, source, itemsMode, Headline } = props;
    return (
      <div class={`card mb-3 bg-${itemsMode}`} style={{maxWidth: '100%'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={imgURL} class="img-fluid rounded-start" style={{height : '-webkit-fill-available'}} alt=""/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class={`card-title text-${Headline}`}>{title}</h5>
            <p class="card-text">{description} <a href={newsURL} target="_blank" className="text-decoration-none">read more...</a></p>
            <small className="text-muted">Source : {source}</small>
            <p class="card-text"><small class="text-muted">Date : {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewsItems;
