import { Button } from "react-bootstrap";

import 'survey-react/survey.css';
import { useFormContext } from "../contexts/FormContext";



export default function FormCreator(props: any) {
  
  const { selectedForm } = useFormContext();



  const form = props.selectedForm || selectedForm;

  const openFormInNewTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const survey = JSON.stringify(form.data);
    const surveyResponse = JSON.stringify(props.response);
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



