import CountryDetails from "~/components/CountryDetails";

export default function Page({
  params,
}: {
  params: { client: string; destination: string };
}) {
  return (
    <div>
      <CountryDetails
        client={params.client}
        destination={params.destination}
      ></CountryDetails>
    </div>
  );
}
