import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

export default function SingleForm() {

  const [singleForm, setSingleForm] = useState({ survey: {}, response: {} });

  const handleChange = (e, formSection) => {

  }

  const handleResponseChange = (e) => {

  }

  const MainComponent = () => {
    const openFormInNewTab = () => {
      const survey = singleForm.survey;
      const response = singleForm.response;
      // Open a new tab
      const newTab = window.open('', '_blank');
      // Ensure newTab is not blocked by a popup blocker
      if (newTab) {
        newTab.document.write(`
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

              loadedSurvey.currentPageNo = 1;
              loadedSurvey.data = ${response};

              loadedSurvey.mode = 'display';

              $("#surveyElement").Survey({ model: loadedSurvey });
               </script>
            </body>
            
            </html>
            `);
      }
    };
    return (
      <Button variant="primary" type="submit" onClick={openFormInNewTab}>
        Create Printable PDF
      </Button>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formSurveyForm">
              <Form.Label><strong>Survey Form</strong></Form.Label>
              <br />
              <Form.Text className="text-muted">
                Enter the Assessment Form JSON here
              </Form.Text>
              <Form.Control
                as="textarea"
                rows={6}
                value={singleForm.survey}
                onChange={(e) => {

                  setSingleForm({
                    ...singleForm,
                    survey: e.target.value.replace(/""/g, '"')
                    // response: singleForm.response 
                  });
                }} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formTraineeResponse">
              <Form.Label><strong>Trainee Response</strong></Form.Label>
              <br />
              <Form.Text className="text-muted">
                Enter the Trainee Repsonse JSON here
              </Form.Text>
              <Form.Control
                as="textarea"
                rows={6}
                value={singleForm.response}
                onChange={(e) => {
                  console.log('Current value:' + e.target.value);
                  setSingleForm({
                    ...singleForm,
                    response: e.target.value.replace(/""/g, '"')
                  });
                }} />
            </Form.Group>
            <MainComponent />
            <Button variant="danger" onClick={(e) => setSingleForm({ survey: '', response: '' })}>Clear Data</Button>
          </Form>
        </Col>
        <Col>
          <h3>Current Selection </h3>
          <div>
            <p>FORM JSON</p>
            <p id="currentSurvey">{JSON.stringify(singleForm.survey)}</p>
          </div>
          <div>
            <p>RESPONSE JSON</p>
            <p id="currentResponse">{JSON.stringify(singleForm.response)}</p>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
