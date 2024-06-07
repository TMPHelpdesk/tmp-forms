import Form from "react-bootstrap/Form";

import { useFormContext } from '../../../contexts/FormContext';
import './FormSelector.css';
import FormCreator from "../../../utilities/FormCreator";


export default function SingleForm() {
    const { selectedForm, response, setResponse } = useFormContext();


    //error interface used to handle errors in uploaded response data - i.e. not a JSON
    interface ResponseError {
        message: string;
    }

    const handleResponseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const responseInput = e.target.value;
        try {
            const responseJSON = JSON.parse(responseInput);
            setResponse(responseJSON);
        } catch (error) {
            if (error instanceof Error) {
                const responseError = error as ResponseError;
                setResponse(`ERROR: Please check your Trainee Response JSON. Error Message: ${responseError.message}`);
                console.log(responseError.message);
            } else {
                console.log('Generic error:', error);
            }
        }
    };




    return (
        <div id="formSelector" className="widgetPanel blue">
            <hr />
            <Form>
                <hr />
                <p className="formHighlight contentWrap"><strong>ENTER TRAINEE RESPONSE</strong></p>
                <Form.Group className="mb-3" controlId="formTraineeResponse">
                    <Form.Label for="formTraineeResponse"><strong>Trainee Response</strong></Form.Label>
                    <br />
                    <Form.Text className="text-muted">
                        Enter the Trainee Response JSON here
                    </Form.Text>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        value={JSON.stringify(response)}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleResponseChange(e)}
                    />
                </Form.Group>
                <Form.Text><strong>Survey Form - {selectedForm.name.replace(/_/g, ' ')}</strong></Form.Text>
                <br />
                <hr />
                <FormCreator response={response} />
            </Form>
        </div >
    );
}