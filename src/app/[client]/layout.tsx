import countryData from "~/data";
import WorldMap from "~/components/WorldMap";
import DestinationCountryDropdown from "~/components/DestinationCountryDropdown";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DestinationCountryDropdown
        data={countryData}
      ></DestinationCountryDropdown>
      <div className="flex gap-5">
        <WorldMap></WorldMap>
        <div>{children}</div>
      </div>
    </div>
  );
}
