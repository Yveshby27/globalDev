import countryData from "~/data";

interface DataProps {
  client: string;
  destination: string;
}

const CountryDetails: React.FC<DataProps> = ({ client, destination }) => {
  const getCountry = (countryName: string) => {
    for (const country of countryData) {
      if (country.name === countryName) return country;
    }
  };
  const country1 = getCountry(client);
  const country2 = getCountry(destination);
  if (!country1 || !country2) return;
  const percentageDiff =
    ((country2.average_salary - country1.average_salary) /
      country1.average_salary) *
    100;

  const higherCountry =
    country2.average_salary > country1.average_salary
      ? country2.name
      : country1.name;

  const timezoneDifference = country2.std - country1.std;

  const direction =
    timezoneDifference > 0
      ? "ahead"
      : timezoneDifference < 0
        ? "behind"
        : "the same as";

  const absoluteDifference = Math.abs(timezoneDifference);

  return (
    <div>
      {country1 && country2 && (
        <div className="max-w-md rounded-lg border border-gray-300 p-6">
          <h2 className="text-xl font-semibold">{country1.name}</h2>
          <p className="mt-2">{country1.description}</p>
          <h2 className="text-xl font-semibold">{country2.name}</h2>
          <p className="mt-2">{country2.description}</p>
        </div>
      )}
      {absoluteDifference !== 0 && (
        <div>
          {" "}
          Salary in {higherCountry} is{" "}
          {Math.abs(parseFloat(percentageDiff.toFixed(2)))}% higher than{" "}
          {higherCountry === country2.name ? country1.name : country2.name}.{" "}
          {country2.name} is {absoluteDifference} hours {direction}{" "}
          {country1.name} in terms of timezone.
        </div>
      )}
      {absoluteDifference === 0 && (
        <div>
          Salary in {higherCountry} is{" "}
          {Math.abs(parseFloat(percentageDiff.toFixed(2)))}% higher than{" "}
          {higherCountry === country2.name ? country1.name : country2.name}.
          {country1.name} is the same as {country2.name} in terms of timezone.
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
