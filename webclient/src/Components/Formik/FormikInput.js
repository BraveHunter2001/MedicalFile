import { useField } from "formik";
import { Input } from "reactstrap";

export const FormikInput = ({ label, type, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Input id={field.name} placeholder={field.name} {...field} {...props} />
  );
};

export const FloatingInput = ({ name, label }) => {
  return <Input id={name} name={name} placeholder={label} bsSize="sm" />;
};
