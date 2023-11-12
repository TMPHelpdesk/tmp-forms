import { Form } from "react-bootstrap";






export default function FormSelector() {




    return (
        <>
            <hr />
            <p>Select a Form from the list provided - this will get your data.</p>
            <p>We also need to work out how we are presenting this data</p>
            <hr />
            <h2>FORM SELECTOR</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formSelectSpecialty">
                    <Form.Label><strong>Select Specialty</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the avilable list">
                        <option>Select Specialty</option>
                        <option value="ASPS">ASPS - Plastic and Reconstructive Surgery Australia</option>
                        <option value="CARDIO">Cardiothoracic Surgery</option>
                        <option value="PAEDS">Paediatric Surgery</option>
                        <option value="SIMG">SIMG</option> 
                        <option value="VASC">Vascular Surgery</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectForm">
                    <Form.Label><strong>Select Form</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the avilable list">
                        <option>Select Form</option>
                        <option value="ASPS">ASPS - Plastic and Reconstructive Surgery Australia</option>
                        <option value="CARDIO">Cardiothoracic Surgery</option>
                        <option value="PAEDS">Paediatric Surgery</option>
                        <option value="SIMG">SIMG</option> 
                        <option value="VASC">Vascular Surgery</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    );
}