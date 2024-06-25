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

interface CountryOption {
  value: string;
  label: string;
}

const ClientCountryDropdown = ({ data }: { data: DataProps[] }) => {
  const router = useRouter();
  const params = useParams<{ client: string; destination: string }>();
  const countries = data.map((country) => ({
    value: country.name,
    label: country.name,
  }));
  const [dropdownCountryIndex, setDropdownCountryIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (params.client) {
      const clientIndex = data.findIndex((country) => {
        return (
          country.name.toLowerCase() ===
          decodeURIComponent(params.client).toLowerCase()
        );
      });
      setDropdownCountryIndex(clientIndex !== -1 ? clientIndex : null);
    } else {
      setDropdownCountryIndex(null);
    }
  }, [params.client]);

  const handleChange = (selectedOption: CountryOption | null) => {
    if (selectedOption === null) return;
    const destinationPath = params.destination
      ? `/${selectedOption.value}/${params.destination}`
      : `/${selectedOption.value}`;
    router.push(destinationPath);
  };

  return (
    <div data-cy="client-dropdown">
      <div className="flex flex-wrap items-end justify-center gap-3">
        <div>
          <label>Where are you based in?</label>
          <Select
            options={countries}
            value={
              dropdownCountryIndex !== null
                ? countries[dropdownCountryIndex]
                : null
            }
            className="mt-3 w-48"
            classNamePrefix="react-select-client"
            onChange={handleChange}
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
