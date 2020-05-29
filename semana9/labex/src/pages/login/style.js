import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const BgPic = styled.img`
  height: 100%;
  width: 100%;
`;

export const LoginFormContainer = styled.div`
  height: 350px;
  width: 400px;
  background-color: #97ce4c;
  position: absolute;
  top: 40%;
  left: 30%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 10px 6px 5px 6px #2f2f2f; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 10px 6px 5px 6px #2f2f2f; /* Firefox 3.5 - 3.6 */
  box-shadow: 10px 6px 5px 6px #2f2f2f; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

export const Input = styled(TextField)`
  width: 70%;
`;

export const Botao = styled(Button)`
  background-color: #e89ac7;
  border: none;
  height: 60px;
  width: 160px;
  border-radius: 15px;
  letter-spacing: 1px;
  color: white;
  font-weight: bold;
  font-size: 1.3em;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
`;
