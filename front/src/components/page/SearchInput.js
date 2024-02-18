import React from 'react';
import TextField from '@mui/material/TextField';
import Select from 'react-select';

const filter = [
    { value: '', label: '--Select--' },
    { value: 'Title', label: 'Title' },
    { value: 'Description', label: 'Description' },
    { value: 'Price', label: 'Price' },
  ];
function SearchInput({ searchText, handleSearchChange, handleFilterChange, selectedValue }) {
  return (
    <div className="h-input">
      <TextField
        id="outlined-basic"
        label="Search"
        value={searchText}
        onChange={handleSearchChange}
        variant="outlined"
      />
      <Select
        className="filter-select"
        value={selectedValue}
        onChange={handleFilterChange}
        options={filter}
      />
    </div>
  );
}

export default SearchInput;
