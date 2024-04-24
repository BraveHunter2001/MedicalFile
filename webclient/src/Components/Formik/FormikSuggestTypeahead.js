import { useField } from "formik";
import SuggestTypeahead from "../Typeaheads/SuggestTypeahead";

export const FormikSuggestTypeahead = ({ labelKey, buildQuery, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { setValue } = helpers;
  const handleSelected = (selected) => {
    setValue(selected?.[0]);
  };

  return (
    <SuggestTypeahead
      labelKey={labelKey}
      buildSuggestQuery={buildQuery}
      onSelected={handleSelected}
      {...field}
      {...props}
    />
  );
};
