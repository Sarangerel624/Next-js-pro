"use client";

import { useEffect, useState } from "react";
import { Test } from "./_components/Test";

const Page = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("")



  const fetchData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/independent?status=true", 
      {
        method:"GET",
      }
    );
    const data = await response.json();
    setCountries(data);
  };


  useEffect(() => {
    fetchData();
  }, []);
    const filterCountry = countries.filter((country) => {
       return country.name.official.toLowerCase().includes(inputValue.toLowerCase())
  });



  return (
    <div>
      <div>
         <p>Flags of the World</p>
         <hr className="border-1 border-gray-500"></hr>
      </div>
      <div>
        <p>{countries.length} Countries in the world right now</p>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Country name..."
        />
          
      </div>
      <div className="flex flex-wrap gap-8 w-[2000px] ml-[50px] mt-[50px]">
         {filterCountry.map((country,index ) =>  {
          return <Test flagUrl= {country.flags.png} key={index} flagName = {country.name.official}/>
        })}
      </div>
    </div>
    
  )
}

export default Page;