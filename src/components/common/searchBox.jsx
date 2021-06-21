import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      className="form-control my-3"
      placeholder="Search for movies"
    />
  );
};

export default SearchBox;
