"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}
export interface ContextProps {
  clientCountry: string;
  destinationCountry: string;
  setClientCountry(country: string): void;
  setDestinationCountry(country: string): void;
}

const Context = createContext<ContextProps>({
  clientCountry: "",
  destinationCountry: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setClientCountry(country: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDestinationCountry(country: string) {},
});

export const ContextProvider = ({ children }: Props) => {
  const [clientCountry, setClient] = useState("");
  const [destinationCountry, setDestination] = useState("");

  const setClientCountry = (country: string) => {
    setClient(country);
  };
  const setDestinationCountry = (country: string) => {
    setDestination(country);
  };
  return (
    <>
      <Context.Provider
        value={{
          clientCountry,
          destinationCountry,
          setClientCountry,
          setDestinationCountry,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useInfoContext = () => useContext(Context);
