import { Form, Formik } from "formik";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FormikInput } from "../Formik/FormikInput";
import { FormikSuggestTypeahead } from "../Formik/FormikSuggestTypeahead";

const initValue = { name: "" };
export const TestModal = ({ isOpen, onClose }) => {
  const handleSubmit = (values) => {
    console.log("handleSubmit values", values);
  };
  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Test Header</ModalHeader>
      <Formik initialValues={initValue} onSubmit={handleSubmit}>
        {(props) => {
          const { submitForm } = props;
          return (
            <>
              <ModalBody>
                <Form>
                  <FormikInput name="name" label={"Name"} floating />
                  <FormikSuggestTypeahead
                    labelKey={"name"}
                    name="people"
                    buildQuery={(query) => `api/test/suggests?query=${query}`}
                  />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={submitForm}>Submit</Button>
              </ModalFooter>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};