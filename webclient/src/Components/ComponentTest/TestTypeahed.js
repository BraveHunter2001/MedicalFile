import React, { useState } from "react";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";

const TestTypeahed = ({
  selected,
  onSelected,
  onSearch,
  labelKey,
  searchedOptions,
  isLoading,
}) => {
  const [options, setOptions] = useState([
    { id: 0, name: "Ilya" },
    { id: 1, name: "Kate" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Arslan" },
  ]);
  return (
    <AsyncTypeahead
      isLoading={isLoading}
      id="test"
      labelKey={labelKey}
      onChange={onSelected}
      options={searchedOptions ?? options}
      onSearch={onSearch}
    />
  );
};

export default TestTypeahed;
