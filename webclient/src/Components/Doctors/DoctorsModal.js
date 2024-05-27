import React, { useState } from "react";
import { MODEL_MODE, ROLE, getSuggestUrl } from "../../constants";
import {
  Alert,
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { FormikInput } from "../Formik/FormikInput";
import { Formik } from "formik";
import { FormikSuggestTypeahead } from "../Formik/FormikSuggestTypeahead";
import { postAsync } from "../../axiosUtils";

const initialValues = {
  name: "",
  login: "",
  password: "",
  age: "",
  riskFactor: "",
};

const DoctorsModal = ({ isOpen, onClose, mode, role }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (values) => {
    const modal = {
      ...values,
    };

    const { isOk, data } = await postAsync(role === ROLE.Patient ? "api/patients" : "api/doctors", modal);
    setShowAlert(isOk);
  };

  const handleClose = () => {
    setShowAlert(false);
    onClose?.();
  };

  const isDisabled = mode === MODEL_MODE.View;
  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>{role === ROLE.Patient ? "Patients Modal" : "Doctors Modal"}</ModalHeader>
      {showAlert && (
        <Alert color="success" className="m-2">
          {role === ROLE.Patient ? "Patients" : "Doctors"} record successfuly created
        </Alert>
      )}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          const { submitForm, values } = props;
          return (
            <>
              <ModalBody>
                <Form>
                  <Row xs="2" className="gy-2">
                    <Col>
                      <FormikSuggestTypeahead
                        name="name"
                        disabled={isDisabled}
                        placeholder="Name"
                      />
                    </Col>
                    <Col>
                      <FormikSuggestTypeahead
                        name="login"
                        disabled={isDisabled}
                        placeholder="Login"
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="password"
                        label={"Password"}
                        disabled={isDisabled}
                      />
                    </Col>
                    {role === ROLE.Patient && (
                      <Col>
                      <FormikInput
                        name="age"
                        label={"Age"}
                        disabled={isDisabled}
                      />
                    </Col>
                    )}
                    {role === ROLE.Patient && (
                      <Col>
                      <FormikInput
                        name="riskFactort"
                        label={"RiskFactor"}
                        disabled={isDisabled}
                      />
                    </Col>
                    )}
                    
                  </Row>
                </Form>
              </ModalBody>
              {!isDisabled && (
                <ModalFooter>
                  <Button
                    onClick={submitForm}
                    color="primary"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              )}
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};
export default DoctorsModal;
