import React from "react";
import styled from "styled-components";

const CorpoWScreen = styled.div`
  display: flex;
  height: 60%;
  width: 60%;
  justify-content: center;
`;

const ImagemWScreen = styled.img`
  height: 100%;
  width: 100%;
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
