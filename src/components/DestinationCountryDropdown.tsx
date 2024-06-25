"use client";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface DataProps {
  name: string;
  average_salary: number;
  description: string;
  zone: string;
  std: number;
}

const DestinationCountryDropdown = ({ data }: { data: DataProps[] }) => {
  const router = useRouter();

  const params = useParams<{ client: string; destination: string }>();
  const [destinationDropdownCountryIndex, setDestinationDropdownCountryIndex] =
    useState(-1);
  const countries = data.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  useEffect(() => {
    const destinationIndex = data.findIndex(
      (country) =>
        country.name.toLowerCase() ===
        decodeURIComponent(params.destination).toLowerCase(),
    );

    if (destinationIndex === -1) {
      router.push(`/${params.client}`);
    }

    setDestinationDropdownCountryIndex(destinationIndex);
  }, [params.destination]);

  const sortCountriesByTimezoneDifference = () => {
    const clientCountry = data.find(
      (country) =>
        country.name.toLowerCase() ===
        decodeURIComponent(params.client).toLowerCase(),
    );

    if (!clientCountry) return { recommended: [], others: [] };

    const sortedCountries = [...data].sort(
      (a, b) =>
        Math.abs(a.std - clientCountry.std) -
        Math.abs(b.std - clientCountry.std),
    );

    const recommendedCountries = sortedCountries
      .filter(
        (country) =>
          country.name.toLowerCase() !==
          decodeURIComponent(params.client).toLowerCase(),
      )
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
          country.name.toLowerCase() !==
            decodeURIComponent(params.client).toLowerCase() &&
          !recommendedCountryNames.has(country.name),
      )
      .map((country) => ({
        value: country.name,
        label: country.name,
      }));

    return { recommended: recommendedCountries, others: otherCountries };
  };

  return (
    <div data-cy="destination-dropdown">
      <div className="flex  justify-center">
        <div>
          <label>Where are you hiring?</label>
          <Select
            classNamePrefix="react-select-destination"
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
            className="mt-3 w-48"
            onChange={async (e) => {
              if (e?.value) {
                const selectedCountry = decodeURIComponent(e.value);
                router.push(`/${params.client}/${selectedCountry}`);
              }
            }}
          ></Select>
        </div>
      </div>
    </div>
  );
};
export default DestinationCountryDropdown;
