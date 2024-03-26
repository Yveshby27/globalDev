"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import softwareDeveloperSalaries from "~/data";
import { useInfoContext } from "~/app/context";

export default function DestinationPage() {
  const params = useParams<{ client: string; destination: string }>();
  const [clientCountryDetails, setClientCountryDetails] = useState<number>();
  const [destinationCountryDetails, setDestinationCountryDetails] =
    useState<number>();
  const context = useInfoContext();
  useEffect(() => {
    context.setClientCountry(params.client);
    context.setDestinationCountry(params.destination);
    for (const obj of softwareDeveloperSalaries) {
      if (obj.name === params.client)
        setClientCountryDetails(obj.average_salary);
      if (obj.name === params.destination)
        setDestinationCountryDetails(obj.average_salary);
    }
  }, [params, context]);
  return (
    <div>
      <div className="mt-3 flex justify-center gap-5">
        <div className=" h-96 w-1/2 border border-solid border-black text-center ">
          WORLD MAP--with highlighted country
        </div>
        <div>
          <div>
            Average developer salary in {params.client}:{clientCountryDetails}$
          </div>
          <div>
            Average developer salary in {params.destination}:
            {destinationCountryDetails}$
          </div>
          <div>More details...</div>
        </div>
      </div>
    </div>
  );
}
