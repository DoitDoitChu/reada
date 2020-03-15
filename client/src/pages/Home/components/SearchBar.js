import React, { useState } from 'react';
import {
  SearchWrapper,
  SearchReuslt,
  SearchInput,
} from '../../components/Style';

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState('');

  console.log('searchResult', searchResult);

  const handleInput = setState => e => {
    setState(e.target.value);
  };
  return (
    <SearchWrapper>
      <SearchInput
        type="search"
        onChange={handleInput(setSearchResult)}
        value={searchResult}
        placeholder={'이름'}
      ></SearchInput>
      <SearchReuslt></SearchReuslt>
    </SearchWrapper>
  );
};
export default SearchBar;
