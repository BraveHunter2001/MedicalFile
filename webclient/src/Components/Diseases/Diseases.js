import { Col, Row, Container } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";
import { GET_DISEASE, MODEL_MODE } from "../../constants";
import { getAsync } from "../../axiosUtils";
import DiseaseModel from "./DiseaseModel";

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
  const [isShowDiseaseModal, setIsShowDiseaseModal] = useState(false);
  const [modalType, setModalType] = useState(MODEL_MODE.View);
  const [diseases, setDiseases] = useState(null);

  const getDiseases = async () => {
    const { isOk, data } = await getAsync(GET_DISEASE);
    isOk && data && setDiseases(data);
  };

  const handleSubmitDiseas = () => {
    setIsLoading(true);
    (async () => {
      await getDiseases();
      setIsLoading(false);
    })();
  };

  const handleAddDiseas = () => {
    setIsShowDiseaseModal(true);
    setModalType(MODEL_MODE.Edit);
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
      <DiseaseModel
        isOpen={isShowDiseaseModal}
        onClose={() => {
          getDiseases();
          setIsShowDiseaseModal(false);
        }}
        mode={modalType}
      />
    </Row>
  );
};

export default Diseases;
