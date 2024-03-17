import React from 'react';

export const Pagination = ({countriesPerPage, totalCountries}: any) => {
    const pageNumbers = []
    for (let i = 0; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            {pageNumbers?.map((number, index) => (
                <span key={index}>number</span>
            ))}
        </div>
    );
};
