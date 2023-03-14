function CountryCard(props) {
  const { flag, name, population, region, capital, onShow, cca3 } = props;

  return (
    <div className="bg-lightBackground px-5 dark:bg-darkBackground sm:px-0">
      <div
        onClick={() => onShow(cca3)}
        className="mx-auto w-[265px] cursor-pointer rounded-md bg-lightElements shadow dark:bg-darkElements"
      >
        <img
          className="rounded-t-md shadow dark:bg-darkBackground"
          src={flag}
          alt="country flag"
        />
        <div className="px-6 pt-8 pb-3 text-lg font-bold leading-tight">
          {name}
        </div>
        <div className="px-6 pb-12 text-sm">
          <div>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString("en-US")}
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            {region}
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            {capital}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
