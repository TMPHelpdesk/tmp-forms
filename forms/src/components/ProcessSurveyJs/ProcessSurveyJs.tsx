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
                <p><strong>Step 1:</strong>Select the required form</p>
                <p><strong>Step 2:</strong>Get the Trainee's Response JSON from TMP </p>
                <p><strong>Step 3:</strong> Enter the JSON data in the text boxes below</p>
                <p><strong>Step 4:</strong> Click Create Printable PDF (new Tab with survey will show up)</p>
                <p><strong>Step 5:</strong> Print file to PDF</p>
                <p><strong>TIP: </strong> Use the print window's zoom function to get the desired print size</p>
                <p>This setting should remain set if you are doing a bulk print - set it once at the start of your print run</p>
                <hr />
                <hr />
            </div>
            <FormSelector />
            <Tabs
                defaultActiveKey="processSingleForm"
                id="processSurveyJsTabs"
                className="mb-3"
            >
                <Tab eventKey="processSingleForm" title="Process Single Form">
                    <p><strong>Best for multiple page forms (i.e summative assessments)</strong></p>
                    <p><strong>Each page of the form will need to be printed separately.</strong></p>
                    <SingleForm />
                </Tab>
                <Tab className="inProgress" eventKey="processFormBatch" title="Process Form Batch - Coming Soon">
                    <p><i>This functionality is nearly ready. At present you will have to process files one by one. Sad face emoji.</i></p>
                    <p>This will allow the processing of multiples <strong>of the same requirement</strong> e.g - 15 x DOPS or 5 x Case-Based-Discussion</p>

                </Tab>
                <Tab className="inProgress" eventKey="Trainee Wizard" title="Trainee Wizard - Coming Soon">
                    <p><i>This functionality is still being built. At present you will have to process files one by one. Sad face emoji.</i></p>
                    <p>This module will aim to take a trainee's assessment records, and process them by Trainee</p>

                </Tab>

            </Tabs>
            <hr />
        </>
    )

}