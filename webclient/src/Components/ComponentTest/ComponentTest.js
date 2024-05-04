import { Button, Col, Row } from "reactstrap";

import { useState } from "react";
import SuggestTypeahead from "../Typeaheads/SuggestTypeahead";
import { TestModal } from "./TestModal";
import DiseaseModel from "../Diseases/DiseaseModel";
import { MODEL_MODE } from "../../constants";

const ComponentTest = () => {
  const [selected, setSelected] = useState(null);
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);
  const [isOpenDiseaseModal, setIsOpenDiseaseModal] = useState(false);
  const [diseaseModalMode, setDiseaseModalMode] = useState(MODEL_MODE.Edit);

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
      <Col className="mt-3">
        <Row>
          <Col>
            <Button onClick={() => setIsOpenTestModal(true)}>
              Show test modal
            </Button>
          </Col>
          <Col>
            <Button onClick={() => setIsOpenDiseaseModal(true)}>
              Show Disease modal
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() =>
                setDiseaseModalMode(
                  diseaseModalMode === MODEL_MODE.Edit
                    ? MODEL_MODE.View
                    : MODEL_MODE.Edit
                )
              }
            >
              Switch modal [
              {diseaseModalMode !== MODEL_MODE.Edit ? "View" : "Edit"}]
            </Button>
          </Col>
        </Row>
        <TestModal
          isOpen={isOpenTestModal}
          onClose={() => setIsOpenTestModal(false)}
        />
        <DiseaseModel
          isOpen={isOpenDiseaseModal}
          onClose={() => setIsOpenDiseaseModal(false)}
          mode={diseaseModalMode}
        />
      </Col>
    </Row>
  );
};

export default ComponentTest;
