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

const ClientCountryDropdown = ({ data }: { data: DataProps[] }) => {
  const router = useRouter();
  const params = useParams<{ client: string; destination: string }>();
  const countries = data.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  const [dropdownCountryIndex, setDropdownCountryIndex] = useState(-1);

  useEffect(() => {
    const clientIndex = data.findIndex((country) => {
      return (
        country.name.toLowerCase() ===
        decodeURIComponent(params.client).toLowerCase()
      );
    });
    setDropdownCountryIndex(clientIndex);
  }, [params]);

  return (
    <div className="mt-3" data-cy="client-dropdown">
      <label>Where are you based in?</label>
      <div className="mt-3 flex gap-3">
        <div>
          <Select
            options={countries}
            value={countries[dropdownCountryIndex]}
            className="w-48"
            classNamePrefix="react-select-client"
            onChange={(e) => {
              if (params.destination)
                router.push(`/${e?.value}/${params.destination}`);
              else router.push(`/${e?.value}`);
            }}
          />
        </div>
        <div>
          {(!params.client || params.client === "") && (
            <div>
              and we&#39;ll show you the ones with the least timezone difference
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCountryDropdown;
