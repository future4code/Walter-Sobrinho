import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const ScreenContainer = styled(Card)`
  width: 99vw;
  height: 97vh;
  margin: 0 auto;
  && {
    text-align: center;
    background-color: #212121;
    opacity: 0.7;
  }
  display: flex;
  flex-direction: column;
`;

export const MatchesBox = styled.div`
  height: 100%;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border: 3px solid #b71c1c;
  border-radius: 20px;
  color: white;
  && {
    background-image: url("https://lucianocandisani.com/wp-content/gallery/animalia-a-diversidade-de-vida-na-terra/FALKLANDS_0206_02418.jpg");
    background-size: 100% 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const BotaoReseta = styled(Button)`
  margin: auto;
  width: 97%;
  && {
    background-color: #f2f2f2;
  }
`;

export const MatchesDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
