import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Cards({ latest, id }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to={latest.url}>
        <div className="news">
          <div className="top-card">
            <img src={latest.image} />
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
      </Link>
    </Container>
  );
}

const Container = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  a:active {
    text-decoration: none;
  }
  cursor: pointer;
  width: 35rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.5rem;
  span {
    font-size: 0.8rem;
  }
  p {
    font-size: 1rem;
  }
  #news-content {
    display: none;
  }
  img {
    width: 35rem;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  &:hover {
    width: 38rem;
    img {
      width: 38rem;
    }
    #news-content {
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    width: fit-content;
    img {
      width: 100%;
    }
    &:hover {
      width: fit-content;
      img {
        width: 100%;
      }
    }
  }
`;

export default Cards;
