import React from 'react';
import {CountryType} from "../pages/CountriesPage";

type Props = {
    countries: CountryType[]
    loading: boolean
}

export const Countries = ({countries, loading}: Props) => {
    if (loading){
        return <div>Loading...</div>
    }
    return (
        <ul>
            {
                countries.map((country: any, i: number) => {
                    return <div key={i}>
                        <li >{country.name.official}</li>
                        <img src={country.flags.png} alt="flag" style={{width: 25}}/>
                    </div>
                })
            }
        </ul>
    );
};
