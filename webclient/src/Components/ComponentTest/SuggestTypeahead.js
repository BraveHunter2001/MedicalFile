import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { getAsync } from "../../axiosUtils";

const SuggestTypeahead = ({
  id,
  onSelected,
  labelKey,
  defaultOptions,
  buildSuggestQuery,
}) => {
  const [options, setOptions] = useState(defaultOptions ?? []);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!buildSuggestQuery) return;

    setIsLoading(true);
    const { data } = await getAsync(buildSuggestQuery(query));

    setOptions(data);
    setIsLoading(false);
  };

  return (
    <AsyncTypeahead
      id={id}
      isLoading={isLoading}
      labelKey={labelKey}
      onChange={onSelected}
      options={options}
      onSearch={handleSearch}
    />
  );
};

export default SuggestTypeahead;
