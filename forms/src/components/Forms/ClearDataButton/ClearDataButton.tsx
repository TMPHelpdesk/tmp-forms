
import Button from "react-bootstrap/Button";
import { useFormContext } from "../../../contexts/FormContext";
import { Modal } from "react-bootstrap";
import { useState } from "react";


export default function ClearDataButton(props: any) {

    const { setSpecialty, setSelectedForm, setResponse, setResponses, setDisplayResponses} = useFormContext();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const clearData = () => {

        setSpecialty({ shortName: '', longName: '', forms: [{ name: '', data: {} }],  });
        setSelectedForm({ name: '', data: {} });
        setResponse({});
        setResponses([{}]);
        setDisplayResponses([""]);

        handleClose();
    }


    return (
        <>
            <Button variant="danger" onClick={handleShow}>CLEAR DATA</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Clear All Entered Data?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>WARNING</h1>
                    <br />
                    <p>Clear all entered data?</p>
                    <p>This action cannot be undone</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={clearData}>
                        Clear Data
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}