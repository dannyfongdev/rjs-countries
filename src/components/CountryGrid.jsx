import CountryCard from './CountryCard';

function CountryGrid (props) {
  const { onShow, countries } = props;

  
  return (
    <div className="grid py-[45px] gap-[40px] grid-cols-1 sm:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[75px] bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">

    {countries && countries.map(country => (
      <CountryCard 
        key={country.cca3}
        name={country.name}
        flag={country.flag}
        population={country.population}
        region={country.region}
        capital={country.capital}
        onShow={c => onShow(c)}
        cca3={country.cca3}
      />
    ))}
  
    </div>
  )
}

export default CountryGrid;