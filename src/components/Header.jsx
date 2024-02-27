import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../App.css";
function Header({ SearchHandler }) {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <div className="title">
          <h2>
            <span>
              <i>Sei</i>
            </span>
            <i>Thee</i>
          </h2>
        </div>

        <div className="search-bar">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key == "Enter" && SearchHandler(search)}
          />
          <FaSearch onClick={() => SearchHandler(search)} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: #fc0303;
  justify-content: space-around;
  align-items: center;
  span {
    color: #f77a0c;
  }
  input {
    width: 14rem;
    height: 1.6rem;
    outline: none;
    margin-left: 1px;
    font-size: 1rem;
    border: none;
    border-radius: 0.2rem;
  }
  svg {
    color: black;
    height: 1.7rem;
    width: 1.2rem;
    cursor: pointer;
  }
`;

export default Header;
