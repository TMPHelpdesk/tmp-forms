
import React, { useContext, createContext, useState, ReactNode } from 'react';

export interface TMPForm {
    name: string;
    data: {};
}

export interface FormSet {

}

export interface Specialty {
    shortName: string;
    longName: string;
    forms: TMPForm[];
}

interface FormContextProps {
    specialty: Specialty;
    setSpecialty: React.Dispatch<React.SetStateAction<Specialty>>;
    selectedForm: TMPForm;
    setSelectedForm: React.Dispatch<React.SetStateAction<TMPForm>>;
}

interface ContextProviderProps {
    children: ReactNode;
}

const initialSelectedForm: TMPForm = { name: '', data: {} };
const initialSelectedForm2: TMPForm = { name: '', data: {} };
const initialForms: TMPForm[] = [initialSelectedForm2];
const initialSpecialty: Specialty = { shortName: '', longName: '', forms: initialForms};


const FormContext = createContext<FormContextProps>({
    specialty: initialSpecialty,
    setSpecialty: () => {},
    selectedForm: initialSelectedForm,
    setSelectedForm: () => {},
});

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [specialty, setSpecialty] = useState<Specialty>(initialSpecialty);
    const [selectedForm, setSelectedForm] = useState<TMPForm>(initialSelectedForm);

    const contextValue: FormContextProps = {
        specialty,
        setSpecialty,
        selectedForm,
        setSelectedForm,
    };

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    );
};


export function useFormContext() {
    return useContext(FormContext);
}

