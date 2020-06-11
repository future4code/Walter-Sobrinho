import React from "react";
import styled from "styled-components";
import axios from "axios";

const CorpoLaunch = styled.div``;

class Lancamento extends React.Component {
  state = {
    launches: [],
  };

  componentDidMount() {
    const launches = axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        console.log(response.data);
      });

    this.setState({ launches: launches });
  }
  render() {
    console.log(this.state.launches);
    return <CorpoLaunch></CorpoLaunch>;
  }
}

export default Lancamento;
