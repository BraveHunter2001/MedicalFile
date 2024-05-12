import { Col, Row, Container } from "reactstrap";
import CustomTable from "../Table/CustomTable";
import LoadingButton from "../Buttons/LoadingButton";
import { useState } from "react";

const HEADERS = [
    { title: "Name", name: "name" },
    { title: "Login", name: "login" },
];

const mockItems = [
    {
        name: "Chaney Sanford",
        login: "chanasanfo",
    },
    {
        name: "Isaac Arnold",
        login: "arnOLD",
    },
    {
        name: "Tobias Owens",
        login: "tobens",
    },
    {
        name: "Adam Pickett",
        login: "picketka",
    },
    {
        name: "Jason Robles",
        login: "rubbles",
    },
    {
        name: "Rhoda Frost",
        login: "RhodaFrostinio",
    },
    {
        name: "Anne Nolan",
        login: "Nolan Genius",
    },
    {
        name: "Adena Campos",
        login: "cumpost",
    },
    {
        name: "Pearl Singleton",
        login: "pearl factory",
    },
    {
        name: "Dale Reed",
        login: "dreed",
    },
];

const Doctors = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [doctors, setDoctors] = useState(null);

    const handleSubmitDoctor = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDoctors(mockItems);
            setIsLoading(false);
        }, 2000);
    };

    const handleAddDoctor = () => {
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
