import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GeoApiOptions } from "../../api";

export const Search = ({ onSearchChange }) => {
  const [search, SetSearch] = useState(null);

  

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      GeoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      
      .catch((err) => console.error(err));
      
  };

  const handleOnchange = (searchData) => {
    SetSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};
