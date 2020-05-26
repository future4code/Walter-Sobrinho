import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import { SubsPageContainer, BgImage, FormWrapper, Input } from "./style";

function SubsPage() {
  return (
    <SubsPageContainer>
      <Header />
      <BgImage src="https://wallpaperaccess.com/full/401057.jpg" />
      <FormWrapper>
        <Input />
        <Input />
      </FormWrapper>
    </SubsPageContainer>
  );
}

export default SubsPage;
