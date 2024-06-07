
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { useFileContext } from '../../../contexts/FileContext';
import { fileSpecialties } from '../../../utilities/staticData';



export default function FileChooser() {

    const {
        fileSpecialty,
        setFileSpecialty,
        year,
        setYear,
        term,
        setTerm,
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

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = e.target.value
        setYear(newYear);
    };

    return (
        <>
            <p><strong>Batch File Names and Folders</strong></p>
            <Form>
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
                </Container>
            </Form>
        </>
    );

}