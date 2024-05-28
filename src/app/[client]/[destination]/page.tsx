import CountryDetails from "~/components/CountryDetails";
import countryData from "~/data";
export default function DestinationPage() {
  return (
    <div>
      <div className="mt-3 justify-center gap-5">
        <CountryDetails data={countryData}></CountryDetails>
      </div>
    </div>
  );
}
