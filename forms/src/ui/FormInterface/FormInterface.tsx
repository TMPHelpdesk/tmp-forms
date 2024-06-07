

import { Tabs, Tab } from 'react-bootstrap';
import { ContextProvider } from '../../contexts/FormContext';

import FormChooser from '../../components/Forms/FormChooser/FormChooser'
import SingleForm from '../../components/Forms/SingleForm/SingleForm';
import BatchComponent from '../../components/Forms/BatchComponent/BatchComponent';
import ClearDataButton from '../../components/Forms/ClearDataButton/ClearDataButton';



export default function FormInterface() {

  return (
    <ContextProvider>
      <FormChooser />
      <hr />
      <Tabs
        defaultActiveKey="singleForm"
        id="processFormTabs"
        className="mb-3 formTab"
        variant="underline"

        fill
      >
        <Tab eventKey="singleForm" title="Single Form">
          <SingleForm />
        </Tab>
        <Tab eventKey="processFormBatch" title="Batch Forms">
          <BatchComponent />
        </Tab>
        
      </Tabs>
      <hr />
      <ClearDataButton />

    </ContextProvider>
  );
}