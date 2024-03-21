import { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import StyledComponent from "styled-components";

const Menu = ({ SearchHandler }) => {
  const [category, setCategory] = useState();
  useEffect(() => {
    SearchHandler(category);
  });
  return (
    <Container>
      <select name="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="tamil nadu">tamil nadu</option>
        <option value="sports">sports</option>
        <option value="politics">politics</option>
        <option value="travel">travel</option>
        <option value="weather">weather</option>
      </select>
    </Container>
  );
};

const Container = StyledComponent.div`
select {
    background-color: black;
    color: white;
    box-shadow: 1px 4px 1px 1px rgba(0, 0, 0, 0.2);
}
`;

export default Menu;
