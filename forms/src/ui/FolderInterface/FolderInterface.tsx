
import { FileContextProvider } from '../../contexts/FileContext';

import BatchFile from '../../components/Files/BatchFiles/BatchFiles';

import '../../components/Forms/SingleForm/FormSelector.css';

export default function FolderInterface() {



    return (
        <FileContextProvider >
            <BatchFile />
        </FileContextProvider >
    );
}