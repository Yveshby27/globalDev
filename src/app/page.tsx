import countryData from "~/data";
import WorldMap from "~/components/WorldMap";
import ClientCountryDropdown from "~/components/ClientCountryDropdown";
export default function MainPage() {
  return (
    <div>
      <label>Where are you based in?</label>
      <ClientCountryDropdown data={countryData}></ClientCountryDropdown>
      <WorldMap></WorldMap>
    </div>
  );
}
