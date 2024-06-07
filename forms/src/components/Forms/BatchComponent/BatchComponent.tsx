import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import FileCreator  from '../../../utilities/FileCreator';
import { useFormContext } from '../../../contexts/FormContext';

import '../SingleForm/FormSelector.css';
function BatchComponent() {

    const {responses, setResponses, selectedForm, displayResponses, setDisplayResponses } = useFormContext();

    
    //error interface used to handle errors in uploaded response data - i.e. not a JSON
    interface ResponseError {
        message: string;
    }

    const handleResponsesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const responsesInput = e.target.value.trim().split('\n');

        const newResponses = responsesInput.slice().map(response => (
            JSON.parse(response)
        ));
        setResponses(newResponses);
        console.log(responses);

        const shortResponsesInput = responsesInput.slice().map((response, index) => (
            `${index + 1}. ${response.substring(0, 50)} ... (continued) \n`
        ));
        setDisplayResponses(shortResponsesInput)

    }

    const handleRemoveRow = (index: any) => {
        const newData = [...responses];
        const newDisplayResponses = [...displayResponses];
        newData.splice(index, 1);
        newDisplayResponses.splice(index, 1);
        setResponses(newData);
        setDisplayResponses(newDisplayResponses)
    };

    return (
        <Container id="responses" className="widgetPanel blue">
            <p className="formHighlight contentWrap"><strong>Enter Trainee Responses</strong></p>
            <p>All responses should be for the same requirement type - ie 15 x DOPS or 10 x Evaluation Form.</p>
            <p><i>Follow the instructions in the user guides here</i></p>
            <hr />
            {displayResponses.map((disResp, index) => (
                <>
                <hr />
                <Row key={`response-${index}`}>
                    <Col>
                        <Form.Group className="mb-3" controlId="formMultipleResponses">
            
                            <Form.Text
                                className="text-muted"
                                placeholder="Enter Multiple Trainee Response JSON here"
                            >
                            </Form.Text>
                            <Form.Control
                                as="textarea"
                                name="response"
                                value={disResp}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleResponsesChange(e)}
                                placeholder="Response Data"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                    <div>
                        <p><strong>Selected Form: </strong> {selectedForm.name}</p>
                    </div>
                        <FileCreator response={responses[index]} selectedForm={selectedForm} />
                        <Button variant="danger" onClick={() => handleRemoveRow(index)}>
                            Remove
                        </Button>
                    </Col>
                </Row>
                <hr />
                </>
            ))}
        </Container>
    )
}

export default BatchComponent;