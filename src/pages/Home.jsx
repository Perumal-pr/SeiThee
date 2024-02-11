import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LatestNews } from "../utils/store/newsSlice";
import NewsList from "../components/NewsList";

function Home({ searchLoaded, searchdata }) {
  const dispatch = useDispatch();
  const [latestNews, setLatestNews] = useState();
  const isLoaded = useSelector((state) => state.news.isLoaded);
  const data = useSelector((state) => state.news.latest);

  useEffect(() => {
    dispatch(LatestNews());
  }, []);
  useEffect(() => {
    if (isLoaded) {
      if (Array.isArray(data)) setLatestNews(data);
    }
  }, [isLoaded, data]);
  return (
    <div>
      <NewsList
        latestNews={latestNews}
        searchdata={searchdata}
        searchLoaded={searchLoaded}
      />
    </div>
  );
}

export default Home;
