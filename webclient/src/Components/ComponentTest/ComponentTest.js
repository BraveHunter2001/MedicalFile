import { Col, Row } from "reactstrap";
import TestTypeahed from "./TestTypeahed";
import { useState } from "react";
import axios from "axios";

const ComponentTest = () => {
  const [selected, setSelected] = useState();
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelected = (selected) => {
    console.log(selected?.[0]);
    setSelected(selected?.[0]);
  };

  const handleSearch = async (query) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `http://localhost:5220/api/test/suggests?query=${query}`
    );

    console.log("handleSearch", data);
    setOptions(data);
    setIsLoading(false);
  };

  return (
    <Row>
      <Col>
        <span>{selected?.name}</span>
      </Col>
      <Col>
        <TestTypeahed
          labelKey={"name"}
          onSelected={handleSelected}
          onSearch={handleSearch}
          searchedOptions={options}
          isLoading={isLoading}
        />
      </Col>
    </Row>
  );
};

export default ComponentTest;
