"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useInfoContext } from "~/app/context";
import softwareDeveloperSalaries from "~/data";
import SimpleWorldMap from "~/components/SimpleWorldMap";
import { useParams, useRouter } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{ client?: string; destination?: string }>();
  const router = useRouter();
  const context = useInfoContext();
  const [destinationDropdownCountryIndex, setDestinationDropdownCountryIndex] =
    useState(-1);
  const [clientDropdownCountryIndex, setClientDropdownCountryIndex] =
    useState(-1);
  const countries = softwareDeveloperSalaries.map((country) => ({
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

    const clientIndex = softwareDeveloperSalaries.findIndex(
      (country) => country.name === clientCountry,
    );

    const destinationIndex = softwareDeveloperSalaries.findIndex(
      (country) => country.name === destinationCountry,
    );

    setClientDropdownCountryIndex(clientIndex);
    setDestinationDropdownCountryIndex(destinationIndex);
  }, [params, context]);

  const sortCountriesByTimezoneDifference = () => {
    const clientCountry = softwareDeveloperSalaries.find(
      (country) => country.name === context.clientCountry,
    );
    if (!clientCountry) return { recommended: [], others: [] };

    const sortedCountries = [...softwareDeveloperSalaries].sort(
      (a, b) =>
        Math.abs(a.std - clientCountry.std) -
        Math.abs(b.std - clientCountry.std),
    );

    // Filter out client country from recommended countries
    const recommendedCountries = sortedCountries
      .slice(0, 4)
      .filter((country) => country.name !== context.clientCountry)
      .map((country) => ({
        value: country.name,
        label: `${country.name} (${country.std - clientCountry.std >= 0 ? "+" : "-"}${Math.abs(country.std - clientCountry.std)} hours)`,
      }));

    // Filter out recommended countries from others
    const otherCountries = sortedCountries
      .filter(
        (country) =>
          !recommendedCountries.find((c) => c.value === country.name),
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
      <div className="flex gap-5">
        <SimpleWorldMap></SimpleWorldMap>
        <div>{children}</div>
      </div>
    </div>
  );
}
