import React, { createContext, useContext, useState } from "react";

const AppointmentContext = createContext({});

export function useAppointment() {
  const context = useContext(AppointmentContext);
  return context;
}

export function AppointmentProvider({ children }: any) {
  const [state, setState] = useState(AppointmentContext);

  return <AppointmentContext.Provider value={[state, setState]}>{children}</AppointmentContext.Provider>;
}
