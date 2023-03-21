import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import "./WelcomeMessage.css";
function WelcomeMessage(props) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const size = 12;
  useEffect(() => {
    fetchData();
    async function fetchData() {
      props.setProgress(15);
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=6ab97f38f51f437ea8d6d4544045fd87&pageSize=${size}&page=${pageNumber}`;
      setLoading(true);
      let sentData = await fetch(url);
      props.setProgress(35);
      let parsedData = await sentData.json();
      props.setProgress(55);
      setData(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      props.setProgress(75);
      setLoading(false);
      console.log(parsedData.articles);
      props.setProgress(100);
    }
  }, [pageNumber]);

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (totalResults / size > pageNumber) {
      setPageNumber((prev) => prev + 1);
    }
    console.log(totalResults);
  };

  return (
    <>
      <h2 className="sub-heading">Top {props.category} Headlines in India</h2>
      <div className="news-items">
        {isLoading && <Spinner />}
        {data.length > 0 &&
          !isLoading &&
          data.map((news) => (
            <NewsCard
              key={news.url}
              news={news.title}
              urlToImage={news.urlToImage}
              src={news.url}
              date={new Date(Date.parse(news.publishedAt))}
            />
          ))}
      </div>
      {!isLoading && (
        <div className="page-navigation">
          <button onClick={handlePreviousPage} disabled={pageNumber <= 1}>
            &larr; Previous page
          </button>
          <button
            onClick={handleNextPage}
            disabled={totalResults / size < pageNumber}
          >
            Next page &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default WelcomeMessage;
