import { useField } from "formik";
import { FormGroup, Input, Label } from "reactstrap";

export const FormikInput = ({ label, floating, type, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormGroup floating={floating}>
      <Input id={field.name} {...field} {...props} />
      <Label for={field.name}>{label}</Label>
    </FormGroup>
  );
};
