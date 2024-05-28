"use client";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useInfoContext } from "../app/context";
import { useRouter } from "next/navigation";

interface DataProps {
  name: string;
  average_salary: number;
  description: string;
  zone: string;
  std: number;
}

const DestinationCountryDropdown = ({ data }: { data: DataProps[] }) => {
  const router = useRouter();
  const context = useInfoContext();
  const params = useParams<{ client: string; destination: string }>();
  const [clientDropdownCountryIndex, setClientDropdownCountryIndex] =
    useState(-1);
  const [destinationDropdownCountryIndex, setDestinationDropdownCountryIndex] =
    useState(-1);
  const countries = data.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  useEffect(() => {
    context.setIsClientPage(false);

    const clientCountry = decodeURIComponent(params.client ?? "");
    const destinationCountry = decodeURIComponent(params.destination ?? "");

    if (clientCountry) {
      context.setClientCountry(clientCountry);
    }

    if (destinationCountry) {
      context.setDestinationCountry(destinationCountry);
    }

    const clientIndex = data.findIndex(
      (country) => country.name === clientCountry,
    );

    const destinationIndex = data.findIndex(
      (country) => country.name === destinationCountry,
    );

    setClientDropdownCountryIndex(clientIndex);
    setDestinationDropdownCountryIndex(destinationIndex);
  }, [params, context]);

  const sortCountriesByTimezoneDifference = () => {
    const clientCountry = data.find(
      (country) => country.name === context.clientCountry,
    );

    if (!clientCountry) return { recommended: [], others: [] };

    const sortedCountries = [...data].sort(
      (a, b) =>
        Math.abs(a.std - clientCountry.std) -
        Math.abs(b.std - clientCountry.std),
    );

    const recommendedCountries = sortedCountries
      .filter((country) => country.name !== context.clientCountry)
      .slice(0, 3)
      .map((country) => ({
        value: country.name,
        label: `${country.name} (${country.std - clientCountry.std >= 0 ? "+" : "-"}${Math.abs(country.std - clientCountry.std)} hours)`,
      }));

    const recommendedCountryNames = new Set(
      recommendedCountries.map((c) => c.value),
    );

    const otherCountries = sortedCountries
      .filter(
        (country) =>
          country.name !== context.clientCountry &&
          !recommendedCountryNames.has(country.name),
      )
      .map((country) => ({
        value: country.name,
        label: country.name,
      }));

    return { recommended: recommendedCountries, others: otherCountries };
  };

  return (
    <div>
      <label>You are in:</label>
      <Select
        options={countries}
        value={
          clientDropdownCountryIndex !== -1
            ? countries[clientDropdownCountryIndex]
            : null
        }
        className="w-48"
        onChange={async (e) => {
          if (e?.value) {
            const selectedCountry = decodeURIComponent(e.value);
            context.setClientCountry(selectedCountry);
            router.push(`/${selectedCountry}/${context.destinationCountry}`);
          }
        }}
      ></Select>
      <label>Select destination country:</label>
      <Select
        options={[
          {
            label: "Recommended",
            options: sortCountriesByTimezoneDifference().recommended,
          },
          {
            label: "Others",
            options: sortCountriesByTimezoneDifference().others,
          },
        ]}
        value={
          destinationDropdownCountryIndex !== -1
            ? countries[destinationDropdownCountryIndex]
            : null
        }
        className="w-48"
        onChange={async (e) => {
          if (e?.value) {
            const selectedCountry = decodeURIComponent(e.value);
            context.setDestinationCountry(selectedCountry);
            router.push(`/${context.clientCountry}/${selectedCountry}`);
          }
        }}
      ></Select>
    </div>
  );
};
export default DestinationCountryDropdown;
