import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  background-color: #f4f7f8;
  color: #9e9e9e;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
`;

type AppointLabelProps = {
  count: number;
};

const AppointmentLabel = ({ count }: AppointLabelProps) => {
  const label = count === 0 ? null : count > 1 ? "appointments" : "appointment";
  return (
    <Label>
      {!label ? null : `${count} ${label}`}
    </Label>
  );
};

export default AppointmentLabel;
