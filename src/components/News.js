import React, {useEffect, useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState()
  
  useEffect(() => {
    async function fetchMyAPI() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}&page=${page}&pageSize=15&category=${props.category}`;
    setloading( true );
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    }
    fetchMyAPI()
  }, [])

  const fetchMoreData = async() => {
      page + 1 > Math.ceil(totalResults / 15)
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}&page=${
        page + 1
      }&pageSize=15&category=${props.category}`;
      setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setpage(page + 1)
      setarticles(articles.concat(parsedData.articles))
      setloading(false)
  };

    return (
      <>
        <h2 className="text-center" style={{marginTop : '80px'}}>Top Headlines - {props.heading}</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
        <div className="container my-3">    
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 130)
                        : ""
                    }
                    imgURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
                    }
                    newsURL={element.url}
                    date={element.publishedAt}
                    source={
                      element.source.name ? element.source.name : "unknown"
                    }
                    itemsMode={props.mode}
                    Headline={props.headline}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }

export default News;
