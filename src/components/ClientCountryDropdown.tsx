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

const ClientCountryDropdown = ({ data }: { data: DataProps[] }) => {
  const router = useRouter();
  const context = useInfoContext();
  const params = useParams<{ client: string; destination: string }>();
  const countries = data.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  const [dropdownCountryIndex, setDropdownCountryIndex] = useState(-1);
  useEffect(() => {
    const index = data.findIndex((country) => {
      return country.name === context.clientCountry;
    });
    setDropdownCountryIndex(index);
  }, [params, context, dropdownCountryIndex]);

  return (
    <div>
      <Select
        options={countries}
        value={countries[dropdownCountryIndex]}
        className="w-48"
        onChange={async (e) => {
          context.setClientCountry(`${e?.value}`);
          router.push(`/${e?.value}`);
        }}
      ></Select>
    </div>
  );
};
export default ClientCountryDropdown;
