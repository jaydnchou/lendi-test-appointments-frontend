import React from "react";
import { format } from "date-fns-tz";
import styled from "styled-components";

import { useAppointment } from "../../AppointmentProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px #aaa;
  box-sizing: border-box;
  border-radius: 8px;
  flex-grow: 1;
  gap: 40px;
  padding: 24px;
  height: fit-content;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Primary = styled.strong.attrs({ role: "body", level: 2 })`
  font-weight: bold;
  font-size: 32px;
`;
const Secondary = styled.p`
  color: #9e9e9e;
  font-size: 24px;
  margin: 0;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7f8;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
  width: 40%;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 1.5rem;
  width: 100%;
`;

type SummaryProps = {
  primary: string;
  secondary: string;
};

const Summary = ({ primary, secondary }: SummaryProps) => {
  return (
    <SummaryWrapper>
      <Primary>{primary}</Primary>
      <Secondary>{secondary}</Secondary>
    </SummaryWrapper>
  );
};

const AppointmentDetails = () => {
  const [selectedAppointment] = useAppointment();
  const appointmentDate = selectedAppointment?.date;

  if (!appointmentDate) {
    return null;
  }
  
  const date = new Date(appointmentDate);
  const day = format(date, "dd");
  const month = format(date, "MMMM").toLocaleLowerCase();
  const hour = format(date, "hh");
  const minutes = format(date, "mm");
  const meridiem = format(date, "bbb");

  return (
    <Wrapper>
      <Header>
        <Heading>Appointment details</Heading>
      </Header>
      <Content>
        <Summary primary={day} secondary={month} />
        <Summary primary={`${hour}:${minutes}`} secondary={meridiem} />
      </Content>
    </Wrapper>
  );
};

export default AppointmentDetails;
