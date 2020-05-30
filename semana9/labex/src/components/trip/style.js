import styled from "styled-components";
import Typhography from "@material-ui/core/Typography";
import Carousel from "react-bootstrap/Carousel";

export const DisplayContainer = styled.div`
  border-radius: 20px;
  height: 45vh;
  width: 50vw;
  position: absolute;
  margin: 45% auto 0%;
  -webkit-box-shadow: 5px 5px 5px 7px #000000; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 5px 5px 5px 7px #000000; /* Firefox 3.5 - 3.6 */
  box-shadow: 5px 5px 5px 7px #141527; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const FotoDisplay = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const Texto = styled(Typhography)``;

export const InfoBox = styled.div`
  background-color: #62a4ab;
  border-radius: 40px;
  bottom: 20px;
  color: #f9bf1e;
  padding: 20px;
  position: absolute;
  opacity: 0.7;
  width: 95%;
  transition: 1800ms;
  clip-path: circle(80px at 85% 50%);
  transition: 500ms ease-in-out;

  &:hover {
    clip-path: circle(1200px at 100% -20%);
    opacity: 0.9;
  }
`;

export const LittleCard = styled.div`
  background-color: #97ce4c;
  border: 5px solid white;
  text-align: center;
  height: 250px;
  width: 200px;
  cursor: pointer;
`;

export const TripListContainer = styled.div`
  display: flex;
  width: 40vw;
  height: 40vh;
  flex-direction: row;
  border-radius: 10px;
  position: absolute;
  top: 12%;
  left: 10%;
`;

export const LittleCardPic = styled.img`
  height: 100px;
  width: 150px;
  border-radius: 10px;
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
