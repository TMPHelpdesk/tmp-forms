import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { specialties } from '../../utilities/staticData';
import { useFormContext, TMPForm } from '../../interface/Context/FormContext';
import { useState } from "react";

import './FormSelector.css';

export default function FormSelector() {
    const { specialty, setSpecialty, selectedForm, setSelectedForm } = useFormContext();
    const initialSelectedForm: TMPForm = { name: 'No Form Selected', data: {} }; //used tto initialize the interface
    const initialForms: TMPForm[] = [initialSelectedForm];

    const [forms, setForms] = useState(initialForms); // Collection of forms for chosen specialty
    const [response, setResponse] = useState("No Response yet"); //Trainee response added by user

    //Creates options for selecting required specialty 
    const specialtySelection = specialties.map(specialtyItem => {
        return (
            <option key={specialtyItem.shortName} value={specialtyItem.shortName}>{specialtyItem.longName.replace(/_/g, ' ')}</option>
        );
    });

    //creates the options for selecting required form
    const formSelection = forms.map(form => {
        return (
            <option key={form.name} value={form.name}>{form.name.replace(/_/g, ' ')}</option>
        );
    })

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecialty = e.target.value;
        for (const x in specialties) {
            if (specialties[x].shortName === selectedSpecialty) {
                const spec = specialties[x];
                const forms = spec.forms;
                setSpecialty(spec);
                setForms(forms);
                break;
            }
        }
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const formSelection = e.target.value;
        for (let x in forms) {
            if (forms[x].name === formSelection) setSelectedForm(forms[x]);
        }

    }

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

    //Composite function that creates button and executes the creation of the required form in a new tab
    const MainComponent = () => {
        const openFormInNewTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            const survey = JSON.stringify(selectedForm.data);
            const surveyResponse = JSON.stringify(response);
            // Open a new tab
            const newTab = window.open('', '_blank');
            // Ensure newTab is not blocked by a popup blocker
            if (newTab) {
                const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <!-- JQuery-->
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
                  <!-- All the survey JS Stuff -->
                  <!-- Default V2 theme  - used on the web paeg but harder to customise-->
                  <!--   <link href="https://unpkg.com/survey-jquery/defaultV2.min.css" type="text/css" rel="stylesheet">-->
                  <!-- Modern theme -->
                  <link href="https://unpkg.com/survey-jquery/modern.min.css" type="text/css" rel="stylesheet">
                  <script type="text/javascript" src="https://unpkg.com/survey-jquery/survey.jquery.min.js"></script>
                  <!-- ... -->
                  <!-- Personal Style Sheet-->
                <style>
                  body{
                    font-size: 50%;
                    color: black !important;
                  }
                  .sv-radio__svg {
                  border: 3px solid var(--border-color, rgba(0, 0, 0, 0)) !important;
                  border-radius: 100%;
                  fill: rgba(0, 0, 0, 0) !important;
                  }
                  .sv-radio--checked .sv-radio__svg {
                  border-color: var(--radio-checked-color, #000) !important;
                  fill: var(--radio-checked-color, #000)!important;
                  }
                  .input.sv-text, textarea.sv-comment, select.sv-dropdown {
                  color: var(--text-color, #000) !important;
                  background-color: var(--inputs-background-color, white)
                  }
                  </style>
                
                  <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300&display=swap"
                    rel="stylesheet">
                  <!-- ... -->
                  <title>TMP Assessment</title>
                </head>
                <body>
                  <div id="surveyElement"></div>
                  <!--We are adding the form inline so as to minimise the dependencies -->
                  <script type="text/javascript">
                  const loadedSurvey = new Survey.Model(${survey});
                  loadedSurvey.data = ${surveyResponse};
    
                  loadedSurvey.mode = 'display';
    
                  $("#surveyElement").Survey({ model: loadedSurvey });
                   </script>
                </body>
                
                </html>
                `;
                newTab.document.open();
                newTab.document.write(htmlContent);
                newTab.document.close();
            } else {
                // Handle the case where the new tab couldn't be opened
                console.log('Failed to open a new tab.');
            }

        };
        return (
            <Button variant="success" type="submit" onClick={openFormInNewTab}>
                Create Printable PDF
            </Button>
        );
    };
    /*
     
     
    */
    return (
        <div id="formSelector" className="widgetPanel blue">
            <hr />
            <h2 className="formHighlight">Create Printable Assessment Form</h2>
            <div>
                <p>This widget aims to assist the creation of PDFs of submitted forms using the new Survey JS platform</p>
                <hr />
                <ol>
                    <li>Select the required form</li>
                    <li>Enter the JSON data in the text boxes below (Get the Trainee's Response JSON from TMP)</li>
                    <li>Click Create Printable PDF (new Tab with survey will show up)</li>
                    <li>Print file to PDF</li>
                </ol>
                <p><strong>TIP: </strong> Use the print window's zoom function to get the desired print size</p>
                <p>This setting should remain set if you are doing a bulk print - set it once at the start of your print run.</p>
            </div>

            <hr />
            <Form>
                <p className="formHighlight contentWrap"><strong>1. SELECT FORM</strong></p>
                <Form.Group className="mb-3" controlId="formSelectSpecialty">
                    <Form.Label><strong>Select Specialty</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the available list" name="selectedSpecialty" value={specialty.shortName} onChange={e => handleSpecialtyChange(e)}>
                        <option>Select Specialty from the available list...</option>
                        {specialtySelection}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectForm">
                    <Form.Label><strong>Select Form</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Form from the available list" name="selectForm" value={selectedForm.name} onChange={e => handleFormChange(e)}>
                        <option>Select Form from the available list...</option>
                        {formSelection}
                    </Form.Select>
                </Form.Group>
                <hr />
                <p className="formHighlight contentWrap"><strong>2.ENTER TRAINEE RESPONSE</strong></p>
                <Tabs
                    defaultActiveKey="singleForm"
                    id="processFormTabs"
                    className="mb-3"
                    variant="pills"
                >
                    <Tab eventKey="singleForm" title="Single Form">
                        <p className="formHighlight contentWrap"><strong>USE THIS FOR MULTIPLE PAGE FORMS</strong></p>
                        <p>Use this option for multiple page forms (i.e summative assessments).</p>
                        <p>The menu on the left is clickable. Click each menu item to reveal that page for printing</p>
                        <p>Each page of the form will need to be <strong>printed separately and then collated.</strong></p>
                        <Form.Group className="mb-3" controlId="formTraineeResponse">
                            <Form.Label><strong>Trainee Response</strong></Form.Label>
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
                        <Form.Group className="mb-3" controlId="formSurveyForm">
                            <Form.Label><strong>Survey Form - {selectedForm.name.replace(/_/g, ' ')}</strong></Form.Label>
                            <br />
                            <Form.Text className="fw-light">
                                Assessment Form JSON - READ ONLY. Select form from options above.
                            </Form.Text>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={JSON.stringify(selectedForm)}
                                readOnly
                                className="readOnlyForm"
                            />
                        </Form.Group>
                        <p className="formHighlight contentWrap"><strong>3. CREATE PRINTABLE FORM</strong></p>
                        <MainComponent />
                        <p className="formHighlight contentWrap"><strong>4. PRINT FORM FROM NEW TAB</strong></p>
                        <Button variant="warning" type="submit">CLEAR DATA</Button>


                    </Tab>
                    <Tab className="inProgress" eventKey="processFormBatch" title="Process Form Batch - Coming Soon">
                        <div className="formWarning contentWrap">
                            <p><strong>DO NOT USE THIS FOR MULTIPLE PAGE FORMS</strong></p>
                        </div>
                        <p>This option is not available for multiple page forms. (i.e summative assessments).</p>
                        <p>Each page of the form will need to be printed separately and then collated.</p>

                        <p><i>This functionality is nearly ready. At present you will have to process files one by one. Sad face emoji.</i></p>
                        <p>This will allow the processing of multiples <strong>of the same requirement</strong> e.g - 15 x DOPS or 5 x Case-Based-Discussion</p>
                    </Tab>
                    <Tab className="inProgress" eventKey="Trainee Wizard" title="Trainee Wizard - Coming Soon">
                        <p><i>This functionality is still being built. At present you will have to process files one by one. Sad face emoji.</i></p>
                        <p>This module will aim to take a trainee's assessment records, and process them by Trainee</p>
                    </Tab>
                </Tabs>
            </Form>
        </div>
    );
}