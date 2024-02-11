import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetailNews({ latest, id }) {
  const params = useParams();
  console.log(params);
  return (
    <Container>
      <div className="news">
        <div className="top-card">
          <img src={latest.urlToImage} />
        </div>
        <div className="bottom-card"></div>
        <h4>{latest.title}</h4>
        <span>
          published author: <i>{latest.author}</i> | published on:
          {latest.publishedAt}
        </span>
        <p id="news-desc">{latest.description}</p>
        <div id="news-content">
          <p>{latest.content}</p>
        </div>
        <span></span>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default DetailNews;
