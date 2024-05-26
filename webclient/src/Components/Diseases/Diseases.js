import { Col, Row, Container } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";

const HEADERS = [
  { title: "CreateDate", name: "createDate" },
  { title: "DoctorName", name: "doctorName" },
  { title: "PatientName", name: "patientName" },
  { title: "Symptoms", name: "symptoms" },
  { title: "Anamnesis", name: "anamnesis" },
  { title: "Treatment", name: "treatment" },
];

const mockItems = [
  {
    createDate: "2024-05-13",
    doctorName: "Chaney Sanford",
    patientName: "Isaac Arnold",
    symptoms: "high temperature",
    anamnesis: "last 5 days",
    treatment: "pills",
  },
  {
    createDate: "2024-04-02",
    doctorName: "Tobias Owens",
    patientName: "Adam Pickett",
    symptoms: "cough",
    anamnesis: "one week per every mounth of the year",
    treatment: "lung examination",
  },
  {
    createDate: "2023-09-23",
    doctorName: "Jason Robles",
    patientName: "Rhoda Frost",
    symptoms: "stomachache",
    anamnesis: "ate an exotic fruit",
    treatment: "tomography of the abdomen",
  },
  {
    createDate: "2024-01-01",
    doctorName: "Anne Nolan",
    patientName: "Adena Campos",
    symptoms: "alcohol poisoning",
    anamnesis: "drank all types of alcohol on New Year's Eve",
    treatment: "absorbents and liver check",
  },
  {
    createDate: "2024-02-14",
    doctorName: "Pearl Singleton",
    patientName: "Dale Reed",
    symptoms: "Broken dick",
    anamnesis: "celebrated February 14th with a girl",
    treatment: "emergency surgery to restore tissue",
  },
];

const Diseases = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [diseases, setDiseases] = useState(null);

  const handleSubmitDiseas = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDiseases(mockItems);
      setIsLoading(false);
    }, 2000);
  };

  const handleAddDiseas = () => {
    setTimeout(() => {
    }, 2000);
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
