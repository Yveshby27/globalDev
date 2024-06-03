import countryData from "~/data";
import WorldMap from "~/components/WorldMap";
import ClientCountryDropdown from "~/components/ClientCountryDropdown";

export default function MainPage() {
  return (
    <div className="mt-5">
      <label className="mb-2">Where are you based in?</label>
      <ClientCountryDropdown data={countryData}></ClientCountryDropdown>
      <div className="flex w-full items-center justify-center">
        <div className="mt-6 flex w-7/12 min-w-96 items-center justify-center">
          <WorldMap></WorldMap>
        </div>
      </div>
    </div>
  );
}
