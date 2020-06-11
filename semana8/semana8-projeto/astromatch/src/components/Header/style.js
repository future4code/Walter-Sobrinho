import styled from "styled-components";
import MessageIcon from "@material-ui/icons/Message";
import Typography from "@material-ui/core/Typography";
import MatchesIcon from "@material-ui/icons/Group";

export const HeaderContainer = styled.div`
  background-color: #212121;
  height: 8vh;
  align-self: flex-end;
  margin-top: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const MatchIcon = styled(MatchesIcon)`
  cursor: pointer;
  margin: auto;
`;

export const Message = styled(MessageIcon)`
  cursor: pointer;
  margin: auto;
`;

export const Logo = styled.img`
  width: 80px;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const A = styled(Typography)``;

export const M = styled(Typography)``;
