
import { Tab, Tabs } from 'react-bootstrap';

import FolderInterface from '../FolderInterface/FolderInterface';
import FormInterface from '../FormInterface/FormInterface';
import '../../components/Forms/SingleForm/FormSelector.css';

export default function LandingArea() {


    return (
        <Tabs
        defaultActiveKey="createForms"
        id="LandingTabs"
        className="mb-3 formTab"
        fill
      >
            <Tab title='Create Forms' eventKey="createForms">
                <FormInterface />
            </Tab>
            <Tab title='Create Files and Folders' eventKey="createFolders" >
                <FolderInterface />
            </Tab>
        </Tabs>
    )
}
