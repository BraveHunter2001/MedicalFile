import { Col, Row } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";
import { getAsync } from "../../axiosUtils";
import { GET_PATIENTS } from "../../constants";

import { MODEL_MODE } from "../../constants";
import { ROLE } from "../../constants";

import HumanModal from "../Formik/HumanModal";

const HEADERS = [
  { title: "Name", name: "name" },
  { title: "Age", name: "age" },
  { title: "RiskFactor", name: "riskFactor" },
];

const Patients = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [patientId, setPatientId] = useState(null);
  const [modalType, setModalType] = useState(MODEL_MODE.View);

  const handleSubmitPatinet = () => {
    setIsLoading(true);
    (async () => {
      const { isOk, data } = await getAsync(GET_PATIENTS);
      isOk &&
        data &&
        setPatients(
          data?.map((d) => ({
            id: d.id,
            name: d.name,
            age: d.patientCharacteristic.age,
            riskFactor: d.patientCharacteristic.riskFactor,
          }))
        );
    })();

    setIsLoading(false);
  };

  const handleAddPatient = () => {
    setIsOpenModal(true);
    setModalType(MODEL_MODE.Add);
  };

  const handleView = (itemId) => {
    setPatientId(itemId);
    setIsOpenModal(true);
    setModalType(MODEL_MODE.View);
  };

  return (
    <Row className="flex-column">
      <Col className="pb-2 text-center">
        <LoadingButton
          size="sm"
          color="primary"
          className="px-4"
          caption={"Get list"}
          isLoading={isLoading}
          classNameIcon={"me-1"}
          onClick={handleSubmitPatinet}
        />
        <LoadingButton
          size="sm"
          color="primary"
          className="px-4 mx-2"
          caption={"Add"}
          //isLoading={isLoading}
          classNameIcon={"me-1"}
          onClick={handleAddPatient}
        />
      </Col>
      <Col>
        <CustomTable
          headers={HEADERS}
          items={patients}
          role={ROLE.Patient}
          onViewItem={handleView}
        />
      </Col>
      <HumanModal
        isOpen={isOpenModal}
        userId={patientId}
        onClose={() => {
          setIsOpenModal(false);
          setPatientId(null);
        }}
        mode={modalType}
        role={ROLE.Patient}
      />
    </Row>
  );
};

export default Patients;
