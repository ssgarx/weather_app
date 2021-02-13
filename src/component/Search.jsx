import React, { useState } from 'react'
import Weather from "./Weather";
import { Col, Container, Row, Button, Form } from 'react-bootstrap';

function Search() {
    var [inputCity, setInputCity] = useState("");
    var [submit, setSubmit] = useState(false);

    function handleSubmit(passedCityName) {
        passedCityName && setSubmit(true);
    }

    function handleReset() {
        setInputCity("")
        setSubmit(false);
    }

    function handleChange(e) {
        setSubmit(false);
        setInputCity(e.target.value);
    }

    return <>
        <Container fluid className="border p-3" style={{ maxWidth: "400px", marginTop: "200px" }}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group style={{ margin: "0" }} controlId="formBasicEmail">
                            <Form.Label >Enter city name</Form.Label>
                            <Col sm="13">
                                <Form.Control type="text" placeholder="Mumbai" onChange={handleChange} value={inputCity} />
                            </Col>
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <Button className="mt-1" variant="dark" onClick={() => handleSubmit(inputCity)}>
                                Search weather
                            </Button>
                            <Button className="ml-3 mt-1" variant="dark" onClick={() => handleReset()}>
                                Reset
                            </Button>
                        </Form.Group>
                    </Form>
                    {submit && <Weather inputCity={inputCity} />}
                </Col>
            </Row>
        </Container>

    </>
}

export default Search;
