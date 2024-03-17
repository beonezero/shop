import React, {useEffect, useState} from 'react';
import axios from "axios";

export const CountriesPage = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countriesPerPage] = useState(10)



    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setCountries(res.data)
            setLoading(false)
        }

        getCountries()
    }, []);

    return (
        <div>
            <h1>Countries</h1>
        </div>
    );
};
