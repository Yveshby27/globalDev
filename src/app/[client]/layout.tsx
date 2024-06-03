import countryData from "~/data";
import WorldMap from "~/components/WorldMap";
import DestinationCountryDropdown from "~/components/DestinationCountryDropdown";
import RefinedSearchButton from "~/components/RefinedSearchButton";

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
      <div className=" flex w-full flex-row-reverse flex-wrap justify-center">
        <div className="w-1/3 min-w-96">
          <div className="flex items-center justify-center">
            <WorldMap></WorldMap>
          </div>
        </div>
        <div className="mb-10 flex items-center justify-center">{children}</div>
      </div>
      <RefinedSearchButton></RefinedSearchButton>
    </div>
  );
}
