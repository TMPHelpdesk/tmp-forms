import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { specialties } from '../../utilities/staticData';
import { useFormContext, TMPForm } from '../../interface/Context/FormContext';
import { useState } from "react";

export default function FormSelector() {
    const { specialty, setSpecialty, selectedForm, setSelectedForm} = useFormContext();
    const initialSelectedForm: TMPForm = { name: '', data: {} };
    const initialForms: TMPForm[] = [initialSelectedForm];


    const [forms, setForms] = useState(initialForms);
    const specialtySelection = specialties.map(specialtyItem => {
        return (
            <option key={specialtyItem.shortName} value={specialtyItem.shortName}>{specialtyItem.longName}</option>
        );
    });

    const formSelection = forms.map(form => {
        return(
            <option key={form.name} value={form.name}>{form.name}</option>
        );
    })

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecialty = e.target.value;
        for(const x in specialties){
            if(specialties[x].shortName === selectedSpecialty) {
                const spec = specialties[x];
                const forms = spec.forms;
                setSpecialty(spec);
                setForms(forms);
            break;
            }
        }
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const formSelection = e.target.value;
        for(let x in forms){
            if(forms[x].name === formSelection) setSelectedForm(forms[x]);
        }

    }
    /*
    
    
    */
    return (
        <div id="formSelector" className="widgetPanel blue">
            <h2>FORM SELECTOR</h2>
            <hr />
            <p>Select a Form from the list provided - this will get your data.</p>
            <p>We also need to work out how we are presenting this data</p>
            <hr />

            <Form>
                <Form.Group className="mb-3" controlId="formSelectSpecialty">
                    <Form.Label><strong>Select Specialty</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Specialty from the available list" name="selectedSpecialty" value={specialty.shortName} onChange={e => handleSpecialtyChange(e)}>
                        <option>Select Specialty</option>
                        {specialtySelection}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectForm">
                    <Form.Label><strong>Select Form</strong></Form.Label>
                    <br />
                    <Form.Select aria-label="Select Form from the available list" name="selectForm" value={selectedForm.name} onChange={e => handleFormChange(e)}>
                        <option>Select Form</option>
                       {formSelection}
                    </Form.Select>
                </Form.Group>
                <Button type="submit">SAVE ROTATION DETAILS</Button>
            </Form>
        </div>
    );
}