import CountryCard from "./CountryCard";

function CountryGrid(props) {
  const { onShow, countries } = props;

  return (
    <div className="container grid grid-cols-1 gap-[40px] bg-lightBackground py-[45px] text-lightText dark:bg-darkBackground dark:text-darkText sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4 lg:gap-[75px] xl:px-[80px]">
      {countries &&
        countries.map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onShow={(c) => onShow(c)}
            cca3={country.cca3}
          />
        ))}
    </div>
  );
}

export default CountryGrid;
