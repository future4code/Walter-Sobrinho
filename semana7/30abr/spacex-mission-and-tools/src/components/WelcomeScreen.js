import React from "react";
import styled from "styled-components";

const CorpoWScreen = styled.div`
  display: grid;
  justify-content: center;
  height: 90vh;
`;

const ImagemWScreen = styled.img`
  height: 60vh;
  width: 60vw;
`;

class WelcomeScreen extends React.Component {
  render() {
    return (
      <CorpoWScreen>
        <ImagemWScreen
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/1280px-Iridium-4_Mission_%2825557986177%29.jpg"
          alt="SpaceX"
        />
      </CorpoWScreen>
    );
  }
}

export default WelcomeScreen;
