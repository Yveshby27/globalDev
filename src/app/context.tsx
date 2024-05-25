"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}
export interface ContextProps {
  clientCountry: string;
  destinationCountry: string;
  clientTimezone: string;
  destinationTimezone: string;
  isClientPage: boolean;
  setClientCountry(country: string): void;
  setDestinationCountry(country: string): void;
  setClientTimezone(timezone: string): void;
  setDestinationTimezone(timezone: string): void;
  setIsClientPage(isClientPage: boolean): void;
}

const Context = createContext<ContextProps>({
  clientCountry: "",
  destinationCountry: "",
  clientTimezone: "",
  destinationTimezone: "",
  isClientPage: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setClientCountry(country: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDestinationCountry(country: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsClientPage(isClientPage: boolean) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setClientTimezone(timezone: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDestinationTimezone(timezone: string) {},
});

export const ContextProvider = ({ children }: Props) => {
  const [clientCountry, setClient] = useState("");
  const [destinationCountry, setDestination] = useState("");
  const [clientTimezone, setClientTime] = useState("");
  const [destinationTimezone, setDestinationTime] = useState("");
  const [isClientPage, setClientPage] = useState(true);
  const setClientCountry = (country: string) => {
    setClient(country);
  };
  const setDestinationCountry = (country: string) => {
    setDestination(country);
  };
  const setIsClientPage = (isClientPage: boolean) => {
    setClientPage(isClientPage);
  };
  const setClientTimezone = (timezone: string) => {
    setClientTime(timezone);
  };
  const setDestinationTimezone = (timezone: string) => {
    setDestinationTime(timezone);
  };
  return (
    <>
      <Context.Provider
        value={{
          clientCountry,
          destinationCountry,
          setClientCountry,
          setDestinationCountry,
          isClientPage,
          setIsClientPage,
          clientTimezone,
          destinationTimezone,
          setClientTimezone,
          setDestinationTimezone,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useInfoContext = () => useContext(Context);
