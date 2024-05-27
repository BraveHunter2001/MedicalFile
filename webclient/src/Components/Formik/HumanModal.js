import React, { useEffect, useState } from "react";
import { GET_DOCTORS, GET_PATIENTS, MODEL_MODE, ROLE } from "../../constants";
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
import { getAsync, patchAsync, postAsync } from "../../axiosUtils";

const initialValues = {
  name: "",
  login: "",
  password: "",
  age: "",
  riskFactor: "",
};

const HumanModal = ({ isOpen, onClose, mode, role, userId }) => {
  const [showAlert, setShowAlert] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId || userId === null) return;

    (async () => {
      const { isOk, data } = await getAsync(
        (role === ROLE.Patient ? GET_PATIENTS : GET_DOCTORS) + `/${userId}`
      );
      isOk &&
        data &&
        setUser({
          ...data,
          age: data.patientCharacteristic?.age,
          riskFactor: data.patientCharacteristic?.riskFactor,
        });
    })();
  }, [isOpen, userId]);

  const handleSubmit = async (values) => {
    const modal = {
      ...values,
    };
    const method = modal === MODEL_MODE.Add ? postAsync : patchAsync;
    const { isOk, data } = await method(
      role === ROLE.Patient ? GET_PATIENTS : GET_DOCTORS,
      modal
    );
    setShowAlert(isOk);
  };

  const handleClose = () => {
    setUser(null);
    setShowAlert(false);
    onClose?.();
  };

  const isDisabled = mode === MODEL_MODE.View;
  const curInitialValues = user ?? initialValues;
  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        {role === ROLE.Patient ? "Patients Modal" : "Doctors Modal"}
      </ModalHeader>
      {showAlert && (
        <Alert color="success" className="m-2">
          {role === ROLE.Patient ? "Patients" : "Doctors"} record successfuly
          created
        </Alert>
      )}
      <Formik
        initialValues={curInitialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(props) => {
          const { submitForm, values } = props;
          return (
            <>
              <ModalBody>
                <Form>
                  <Row xs="2" className="gy-2">
                    <Col>
                      <FormikInput
                        name="name"
                        label={"Name"}
                        disabled={isDisabled}
                        placeholder="Name"
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="login"
                        label={"Login"}
                        disabled={isDisabled}
                        placeholder="Login"
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="password"
                        label={"Password"}
                        disabled={isDisabled}
                        placeholder="Password"
                      />
                    </Col>
                    {role === ROLE.Patient && (
                      <Col>
                        <FormikInput
                          name="age"
                          label={"Age"}
                          disabled={isDisabled}
                          placeholder="Age"
                        />
                      </Col>
                    )}
                    {role === ROLE.Patient && (
                      <Col>
                        <FormikInput
                          name="riskFactor"
                          label={"RiskFactor"}
                          disabled={isDisabled}
                          placeholder="Risk Factor"
                        />
                      </Col>
                    )}
                  </Row>
                </Form>
              </ModalBody>
              {!isDisabled && (
                <ModalFooter>
                  <Button onClick={submitForm} color="primary">
                    {mode === MODEL_MODE.Add ? "Submit" : "Edit"}
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
export default HumanModal;
