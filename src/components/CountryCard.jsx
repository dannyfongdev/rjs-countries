function CountryCard(props) {
  const { flag, name, population, region, capital, onShow, cca3 } = props;

  return (
    <div className="bg-lightBackground dark:bg-darkBackground px-8 sm:px-0">
      <div
        onClick={() => onShow(cca3)}
        className="cursor-pointer rounded-md bg-lightElements dark:bg-darkElements shadow"
      >
        <img className="w-full rounded-t-md shadow dark:bg-darkBackground" src={flag} alt="country flag" />
        <div className="px-6 pt-8 pb-3 leading-tight text-lg font-bold">{name}</div>
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
