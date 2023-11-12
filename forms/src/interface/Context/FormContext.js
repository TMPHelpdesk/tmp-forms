import { createContext, useContext, useState } from 'react'

const FormContext = createContext();

export const ContextProvider = ({ children }) => {

    const [specialty, setSpecialty] = useState('');
    const [selectedForm, setSelectedForm] = useState({});
    const [currentResponse, setCurrentResponse] = useState({});
    const [bulkResponses, setBulkResponses] = useState([{}]);

    const contextValue = {
        specialty, setSpecialty,
        selectedForm, setSelectedForm,
        currentResponse, setCurrentResponse,
        bulkResponses, setBulkResponses
    };

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    return useContext(FormContext);
}

