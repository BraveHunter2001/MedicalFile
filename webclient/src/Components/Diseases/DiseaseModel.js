import React, { useEffect, useState } from "react";
import { GET_DISEASE, MODEL_MODE, ROLE, getSuggestUrl } from "../../constants";
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
  doctor: null,
  patient: null,
  symptoms: "",
  anamnesis: "",
  treatment: "",
};

const DiseaseModel = ({ isOpen, onClose, mode, diseaseId }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    if (!diseaseId || diseaseId === null) return;

    (async () => {
      const { isOk, data } = await getAsync(GET_DISEASE + `/${diseaseId}`);
      isOk &&
        data &&
        setDisease({
          ...data,
          doctor: { name: data.doctorName, id: data.doctorId },
          patient: { name: data.patientName, id: data.patientId },
        });
    })();
  }, [isOpen, diseaseId]);

  const handleSubmit = async (values) => {
    const modal = {
      ...values,
      doctorId: values.doctor.id,
      patientId: values.patient.id,
    };

    const method = mode === MODEL_MODE.Add ? postAsync : patchAsync;

    const { isOk, data } = await method("api/diseases", modal);
    setShowAlert(isOk);
  };

  const handleClose = () => {
    setShowAlert(false);
    disease && setDisease(null);
    onClose?.();
  };

  const isDisabled = mode === MODEL_MODE.View;
  const curInitialValues = disease ?? initialValues;
  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>DiseaseModel</ModalHeader>
      {showAlert && (
        <Alert color="success" className="m-2">
          Disease record successfuly created
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

export default DiseaseModel;
