import React from "react";
import debounce from "lodash.debounce";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search pizza..."
      />
      {value && (
        <AiOutlineClose onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  );
};

export default Search;
