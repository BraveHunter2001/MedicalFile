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

  const handleSubmitPatinet = () => {
    setIsLoading(true);
    (async () => {
      const { isOk, data } = await getAsync(GET_PATIENTS);
      isOk &&
        data &&
        setPatients(
          data?.map((d) => ({
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
        <CustomTable headers={HEADERS} items={patients} role={ROLE.Patient} />
      </Col>
      <HumanModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          mode={MODEL_MODE.Edit}
          role={ROLE.Patient}
        />
    </Row>
  );
};

export default Patients;
