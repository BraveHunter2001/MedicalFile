import { Col, Row } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";

const HEADERS = [
  { title: "Name", name: "name" },
  { title: "Age", name: "age" },
  { title: "RiskFactor", name: "riskFactor" },
];

const mockItems = [
  {
    name: "Chaney Sanford",
    age: 52,
    riskFactor:
      "tempor erat neque non quam. Pellentesque habitant morbi tristique",
  },
  {
    name: "Isaac Arnold",
    age: 20,
    riskFactor: "orci. Phasellus dapibus quam quis",
  },
  {
    name: "Tobias Owens",
    age: 84,
    riskFactor: "risus.",
  },
  {
    name: "Adam Pickett",
    age: 63,
    riskFactor: "aliquet, metus urna convallis erat, eget tincidunt dui",
  },
  {
    name: "Jason Robles",
    age: 39,
    riskFactor: "eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec",
  },
  {
    name: "Rhoda Frost",
    age: 50,
    riskFactor: "Curabitur massa. Vestibulum accumsan neque et nunc. Quisque",
  },
  {
    name: "Anne Nolan",
    age: 15,
    riskFactor: "amet, risus.",
  },
  {
    name: "Adena Campos",
    age: 70,
    riskFactor: "velit eget laoreet posuere, enim nisl elementum",
  },
  {
    name: "Pearl Singleton",
    age: 39,
    riskFactor: "sociosqu ad litora torquent",
  },
  {
    name: "Dale Reed",
    age: 22,
    riskFactor: "scelerisque",
  },
];

const Patients = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState(null);

  const handleSubmitPatinet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPatients(mockItems);
      setIsLoading(false);
    }, 2000);
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
      </Col>
      <Col>
        <CustomTable headers={HEADERS} items={patients} hover={true} />
      </Col>
    </Row>
  );
};

export default Patients;
