import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function AboutModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                About TMP Forms
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This widget aims to assist the creation of PDFs of submitted Survey JS forms</p>
                    <hr />
                    <ol>
                        <li>Select the required form</li>
                        <li>Enter the JSON data in the text boxes below (Get the Trainee's Response JSON from TMP)</li>
                        <li>Click Create Printable PDF (new Tab with survey will show up)</li>
                        <li>Print file to PDF</li>
                    </ol>
                    <p><strong>TIP: </strong> Use the print window's zoom function to get the desired print size</p>
                    <p>This setting should remain set if you are doing a bulk print - set it once at the start of your print run.</p>
                    <br />
                    <p>If there is time there will also be tools to create file names and folders for the trainees.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
