import React from "react";
import styled from "styled-components";
const CorpoSobre = styled.div`
  background: rgb(192, 75, 242);
  background: linear-gradient(
    90deg,
    rgba(192, 75, 242, 1) 0%,
    rgba(98, 50, 166, 0.8911939775910365) 24%,
    rgba(32, 68, 140, 1) 54%,
    rgba(61, 113, 217, 0.8799894957983193) 80%,
    rgba(20, 70, 115, 1) 100%
  );
`;

class Sobre extends React.Component {
  render() {
    return <CorpoSobre></CorpoSobre>;
  }
}

export default Sobre;
