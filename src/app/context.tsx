"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}
export interface ContextProps {
  clientCountry: string;
  destinationCountry: string;
  isClientPage: boolean;
  setClientCountry(country: string): void;
  setDestinationCountry(country: string): void;
  setIsClientPage(isClientPage: boolean): void;
}

const Context = createContext<ContextProps>({
  clientCountry: "",
  destinationCountry: "",
  isClientPage: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setClientCountry(country: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDestinationCountry(country: string) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsClientPage(isClientPage: boolean) {},
});

export const ContextProvider = ({ children }: Props) => {
  const [clientCountry, setClient] = useState("");
  const [destinationCountry, setDestination] = useState("");
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
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useInfoContext = () => useContext(Context);
