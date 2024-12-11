'use client'

import React, {useState} from "react";
import "../../styles/searchbox.css";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");  
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    console.log(searchValue);

  }
  
  const handleSearchValue = (e:any)=>{
    setSearchValue(e.target.value);
  }

  return (
    <div className="search-container bg-theme-violet flex items-center justify-center">
      <form>
        <div className="relative">
          <input
            type="text"
            className="search w-full p-3 pr-10 border focus:outline-none"
            placeholder="Search..."
            onChange={handleSearchValue}
          />
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
