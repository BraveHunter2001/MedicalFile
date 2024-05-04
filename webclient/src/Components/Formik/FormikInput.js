import { useField } from "formik";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export const FormikInput = ({ label, floating, type, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormGroup floating={floating}>
      <Input id={field.name} placeholder={field.name} {...field} {...props} />
      <Label for={field.name}>{label}</Label>
    </FormGroup>
  );
};

export const FloatingInput = ({ floating, name, label }) => {
  return (
    <FormGroup floating={floating}>
      <Input id={name} name={name} placeholder={label} bsSize="sm" />
      <Label for={name} size="sm">
        {label}
      </Label>
    </FormGroup>
  );
};
