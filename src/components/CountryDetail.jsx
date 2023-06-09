import { useState, useEffect } from "react";

import { getByCode } from "../modules/countries";
import Spinner from "./Spinner";

function CountryDetail(props) {
  const { code, onBack, countryNames, onGotoBorderCountry } = props;
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getByCode(code)
      .then((data) => {
        if (data) {
          setCountry(data[0]);
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [code]);

  return (
    <div className="container min-h-screen bg-lightBackground p-8 text-lightText dark:bg-darkBackground dark:text-darkText lg:p-12 xl:p-[80px]">
      <button
        type="button"
        className="mb-14 flex gap-2 rounded bg-lightElements px-6 py-2 font-semibold shadow dark:bg-darkElements"
        onClick={onBack}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back
      </button>
      {isLoading && <Spinner />}
      {country && (
        <div className="space-y-10 md:flex md:gap-12 md:space-y-0 lg:gap-24 xl:items-center xl:gap-28 ">
          <div className="shrink-0">
            <img
              className="border dark:border-0 md:w-[265px] lg:w-[400px] xl:w-[560px]"
              src={country.flag}
              alt="country flag"
            />
          </div>
          <div>
            <div className="mb-6 text-2xl font-bold">{country.name}</div>
            <div className="mb-3 leading-8 md:flex md:gap-10 lg:gap-28">
              <div className="mb-8">
                <div>
                  <span className="font-semibold">Native Name: </span>
                  {country.nativeName}
                </div>
                <div>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString("en-US")}
                </div>
                <div>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </div>
                <div>
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion}
                </div>
                <div>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </div>
              </div>
              <div>
                <div>
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.tld}
                </div>
                <div>
                  <span className="font-semibold">Currencies: </span>
                  {country.currencies}
                </div>
                <div>
                  <span className="font-semibold">Languages: </span>
                  {country.languages}
                </div>
              </div>
            </div>

            {country.borders && (
              <div className="space-x-3">
                <span className="font-semibold">Borders: </span>
                {country.borders.map((bc) => (
                  <div
                    key={bc}
                    className="mb-2 inline-block cursor-pointer bg-lightElements py-2 px-6 shadow dark:bg-darkElements"
                    onClick={() => onGotoBorderCountry(bc)}
                  >
                    {countryNames[bc]}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
