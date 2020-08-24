import styled from "styled-components";

export const AdminTripsListContainer = styled.div`
  margin: 20px 10px 10px 20px;
`;

export const ItemList = styled.li`
  border: 2px solid white;
  font-size: 1.5em;
  background-color: #66d17e;
  margin: 2px;
  width: 200px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;
