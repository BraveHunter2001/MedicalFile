import { Col, Row } from "reactstrap";

import { useState } from "react";
import SuggestTypeahead from "./SuggestTypeahead";

const ComponentTest = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (selected) => {
    setSelected(selected?.[0]);
  };
  const buildQuery = (query) => `api/test/suggests?query=${query}`;

  return (
    <Row>
      <Col>
        <span>{selected?.name}</span>
      </Col>
      <Col>
        <SuggestTypeahead
          id="1"
          labelKey={"name"}
          buildSuggestQuery={buildQuery}
          onSelected={handleSelected}
        />
      </Col>
    </Row>
  );
};

export default ComponentTest;
