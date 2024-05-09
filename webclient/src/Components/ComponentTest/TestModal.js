import { Form, Formik } from "formik";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { FloatingInput, FormikInput } from "../Formik/FormikInput";
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
                  <Row xs="12" className="mb-2">
                    <Col sm="6">
                      <FormikInput name="name" label={"Name"} />
                    </Col>
                    <Col sm="6">
                      <FormikInput name="login" label={"login"} />
                    </Col>
                  </Row>
                  <Row xs="12" className="mb-2">
                    <Col sm="6">
                      <FormikInput
                        name="test3"
                        label={"I am disabled field"}
                        disabled
                      />
                    </Col>
                  </Row>
                  <Row>
                    <FormikSuggestTypeahead
                      labelKey={"name"}
                      name="people"
                      buildQuery={(query) => `api/test/suggests?query=${query}`}
                    />
                  </Row>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={submitForm} color="primary">
                  Submit
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};
