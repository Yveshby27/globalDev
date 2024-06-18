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
  const country1 = getCountry(decodeURIComponent(client));
  const country2 = getCountry(decodeURIComponent(destination));
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
  const timeUnit = absoluteDifference === 1 ? "hour" : "hours";
  const preferredStartTimeCountry2 = 9; // 9 AM in Country 2
  const preferredStartTimeCountry1 =
    (preferredStartTimeCountry2 - timezoneDifference + 24) % 24;

  return (
    <div className="mb-10 flex items-center text-sm" data-cy="country-details">
      {country1 && country2 && (
        <div className="max-w-md  p-6">
          <h2 className=" text-xl font-bold">
            How much to hire someone from {country2.name}?
          </h2>
          {percentageDiff === 0 ? (
            <div className="mt-8">
              The salary in {country1.name} is the same as in {country2.name}.
            </div>
          ) : (
            <div className="mt-8">
              Salary in {higherCountry} is{" "}
              {Math.abs(parseFloat(percentageDiff.toFixed(2)))}% higher than{" "}
              {higherCountry === country2.name ? country1.name : country2.name}.
            </div>
          )}
          {absoluteDifference !== 0 && (
            <div>
              <div className="mt-8">
                {country2.name} is {absoluteDifference} {timeUnit} {direction}{" "}
                {country1.name} in terms of timezone.
              </div>
            </div>
          )}
          {absoluteDifference === 0 && (
            <div>
              <div className="mt-8">
                {country1.name} is the same as {country2.name} in terms of
                timezone.
              </div>
            </div>
          )}
          <div className="mt-8">
            Preferred start time for a software developer in {country2.name} is{" "}
            {preferredStartTimeCountry2}:00. So they would prefer to start at{" "}
            {preferredStartTimeCountry1}:00 {country1.name} time.
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
