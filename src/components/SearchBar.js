import React, { useState } from 'react';

const SearchBar = ({ keyword, onChange }) => {
    
  const BarStyling = {width:"20rem",background:"white", border:"1px solid orange", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     value={keyword}
     placeholder={"search stories by title,url or author"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar