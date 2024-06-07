import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { FolderStructure, useFileContext } from '../../../contexts/FileContext';
import { fileSpecialties } from '../../../utilities/staticData';

import { cleanPrefix, findParentFolder } from '../../../utilities/prefixMaker';
import FolderCreator from '../../../utilities/FolderCreator';
import FileNameCreator from '../../../utilities/FileNameCreator';

export default function BatchFiles() {

    const {
        fileSpecialty,
        year,
        term,
        rotations,
        setRotations,
        folderStructures,
        setFolderStructures,
        formList
    } = useFileContext();




    const handleRotationInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputArray = (e.target.value).split('\n');

        console.log(inputArray);

        const outputArray = inputArray.map(rotation => {
            return cleanPrefix(rotation, year, term);
        })

        console.log(outputArray);
        setRotations(outputArray);

        const setStructure = inputArray.map(rotation => {
            return [findParentFolder(rotation, fileSpecialty), cleanPrefix(rotation, year, term)];
        });

        const createFolderStructures = (data: string[][]): FolderStructure[] => {

            const groupedData: { [key: string]: string[] } = {};

            data.forEach(([parentFolder, rotationFolder]) => {
                if (groupedData[parentFolder]) {
                    groupedData[parentFolder].push(rotationFolder);
                } else {
                    groupedData[parentFolder] = [rotationFolder];
                }
            });


            return Object.keys(groupedData).map(parentFolder => ({
                parentFolder,
                rotationFolders: groupedData[parentFolder]
            }));
        };

        setFolderStructures(createFolderStructures(setStructure));

    }

    const showFolders = folderStructures.map(folder => {
        const setLevel = folder.parentFolder;
        const folders = folder.rotationFolders.map(rotation => {
            return (<p>{rotation}</p>)
        })
        return (
            <>
                <hr />
                <p><strong>{setLevel}</strong></p>
                {folders}
                <hr />
            </>

        );
    })

    return (
        <>

            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group controlId="rotationInput" >
                                <Form.Text>Enter raw Rotation data here ie 'Joe Bloggs - GEN - R1-SET 1'</Form.Text>
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    onChange={handleRotationInput}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <p><strong>Folders and Prefixes</strong></p>
                            {showFolders}
                        </Col>
                        <Col>
                            <Button disabled variant="success">Output FileNames</Button>
                            <Button disabled variant="primary">Output Folders</Button>
                            <FolderCreator />
                            <FileNameCreator />
                        </Col>

                    </Row>
                </Container>


            </Form >
        </>
    )
}