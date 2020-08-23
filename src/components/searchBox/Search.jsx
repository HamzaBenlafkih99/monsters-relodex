import React from 'react';
import './Search.style.css';

export const SearchBox = ({ handleSearch, placeholder }) => (
    <input 
      type='search'
      className='search'
      onChange={handleSearch}
      placeholder={placeholder}
    />
);