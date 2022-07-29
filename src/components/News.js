import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8bdd32d61ea43b4a6bc6efba080701b&page=1&pageSize=15&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handelNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8bdd32d61ea43b4a6bc6efba080701b&page=${this.state.page + 1}&pageSize=15&category=${this.props.category}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handelPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8bdd32d61ea43b4a6bc6efba080701b&page=${this.state.page + -1}&pageSize=15&category=${this.props.category}`;
    console.log(`${this.props.category}`)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + -1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-4">Top Headlines - India</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          { !this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0,110)}
                  description={element.description ? element.description.slice(0, 90) : ""}
                  imgURL={element.urlToImage ? element.urlToImage : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"}newsURL={element.url}/>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="btn-toolbar mb-3"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-outline-success"
                onClick={this.handelPrevClick}
              >
                <b>&lt;</b>
              </button>
              <button type="button" className="btn btn-outline-success">
                1
              </button>
              <button type="button" className="btn btn-outline-success">
                2
              </button>
              <button
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
                }
                type="button"
                className="btn btn-outline-success"
                onClick={this.handelNextClick}
              >
                <b>&gt;</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
