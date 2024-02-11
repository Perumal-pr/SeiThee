import React, { useState, useEffect } from "react";
import uuid from "uuid";
import Cards from "../components/Cards";
import styled from "styled-components";

function NewsList({ latestNews, searchdata, searchLoaded }) {
  const [news, setNews] = useState();
  useEffect(() => {
    if (searchLoaded === true) {
      setNews(searchdata);
    } else {
      setNews(latestNews);
    }
  }, [searchLoaded, searchdata, latestNews]);

  return (
    <div>
      {Array.isArray(news) ? (
        news.map((latest) => {
          let id = uuid.v4();
          return (
            <Container>
              <Cards latest={latest} key={id} id={id} />
            </Container>
          );
        })
      ) : (
        <L1>Loading...</L1>
      )}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 5rem;
  padding: 0.2rem;
`;

const L1 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NewsList;
