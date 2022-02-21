import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AppointmentDetails from "./AppointmentDetails";
import Broker from "./Broker";

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  height: 100%;
`;

const BrokerContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 60%;
`;

type BrokerAppointments = {
  id: number;
  name: string;
  appointments: { id: number; brokerId: number; date: string }[];
}[];

const AppointmentSelect = () => {
  const [brokers, setBrokers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchBrokers = async () => {
      const res = await axios.get("http://localhost:8080/brokers");
      setBrokers(res.data);
    };

    const fetchAppointments = async () => {
      const app = await axios.get("http://localhost:8080/appointments");
      setAppointments(app.data);
    };

    fetchBrokers();
    fetchAppointments();
  }, []);

  const brokerAppointments: BrokerAppointments = brokers.map(({ id, name }) => ({
    id,
    name,
    appointments: appointments.filter((appointment) => {
      const { brokerId } = appointment;
      if (id === brokerId) {
        return appointment;
      }
    }),
  }));

  return (
    <Wrapper>
      <BrokerContainer>
        {brokerAppointments.map((broker) => (
          <Broker key={broker.id} broker={broker} />
        ))}
      </BrokerContainer>
      <AppointmentDetails />
    </Wrapper>
  );
};

export default AppointmentSelect;
