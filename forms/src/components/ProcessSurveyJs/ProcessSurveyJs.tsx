import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import SingleForm from './SingleForm/SingleForm';
import FormSelector from '../FormSelector/FormSelector';

export default function ProcessSurveyJs() {


    return (
        <>
            <h1>Process SurveyJs Assessment Form</h1>
            <div>
                <p>This widget aims to assist the creation of PDFs of submitted forms using the new Survey JS platform</p>
                <hr />
                <ol>
                    <li>Select the required form</li>
                    <li>Get the Trainee's Response JSON from TMP </li>
                    <li>Enter the JSON data in the text boxes below</li>
                    <li>Click Create Printable PDF (new Tab with survey will show up)</li>
                    <li>Print file to PDF</li>
                </ol>
                <p><strong>TIP: </strong> Use the print window's zoom function to get the desired print size</p>
                <p>This setting should remain set if you are doing a bulk print - set it once at the start of your print run</p>
                <hr />
                <hr />
            </div>
            <FormSelector />
            <hr />
        </>
    )

}