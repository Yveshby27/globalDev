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
      return country.name === decodeURIComponent(params.client);
    });
    setDropdownCountryIndex(index);
  }, [params, context, dropdownCountryIndex]);

  return (
    <div className="mt-4 flex items-center gap-3">
      <div>
        <Select
          options={countries}
          value={countries[dropdownCountryIndex]}
          className="w-48"
          onChange={async (e) => {
            context.setClientCountry(`${e?.value}`);
            router.push(`/${e?.value}`);
          }}
        />
      </div>
      <div>
        and we&#39;ll show you the ones with the least timezone difference
      </div>
    </div>
  );
};
export default ClientCountryDropdown;
