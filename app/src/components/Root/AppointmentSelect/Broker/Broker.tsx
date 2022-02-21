import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { format } from "date-fns-tz";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";

import AppointmentLabel from "./AppointmentLabel";
import { useAppointment } from "../../AppointmentProvider";

const BrokerItem = styled.li`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px #aaa;
  box-sizing: border-box;
  cursor: ${({ count }) => count ? "pointer" : "default" };
  font-size: 1rem;
  padding: 0 16px;
  margin: 0;
  justify-content: space-between;
  height: 56px;
  width: 100%;
`;

const LabelContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AppointmentButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #f4f7f8;
  border: none;
  cursor: pointer;
  font-family: "Raleway";
  padding: 0 32px;
  height: 56px;
  width: 100%;
`;

const ListContainer = styled.ul`
  padding: 0;
  width: 100%;
  & > li {
    list-style-type: none;
    padding: 4px;
  }
`;

const ScrollableContent = styled.div`
  display: flex;
  height: fit-content;
  max-height: 400px;
  margin: 4px 0;
  width: 100%;
  overflow: scroll;
`;

export interface BrokerProps {
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
}

const Broker = ({ broker }: BrokerProps) => {
  const [selected, setSelected] = useAppointment();
  const [open, setOpen] = React.useState(false);
  const { name, appointments } = broker;
  const appointmentCount: number = appointments?.length;

  if (!appointmentCount) {
    return (
      <BrokerItem>{name}</BrokerItem>
    );
  }

  const onToggle = () => {
    setOpen(open => !open);
    if (selected.date) {
      setSelected({});
    }
  };

  return (
    <>
      <BrokerItem onClick={onToggle} count={appointmentCount}>
        {name}
        <LabelContainer>
          <AppointmentLabel count={appointmentCount} />
          {open ? <FaCaretUp /> : <FaCaretDown />}
        </LabelContainer>
      </BrokerItem>

      <Collapse
        aria-hidden={open ? "false" : "true"}
        transition={`height 300ms cubic-bezier(0.4, 0, 0.2, 1)`}
        isOpen={open}>
        <ScrollableContent>
          <ListContainer>
            {appointments.map(appointment => {
                const date = new Date(appointment.date);
              return (
                  <li key={appointment.id}>
                    <AppointmentButton
                      onClick={() => setSelected({ name, ...appointment })}>
                        {format(date, "PPPP")}
                    </AppointmentButton>
                  </li>
                );
            })}
          </ListContainer>
        </ScrollableContent>
      </Collapse>
    </>
  );
};

export default Broker;
