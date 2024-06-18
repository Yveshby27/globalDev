import CountryDetails from "~/components/CountryDetails";

export default function Page({
  params,
}: {
  params: { client: string; destination: string };
}) {
  return (
    <div className="flex items-center justify-center">
      <CountryDetails
        client={params.client}
        destination={params.destination}
      ></CountryDetails>
    </div>
  );
}
