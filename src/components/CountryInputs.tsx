"use client";
import React, { useEffect } from "react";
import ClientCountryDropdown from "./ClientCountryDropdown";
import DestinationCountryDropdown from "./DestinationCountryDropdown";
import { useParams, useRouter } from "next/navigation";

interface DataProps {
  name: string;
  average_salary: number;
  description: string;
  zone: string;
  std: number;
}

const CountryInputs = ({ data }: { data: DataProps[] }) => {
  const params = useParams<{ client: string; destination: string }>();
  const router = useRouter();

  useEffect(() => {
    const clientIndex = data.findIndex((country) => {
      return (
        country.name.toLowerCase() ===
        decodeURIComponent(params.client).toLowerCase()
      );
    });

    if (clientIndex === -1) {
      router.push(`/`);
    }
  }, [params]);

  return (
    <div className="flex flex-wrap justify-center gap-10">
      <ClientCountryDropdown data={data}></ClientCountryDropdown>
      {params.client && (
        <DestinationCountryDropdown data={data}></DestinationCountryDropdown>
      )}
    </div>
  );
};

export default CountryInputs;
