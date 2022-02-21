import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import AppointmentSelect from "./AppointmentSelect";
import { AppointmentProvider } from "./AppointmentProvider";

const Wrapper = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fcfcfc;
  flex-grow: 1;
  padding: 24px;
  width: 100%;
`;

const Heading = styled.h1`
  display: block;
  font-size: 32px;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Root = () => {
  return (
    <Wrapper>
      <AppointmentProvider>
        <Navigation />
        <Content>
          <Heading>Broker appointments</Heading>
          <AppointmentSelect />
        </Content>
      </AppointmentProvider>
    </Wrapper>
  );
};

export default Root;
