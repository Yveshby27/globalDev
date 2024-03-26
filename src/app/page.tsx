"use client";
import { useRouter } from "next/navigation";
import { useInfoContext } from "./context";
import softwareDeveloperSalaries from "~/data";
import Select from "react-select";

import { useState } from "react";
export default function MainPage() {
  const router = useRouter();
  const context = useInfoContext();
  const countries = softwareDeveloperSalaries.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <div>
      <label>Where are you based in?</label>
      <Select
        options={countries}
        className="w-48"
        onChange={(e) => {
          context.setClientCountry(`${e?.value}`);
        }}
      ></Select>
      <button
        className="mt-4 max-h-14 bg-blue-500 px-4  py-2 text-white hover:bg-blue-600"
        onClick={() => {
          router.push(`/${context.clientCountry}`);
        }}
      >
        Continue
      </button>
      <div className="flex justify-center">
        <div className=" h-96 w-1/2 border border-solid border-black text-center ">
          WORLD MAP
        </div>
      </div>
    </div>
  );
}
