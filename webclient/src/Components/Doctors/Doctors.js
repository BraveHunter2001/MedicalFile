import { Col, Row, Container } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";
import { GET_DOCTORS } from "../../constants";
import { getAsync } from "../../axiosUtils";

const HEADERS = [
  { title: "Name", name: "name" },
  { title: "Login", name: "login" },
];

const Doctors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState(null);

  const handleSubmitDoctor = () => {
    setIsLoading(true);

    (async () => {
      const { isOk, data } = await getAsync(GET_DOCTORS);
      isOk && data && setDoctors(data);
    })();
    setIsLoading(false);
  };

  const handleAddDoctor = () => {
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
          onClick={handleSubmitDoctor}
        />
        <LoadingButton
          size="sm"
          color="primary"
          className="px-4 mx-2"
          caption={"Add"}
          //isLoading={isLoading}
          classNameIcon={"me-1"}
          onClick={handleAddDoctor}
        />
      </Col>
      <Col>
        <CustomTable headers={HEADERS} items={doctors} />
      </Col>
    </Row>
  );
};

export default Doctors;
