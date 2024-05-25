"use client";
import { useRouter } from "next/navigation";
import { useInfoContext } from "./context";
import softwareDeveloperSalaries from "~/data";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SimpleWorldMap from "~/components/SimpleWorldMap";
export default function MainPage() {
  const router = useRouter();
  const context = useInfoContext();
  const params = useParams<{ client: string; destination: string }>();
  const countries = softwareDeveloperSalaries.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  const [dropdownCountryIndex, setDropdownCountryIndex] = useState(-1);
  useEffect(() => {
    const index = softwareDeveloperSalaries.findIndex((country) => {
      return country.name === context.clientCountry;
    });
    setDropdownCountryIndex(index);
  }, [params, context, dropdownCountryIndex]);

  return (
    <div>
      <label>Where are you based in?</label>
      <Select
        options={countries}
        value={countries[dropdownCountryIndex]}
        className="w-48"
        onChange={async (e) => {
          context.setClientCountry(`${e?.value}`);
          router.push(`/${e?.value}`);
        }}
      ></Select>

      <SimpleWorldMap></SimpleWorldMap>
    </div>
  );
}
