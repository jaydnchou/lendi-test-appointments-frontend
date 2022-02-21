import React from "react";
import { format } from "date-fns-tz";
import styled from "styled-components";

import { useAppointment } from "../AppointmentProvider";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: #f4f7f8;
  font-size: 24px;
  justify-content: space-between;
  padding: 0 24px 0 24px;
  height: 64px;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Brand = styled.div`
  font-size: 1.6rem;
  width: auto;
`;

const Text = styled.p`
  font-size: 1rem;
`;

const Navigation = () => {
  const [appointment] = useAppointment();
  const appointmentDate = appointment?.date;
  const name = appointment?.name;

  return (
    <Wrapper>
      <Content>
        {!appointmentDate || !name ? null : (
          <Text>
            Currently selected appointment: {format(new Date(appointmentDate), "PPP")} with {name}
          </Text>
        )}
      </Content>
      <Brand>Lendi</Brand>
    </Wrapper>
  );
};

export default Navigation;
