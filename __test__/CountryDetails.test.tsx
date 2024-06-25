import React from "react";
import { render } from "@testing-library/react";
import CountryDetails from "../src/components/CountryDetails"; // Adjust the path as necessary

describe("CountryDetails Component", () => {
  test("renders correctly with valid country data for Australia as Client and Germany as destination", () => {
    const { getByText } = render(
      <CountryDetails client="Australia" destination="Canada" />,
    );

    expect(getByText(/How much to hire someone from Canada?/));
    expect(getByText(/Salary in Canada is 5.88% lower than in Australia./));
    expect(
      getByText(/Canada is 15 hours behind Australia in terms of timezone./),
    );
    expect(
      getByText(
        /Preferred start time for a software developer in Canada is 9:00. So they would prefer to start at 0:00 Australia time./,
      ),
    );
  });
  test("renders correctly with valid country data for Germany as Client and Australia as destination", () => {
    const { getByText } = render(
      <CountryDetails client="Canada" destination="Australia" />,
    );

    expect(getByText(/How much to hire someone from Australia?/));
    expect(getByText(/Salary in Australia is 5.88% higher than in Canada./));
    expect(
      getByText(/Australia is 15 hours ahead Canada in terms of timezone/),
    );
    expect(
      getByText(
        /Preferred start time for a software developer in Australia is 9:00. So they would prefer to start at 18:00 Canada time./,
      ),
    );
  });
});
