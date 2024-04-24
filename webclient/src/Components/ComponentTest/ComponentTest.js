import { Button, Col, Row } from "reactstrap";

import { useState } from "react";
import SuggestTypeahead from "../Typeaheads/SuggestTypeahead";
import { TestModal } from "./TestModal";

const ComponentTest = () => {
  const [selected, setSelected] = useState(null);
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);

  const handleSelected = (selected) => {
    setSelected(selected?.[0]);
  };
  const buildQuery = (query) => `api/test/suggests?query=${query}`;

  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={2}>
            <span>{selected?.name}</span>
          </Col>
          <Col xs={3}>
            <SuggestTypeahead
              id="1"
              labelKey={"name"}
              buildSuggestQuery={buildQuery}
              onSelected={handleSelected}
            />
          </Col>
        </Row>
      </Col>
      <Col>
        <Button onClick={() => setIsOpenTestModal(true)}>
          Show test modal
        </Button>
        <TestModal
          isOpen={isOpenTestModal}
          onClose={() => setIsOpenTestModal(false)}
        />
      </Col>
    </Row>
  );
};

export default ComponentTest;
