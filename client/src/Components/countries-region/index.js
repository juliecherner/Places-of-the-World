import { Link } from "react-router-dom";
import "./countries-region.css";

const CountriesByRegion = ({ countries }) => {
  const getSubregions = () => {
    const array = countries.map((item) => item.subregion);
    let allSubregions = [...new Set(array)];
    return allSubregions;
  };

  const divideToSubregions = (countries, allSubregions) => {
    const finalArray = allSubregions.map((subregion) => {
      return { name: subregion, countries: [] };
    });

    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < allSubregions.length; j++) {
        if (countries[i].subregion === allSubregions[j]) {
          finalArray[j].countries.push(countries[i].country);
        }
      }
    }
    return finalArray;
  };

  const displayData = (countries, subregions) => {
    const data = divideToSubregions(countries, subregions);
    return data.map((item) => {
      return (
        <div key={item.name}>
          <div className="region-page-countries-title">{item.name}</div>
          <div className="region-page-countries">
            {item.countries.map((item) => {
              return (
                <div className="region-page-country" key={item}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="region-page-countries-list">
      <div>{displayData(countries, getSubregions())}</div>
    </div>
  );
};

export default CountriesByRegion;
