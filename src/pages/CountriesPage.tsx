import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Countries} from "../Components/Countries";

export type CountryType = {
    name: {
        official: string
    }
    country: {
        flags: {
            png: string
        }
    }
}

export const CountriesPage = () => {
    const [countries, setCountries] = useState<CountryType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countriesPerPage] = useState<number>(10)



    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setCountries(res.data)
            setLoading(false)
        }

        getCountries()
    }, []);
// индекс последней страницы
    const lastCountryIndex = currentPage * countriesPerPage
// индекс первой страницы
    const firstCountryIndex = lastCountryIndex - countriesPerPage
// индекс текущей страницы
    const currentCountry =  countries.slice(firstCountryIndex, lastCountryIndex)

    return (
        <div>
            <h1>Countries</h1>
            <Countries countries={currentCountry} loading={loading}/>
        </div>
    );
};
