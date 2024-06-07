
import { FileContextProvider } from '../../contexts/FileContext';

import BatchFiles from '../../components/Files/BatchFiles/BatchFiles';

import '../../components/Forms/SingleForm/FormSelector.css';
import FileChooser from '../../components/Files/FileChooser/FileChooser';

export default function FolderInterface() {



    return (
        <FileContextProvider >
            <FileChooser />
            <BatchFiles />
        </FileContextProvider >
    );
}