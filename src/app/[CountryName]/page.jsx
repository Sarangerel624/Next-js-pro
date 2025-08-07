"use client";


import { useEffect, useState } from "react";
import {useParams} from "next/navigation";


const Page = () => {
     
   const [countries, setCountries] = useState([]);
    const params = useParams();
    const countryName = params.CountryName;
    const fetchData = async () => {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        console.log(data)
          setCountries(data);
    };
   
    useEffect(() => {
        fetchData();
    }, []);
    const symbol=countries[0]?.currencies??{}
    const a = Object.values(symbol)[0]?.symbol
      const b = Object.values(symbol)[0]?.name
    return(
        <div>
            <p>Flags of the world  </p>
           <hr className="border-1 border-gray-400"></hr>
           {/* <div><FontAwesomeIcon icon={byPrefixAndName.fas['arrow-down']} /></div> */}
           <p className='text-3xl font-bold pl-[55px]'>{countries[0]?.name.common} </p>
           <hr className="border-1  border-gray-400"></hr>
          
          <div className='flex' >
             <img src={countries[0]?.flags.png} className='p-[15px]'></img>
          <div className='flex-col  pt-[13px]'>
              <p className='text-gray-500 text-[14px] font-bold'>Capital</p>
            <p>{countries[0]?.capital}</p>
            <p  className='text-gray-500 text-[14px] font-bold'>Currency</p>
                <div className='flex'>
                    <p >{a}</p><p >{b}</p>
                </div>
            <p  className='text-gray-500 text-[14px] font-bold'>Area</p>
            <p>{countries[0]?.area} sq km</p>
            <p  className='text-gray-500 text-[14px] font-bold'>Population</p>
            <p>{countries[0]?.population}</p>
          </div>
            <div className='flex flex-col pl-[60px]   pt-[13px]'>
                <p  className='text-gray-500 text-[14px] font-bold'>Location</p>
                <p>{countries[0]?.subregion}</p>
                <p  className='text-gray-500 text-[14px] font-bold'>Continents</p>
                <p>{countries[0]?.continents}</p>
                 <p  className='text-gray-500 text-[14px] font-bold'>Map</p>
                <a href={countries[0]?.maps.openStreetMaps}>See in Google Maps</a>
          </div>
          </div>
          <div>
            
          </div>
        
        </div>
    )
};

export default Page;