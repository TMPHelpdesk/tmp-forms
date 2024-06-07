
import React, { useContext, createContext, useState, ReactNode } from 'react';

export interface TMPForm {
    name: string;
    data: {};
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
    response: {};
    setResponse: React.Dispatch<React.SetStateAction<{}>>;
    responses: {}[];
    setResponses: React.Dispatch<React.SetStateAction<{}[]>>;
    displayResponses: string[],
    setDisplayResponses: React.Dispatch<React.SetStateAction<string[]>>;

}

export interface ContextProviderProps {
    children: ReactNode;
}

const FormContext = createContext<FormContextProps>({
    specialty: { shortName: '', longName: '', forms: [{ name: '', data: {} }] },
    setSpecialty: () => { },
    selectedForm: { name: '', data: {} },
    setSelectedForm: () => { },
    response: {},
    setResponse: () => { },
    responses: [{}],
    setResponses: () => { },
    displayResponses: [""],
    setDisplayResponses: () => [""]
}
)

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [specialty, setSpecialty] = useState<Specialty>({ shortName: '', longName: '', forms: [{ name: '', data: {} }] });
    const [selectedForm, setSelectedForm] = useState<TMPForm>({ name: '', data: {} });
    const [response, setResponse] = useState({});
    const [responses, setResponses] = useState([{}]);
    const [displayResponses, setDisplayResponses] = useState([""]);


    const contextValue: FormContextProps = {
        specialty,
        setSpecialty,
        selectedForm,
        setSelectedForm,
        response,
        setResponse,
        responses,
        setResponses,
        displayResponses,
        setDisplayResponses

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

