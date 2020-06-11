import styled from "styled-components";
import Card from "@material-ui/core/Card";
import RejectIcon from "@material-ui/icons/Cancel";
import MatchIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import MatchesIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";

export const ScreenContainer = styled(Card)`
  width: 99vw;
  height: 97vh;
  margin: auto;
  && {
    background-color: #212121;
    text-align: center;
    opacity: 0.7;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FotoPerfil = styled.img`
  margin: 0 auto;
  height: 90vh;
  width: 39.5vw;
  z-index: -1;
  position: fixed;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const MatchBox = styled.div`
  /* background-image: url("https://picsum.photos/600/800"); */
  height: 100%;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  z-index: 2;
  border: 3px solid #b71c1c;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    width: 99vw;
  }
`;

export const DetalhesPerfil = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-color: #212121;
  display: flex;
  flex-direction: column-reverse;
  color: white;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-self: center;
  margin-bottom: 8vh;
`;

export const RejectButton = styled(RejectIcon)`
  cursor: pointer;
  color: #b71c1c;
  opacity: 1;
  z-index: 1;
  transform: scale(6);
  @media screen and (max-width: 500px) {
    transform: scale(3);
  }
`;

export const MatchButton = styled(MatchIcon)`
  cursor: pointer;
  color: #b71c1c;
  opacity: 1;
  z-index: 1;
  transform: scale(6);
  height: 100%;
  @media screen and (max-width: 500px) {
    transform: scale(3);
  }
`;

export const DetalhesContainer = styled.div`
  width: 100%;
  z-index: 2;
`;

export const DescriçãoTxt = styled(Typography)`
  opacity: 1;
  z-index: 2;
`;

export const Header = styled.div`
  background-color: #212121;
  height: 8vh;
  align-self: flex-end;
  margin-top: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const Matches = styled(MatchesIcon)`
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;

export const Message = styled(MessageIcon)`
  cursor: pointer;
  margin: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const A = styled(Typography)``;

export const M = styled(Typography)``;
