"use client";
import React, { useEffect, useState } from "react";
import softwareDeveloperSalaries from "~/data";
import { useInfoContext } from "~/app/context";

interface CountryInfo {
  name: string;
  average_salary: number;
  description: string;
  zone: string;
  std: number;
}

const CountryDetails = () => {
  const context = useInfoContext();
  const [country1, setCountry1] = useState<CountryInfo | null>(null);
  const [country2, setCountry2] = useState<CountryInfo | null>(null);
  const [comparisonMessage, setComparisonMessage] = useState<string | null>(
    null,
  );

  useEffect(() => {
    for (const country of softwareDeveloperSalaries) {
      if (context.clientCountry === country.name) setCountry1(country);
      if (context.destinationCountry === country.name) setCountry2(country);
    }
  }, [context]);

  useEffect(() => {
    if (country1 && country2) {
      const percentageDiff =
        ((country2.average_salary - country1.average_salary) /
          country1.average_salary) *
        100;
      const higherCountry =
        country2.average_salary > country1.average_salary
          ? country2.name
          : country1.name;
      const timezoneDifference = country2.std - country1.std;
      const direction =
        timezoneDifference > 0
          ? "ahead"
          : timezoneDifference < 0
            ? "behind"
            : "the same as";
      const absoluteDifference = Math.abs(timezoneDifference);
      if (absoluteDifference !== 0) {
        setComparisonMessage(
          `Salary in ${higherCountry} is ${Math.abs(
            parseFloat(percentageDiff.toFixed(2)),
          )}% higher than ${
            higherCountry === country2.name ? country1.name : country2.name
          }. ${country2.name} is ${absoluteDifference} hours ${direction} ${
            country1.name
          } in terms of timezone.`,
        );
      } else {
        setComparisonMessage(
          `Salary in ${higherCountry} is ${Math.abs(
            parseFloat(percentageDiff.toFixed(2)),
          )}% higher than ${
            higherCountry === country2.name ? country1.name : country2.name
          }.${country1.name} is the same as ${country2.name} in terms of timezone.`,
        );
      }
    }
  }, [country1, country2]);

  return (
    <div>
      {country1 && country2 && (
        <div className="max-w-md rounded-lg border border-gray-300 p-6">
          <h2 className="text-xl font-semibold">{country1.name}</h2>
          <p className="mt-2">{country1.description}</p>
          <h2 className="text-xl font-semibold">{country2.name}</h2>
          <p className="mt-2">{country2.description}</p>
          {comparisonMessage && <p className="mt-2">{comparisonMessage}</p>}
        </div>
      )}
      <button className="mt-4 max-h-14 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        More details
      </button>
    </div>
  );
};

export default CountryDetails;
