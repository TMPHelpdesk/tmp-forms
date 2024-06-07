import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { useFileContext } from '../../../contexts/FileContext';
import { fileSpecialties } from '../../../utilities/staticData';

import { cleanPrefix } from '../../../utilities/prefixMaker';

export default function BatchFiles() {

    const {
        fileSpecialty,
        setFileSpecialty,
        year,
        setYear,
        term,
        setTerm,
        trainees,
        setTrainees,
        formList,
        setFormList
    } = useFileContext();


    //Creates options for selecting required specialty 
    const fileSpecialtySelection = fileSpecialties.map(specialtyItem => {
        return (
            <option key={specialtyItem.shortName} value={specialtyItem.shortName}>{specialtyItem.longName.replace(/_/g, ' ')}</option>
        );
    });

    //TermLabels for selection
    const termLabels = [
        { name: "Mid Term Assessment", shortName: "MT" }
        ,
        { name: "End of Term Assessment", shortName: "ET" }
    ];
    const terms = termLabels.map(term => {
        return (
            <option key={term.shortName} value={term.shortName}>{term.name}</option>
        );
    })

    //YEARS FUNCTION - NEEDS FLEXIBILITY
    const years = [];
    for (let x = 0; x < 10; x++) {
        years.push(2023 + x);
    }
    const yearOptions = years.map(year => {
        return (<option value={`${year}`} key={`${year}`}>{`${year}`}</option>);
    });

    const handleFileSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecialty = e.target.value;
        for (const x in fileSpecialties) {
            if (fileSpecialties[x].shortName === selectedSpecialty) {
                const spec = fileSpecialties[x];
                setFileSpecialty(spec);
                const chosenFormList = spec.forms.map(form => {
                    return form.name;
                })
                setFormList(chosenFormList);
                break;
            }
        }
    }

    const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
    }

    const handleYearChange =(e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = e.target.value
        setYear(newYear);
    };

    const handleRotationInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputArray = (e.target.value).split('\n');
    
        console.log(inputArray);
        const outputArray = inputArray.map(rotation => {
            return cleanPrefix(rotation, year, term);
        })

        console.log(outputArray);
        setTrainees(outputArray);
    }

    const showTrainees = trainees.map(trainee => {
        return (<p>{trainee}</p>);
    })

    const showForms = formList.map(form => {
        return (<p>{form}</p>)
    })

    return (
        <>
            
            <Form>
            <p><strong>Batch File Names and Folders</strong></p>
                <Container>
                    <Row>
                        <Col>
                            <Form.Select aria-label="YEAR" name="year" value={year} onChange={handleYearChange}>
                                <option>Select Year</option>
                                {yearOptions}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="SPECIALTY" name="specialty" value={fileSpecialty.shortName} onChange={handleFileSpecialtyChange} >
                                <option>Choose a Specialty</option>
                                {fileSpecialtySelection}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="TERM" name="term" value={term} onChange={handleTermChange}>
                                <option>Term Period</option>
                                {terms}
                            </Form.Select>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                        <Form.Group controlId="rotationInput" >
                        <Form.Text>Enter raw Rotation data here</Form.Text>
                        <Form.Control 
                            as="textarea"
                            rows={10}
                            onChange={handleRotationInput}
                        />
                        </Form.Group>
                        </Col>  
                        <Col>
                        <p><strong>Trainee Rotations - File Prefixes</strong></p>
                        {showTrainees}
                        </Col> 
                        <Col>
                        <p><strong>Current list of Forms</strong></p>
                        {showForms}
                        </Col>         
                    </Row>
                </Container>
                <Button disabled variant="success">Output FileNames</Button>
                <Button disabled variant="primary">Output Folders</Button>
            </Form >
        </>
    )
}