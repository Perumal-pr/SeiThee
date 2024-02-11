import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailNews from "./pages/DetailNews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { SearchNews } from "./utils/store/newsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const SearchHandler = (data) => {
    dispatch(SearchNews(data));
  };
  const searchLoaded = useSelector((state) => state.news.searchLoaded);
  const searchdata = useSelector((state) => state.news.search);

  return (
    <>
      <BrowserRouter>
        <Header SearchHandler={SearchHandler} />
        <Routes>
          <Route
            path="/"
            element={
              <Home searchLoaded={searchLoaded} searchdata={searchdata} />
            }
          />
          <Route path="/:id" element={<DetailNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
