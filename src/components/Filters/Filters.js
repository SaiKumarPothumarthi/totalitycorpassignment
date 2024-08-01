import React from 'react';
import { FaFilter } from "react-icons/fa";
import "./Filters.css"

const Filters = ({ locationFilter, setLocationFilter, priceFilter, setPriceFilter, filterProperties }) => {
  return (
    <div className="filters">
      <select value={locationFilter} onChange={(event) => setLocationFilter(event.target.value)} className='drop-down'>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Audbery">Audbery</option>
        <option value="New Jersey">New Jersey</option>
        <option value="Illinois">Illinois</option>
        <option value="New Mexico">New Mexico</option>
      </select>
      <input
        type="number"
        value={priceFilter}
        onChange={(event) => setPriceFilter(event.target.value)}
        placeholder="Max Price"
        className='number-input'
      />
      <button onClick={filterProperties} className='filter-button'>Filter<span><FaFilter className='filter-icon'/></span></button>
    </div>
  );
};

export default Filters;
