import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from 'react-bootstrap/FormControl';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { specialties } from '../../utilities/staticData';
import { useFormContext, TMPForm } from '../../interface/Context/FormContext';
import { useState } from "react";

import SingleForm from "../ProcessSurveyJs/SingleForm/SingleForm";

export default function FormSelector() {
    const { specialty, setSpecialty, selectedForm, setSelectedForm } = useFormContext();
    const initialSelectedForm: TMPForm = { name: '', data: {} };
    const initialForms: TMPForm[] = [initialSelectedForm];
    const [forms, setForms] = useState(initialForms);

    const [response, setResponse] = useState("No Response yet");

    const specialtySelection = specialties.map(specialtyItem => {
        return (
            <option key={specialtyItem.shortName} value={specialtyItem.shortName}>{specialtyItem.longName}</option>
        );
    });

    const formSelection = forms.map(form => {
        return (
            <option key={form.name} value={form.name}>{form.name}</option>
        );
    })

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecialty = e.target.value;
        for (const x in specialties) {
            if (specialties[x].shortName === selectedSpecialty) {
                const spec = specialties[x];
                const forms = spec.forms;
                setSpecialty(spec);
                //diagnostic
                console.log(JSON.stringify(spec));
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
                setResponse(responseError.message);
                console.log(responseError.message);
            } else {
                console.log('Generic error:', error);
            }
        }
    };

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
            <Button variant="primary" type="submit" onClick={openFormInNewTab}>
                Create Printable PDF
            </Button>
        );
    };
    /*
     
     
    */
    return (
        <div id="formSelector" className="widgetPanel blue">
            <p><strong>FORM SELECTOR</strong></p>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formSelectSpecialty">
                    <Form.Label><strong>Select Specialty</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the available list" name="selectedSpecialty" value={specialty.shortName} onChange={e => handleSpecialtyChange(e)}>
                        <option>Select Specialty</option>
                        {specialtySelection}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectForm">
                    <Form.Label><strong>Select Form</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Form from the available list" name="selectForm" value={selectedForm.name} onChange={e => handleFormChange(e)}>
                        <option>Select Form</option>
                        {formSelection}
                    </Form.Select>
                </Form.Group>

                <Tabs
                    defaultActiveKey="singleForm"
                    id="processFormTabs"
                    className="mb-3"
                >
                    <Tab eventKey="singleForm" title="Single Form">
                        <p><strong>Best for multiple page forms (i.e summative assessments)</strong></p>
                        <p><strong>Each page of the form will need to be printed separately.</strong></p>

                        <Form.Group className="mb-3" controlId="formTraineeResponse">
                            <Form.Label><strong>Trainee Response</strong></Form.Label>
                            <br />
                            <Form.Text className="text-muted">
                                Enter the Trainee Repsonse JSON here
                            </Form.Text>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={JSON.stringify(response)}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleResponseChange(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSurveyForm">
                            <Form.Label><strong>Survey Form - {selectedForm.name}</strong></Form.Label>
                            <br />
                            <Form.Text className="text-muted">
                                Assessment Form JSON
                            </Form.Text>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={JSON.stringify(selectedForm)}
                            />
                        </Form.Group>
                        <MainComponent />
                        <Button variant="dark" type="submit">CLEAR DATA</Button>


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
            </Form>
        </div>
    );
}