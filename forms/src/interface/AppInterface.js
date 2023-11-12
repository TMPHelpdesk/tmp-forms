import './AppInterface.css';

import ProcessSurveyJs from '../components/ProcessSurveyJs/ProcessSurveyJs';
import { ContextProvider } from './Context/FormContext';
export default function AppInterface() {


  return (
    <ContextProvider>
      <ProcessSurveyJs />
    </ContextProvider>
  );
}