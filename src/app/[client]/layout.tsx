"use client";
import { useParams } from "next/navigation";
import softwareDeveloperSalaries from "~/data";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { useInfoContext } from "~/app/context";
import { useEffect, useState } from "react";
export default function ClientLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{ client: string; destination: string }>();
  const router = useRouter();
  const context = useInfoContext();
  const countries = softwareDeveloperSalaries.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  const [dropdownCountryIndex, setDropdownCountryIndex] = useState(-1);

  useEffect(() => {
    context.setClientCountry(params.client);
    context.setDestinationCountry(params.destination);
    const index = softwareDeveloperSalaries.findIndex((country) => {
      return country.name === context.destinationCountry;
    });
    setDropdownCountryIndex(index);
  }, [params, context]);
  return (
    <div>
      <div>You are in:{params.client}</div>
      <label>Select destination country:</label>
      <Select
        options={countries}
        value={countries[dropdownCountryIndex]}
        className="w-48"
        onChange={(e) => {
          context.setDestinationCountry(`${e?.value}`);
          router.push(`/${context.clientCountry}/${e?.value}`);
        }}
      ></Select>
      {children}
    </div>
  );
}
