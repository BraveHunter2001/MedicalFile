import { Col, Row, Container } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";
import { GET_DISEASE } from "../../constants";
import { getAsync } from "../../axiosUtils";

const HEADERS = [
  { title: "CreateDate", name: "createDate" },
  { title: "DoctorName", name: "doctorName" },
  { title: "PatientName", name: "patientName" },
  { title: "Symptoms", name: "symptoms" },
  { title: "Anamnesis", name: "anamnesis" },
  { title: "Treatment", name: "treatment" },
];

const Diseases = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [diseases, setDiseases] = useState(null);

  const handleSubmitDiseas = () => {
    setIsLoading(true);
    (async () => {
      const { isOk, data } = await getAsync(GET_DISEASE);
      isOk && data && setDiseases(data);
      setIsLoading(false);
    })();
  };

  const handleAddDiseas = () => {
    setTimeout(() => {}, 2000);
  };

  return (
    <Row className="flex-column">
      <Col className="pb-2 text-center">
        <LoadingButton
          size="sm"
          color="primary"
          className="px-4 mx-2"
          caption={"Get list"}
          isLoading={isLoading}
          classNameIcon={"me-1"}
          onClick={handleSubmitDiseas}
        />
        <LoadingButton
          size="sm"
          color="primary"
          className="px-4 mx-2"
          caption={"Add"}
          //isLoading={isLoading}
          classNameIcon={"me-1"}
          onClick={handleAddDiseas}
        />
      </Col>
      <Col>
        <CustomTable headers={HEADERS} items={diseases} />
      </Col>
    </Row>
  );
};

export default Diseases;
