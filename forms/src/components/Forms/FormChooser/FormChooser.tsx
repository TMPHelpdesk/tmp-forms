
import Form from "react-bootstrap/Form";

import { specialties } from '../../../utilities/staticData';
import { useFormContext } from '../../../contexts/FormContext';



export default function FormChooser() {


    const { specialty, setSpecialty, selectedForm, setSelectedForm } = useFormContext();


    //Creates options for selecting required specialty 
    const specialtySelection = specialties.map(specialtyItem => {
        return (
            <option key={specialtyItem.shortName} value={specialtyItem.shortName}>{specialtyItem.longName.replace(/_/g, ' ')}</option>
        );
    });

    //creates the options for selecting required form
    const formSelection = specialty.forms.map(form => {
        return (
            <option key={form.name} value={form.name}>{form.name.replace(/_/g, ' ')}</option>
        );
    })

    //
    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecialty = e.target.value;
        for (const x in specialties) {
            if (specialties[x].shortName === selectedSpecialty) {
                const spec = specialties[x];
                setSpecialty(spec);
                break;
            }
        }
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const formSelection = e.target.value;
        for (let x in specialty.forms) {
            if (specialty.forms[x].name === formSelection) setSelectedForm(specialty.forms[x]);
        }

    }

    return (
        <>
            <Form>
                <p className="formHighlight contentWrap"><strong>Select Form</strong></p>
                <Form.Group className="mb-3" controlId="formSelectSpecialty">
                    <Form.Label ><strong>Select Specialty</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the available list" name="selectedSpecialty" value={specialty.shortName} onChange={e => handleSpecialtyChange(e)}>
                        <option>Select Specialty from the available list...</option>
                        {specialtySelection}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectForm">
                    <Form.Label><strong>Select Form</strong></Form.Label>
                    <br />
                    <Form.Select name="selectForm" value={selectedForm.name} onChange={e => handleFormChange(e)}>
                        <option>Select Form from the available list...</option>
                        {formSelection}
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    )
}