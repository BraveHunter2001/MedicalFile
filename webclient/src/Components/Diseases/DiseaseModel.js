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
  doctor: null,
  patient: null,
  symptoms: "",
  anamnesis: "",
  treatment: "",
};

const DiseaseModel = ({ isOpen, onClose, mode }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (values) => {
    const modal = {
      ...values,
      doctorId: values.doctor.id,
      patientId: values.patient.id,
    };

    const { isOk, data } = await postAsync("api/diseases", modal);
    setShowAlert(isOk);
  };

  const handleClose = () => {
    setShowAlert(false);
    onClose?.();
  };

  const isDisabled = mode === MODEL_MODE.View;
  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>DiseaseModel</ModalHeader>
      {showAlert && (
        <Alert color="success" className="m-2">
          Disease record successfuly created
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
                        labelKey={"name"}
                        name="doctor"
                        buildQuery={(query) =>
                          getSuggestUrl(query, ROLE.Doctor)
                        }
                        disabled={isDisabled}
                        placeholder="Doctor"
                      />
                    </Col>
                    <Col>
                      <FormikSuggestTypeahead
                        labelKey={"name"}
                        name="patient"
                        buildQuery={(query) =>
                          getSuggestUrl(query, ROLE.Patient)
                        }
                        disabled={isDisabled}
                        placeholder="Patient"
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="symptoms"
                        label={"Symptoms"}
                        disabled={isDisabled}
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="anamnesis"
                        label={"Anamnesis"}
                        disabled={isDisabled}
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        name="treatment"
                        label={"Treatment"}
                        disabled={isDisabled}
                      />
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
              {!isDisabled && (
                <ModalFooter>
                  <Button
                    onClick={submitForm}
                    color="primary"
                    disabled={!values.doctor || !values.patient}
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

export default DiseaseModel;
