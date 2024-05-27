import React, { useEffect, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { getAsync } from "../../axiosUtils";
import { uniqueId } from "lodash-es";

const SuggestTypeahead = ({
  onSelected,
  labelKey,
  defaultOptions,
  buildSuggestQuery,
  disabled,
  placeholder,
  defaultSelected,
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [options, setOptions] = useState(defaultOptions ?? []);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!buildSuggestQuery) return;

    setIsLoading(true);
    const { data } = await getAsync(buildSuggestQuery(query));

    setOptions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const handleSelected = (selected) => {
    setSelected(selected);
    onSelected?.(selected);
  };

  return (
    <AsyncTypeahead
      selected={selected}
      id={uniqueId("typeahead")}
      isLoading={isLoading}
      labelKey={labelKey}
      onChange={handleSelected}
      options={options}
      onSearch={handleSearch}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default SuggestTypeahead;
