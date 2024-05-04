import React from "react";
import { MODEL_MODE, getSuggestUrl } from "../../constants";
import {
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

const initialValues = {
  doctor: null,
  patient: null,
  symptoms: "",
  anamnesis: "",
  treatment: "",
};

const colClassName = "mb-3";

const DiseaseModel = ({ isOpen, onClose, mode }) => {
  const handleSubmit = (values) => {
    const modal = {
      ...values,
      doctorId: values.doctor.id,
      patinetId: values.patient.id,
    };

    console.log("handleSubmit values", values);
    console.log("handleSubmit modal", modal);
  };

  const isDisabled = mode === MODEL_MODE.View;
  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>DiseaseModel</ModalHeader>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          const { submitForm } = props;
          return (
            <>
              <ModalBody>
                <Form>
                  <Row xs="2" className="gy-2">
                    <Col>
                      <FormikSuggestTypeahead
                        labelKey={"name"}
                        name="doctor"
                        buildQuery={(query) => getSuggestUrl(query)}
                        disabled={isDisabled}
                        placeholder="Doctor"
                      />
                    </Col>
                    <Col>
                      <FormikSuggestTypeahead
                        labelKey={"name"}
                        name="patient"
                        buildQuery={(query) => getSuggestUrl(query)}
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
                  <Button onClick={submitForm} color="primary">
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
