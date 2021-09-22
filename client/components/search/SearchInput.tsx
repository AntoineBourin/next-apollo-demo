import React, { useState, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import Input from "../global/Input";
import styles from '../../styles/SearchInput.module.scss';

interface SearchInputProps {
  handleNewSearchValue: (value) => any;
}

const SearchInput: React.FC<SearchInputProps> = ({ handleNewSearchValue }) => {
  const [value, setValue] = useState<string>('');

  const debouncedSearchFn = useCallback(_debounce(handleNewSearchValue, 800), []);

  const handleOnChange = (e): void => {
    const inputValue = e.currentTarget.value;
    setValue(e.currentTarget.value);

    if (!inputValue) {
      return;
    }
    debouncedSearchFn(inputValue);
  };

  return (
    <Input
      type="text"
      name="search"
      value={value}
      placeholder="Search"
      onChange={handleOnChange}
      className={styles.input}
    />
  )
};

export default SearchInput;