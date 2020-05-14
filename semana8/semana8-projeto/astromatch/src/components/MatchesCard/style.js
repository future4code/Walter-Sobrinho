import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const CardContainer = styled(Paper)`
  height: 20vh;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  && {
    background-color: #212121;
    opacity: 0.9;
    color: white;
  }
  width: 90%;
  margin: auto;
  -webkit-box-shadow: 5px 5px 5px 7px #000000; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 5px 5px 5px 7px #000000; /* Firefox 3.5 - 3.6 */
  box-shadow: 5px 5px 5px 7px #000000; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const NomeContainer = styled(Typography)``;
