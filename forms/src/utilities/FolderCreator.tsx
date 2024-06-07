import { Button } from "react-bootstrap";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { useFileContext } from "../contexts/FileContext";


export default function FolderCreator() {

    const { year, term, fileSpecialty, folderStructures } = useFileContext();

    const createZip = async () => {
        const zip = new JSZip();

        const zipFileName = `${year}-${fileSpecialty.shortName}-${term}`
        // Creating root folder
        const rootFolder = zip.folder(zipFileName);

        // Iterate over the folder data and create folders
        if (rootFolder) {
            folderStructures.forEach(({ parentFolder, rotationFolders }) => {
                const parent = rootFolder.folder(parentFolder);
                if (parent) {
                    rotationFolders.forEach((rotationFolder) => {
                        parent.folder(rotationFolder);
                    });
                }
            });
        }


        // Generate the zip file and save it
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, `${zipFileName}.zip`);
    };




    return (
        <Button onClick={createZip}>
            Generator Folders
        </Button>
    )
}