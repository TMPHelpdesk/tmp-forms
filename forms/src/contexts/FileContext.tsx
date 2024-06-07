import React, { useContext, createContext, useState} from 'react';

import { TMPForm, ContextProviderProps } from './FormContext';

export interface FileSpecialty {
    shortName: string;
    longName: string;
    forms: TMPForm[];
    parentSets: string[];
    setLevels: string[];
}



interface FileContextProps {
    fileSpecialty: FileSpecialty,
    setFileSpecialty: React.Dispatch<React.SetStateAction<FileSpecialty>>,
    year: string,
    setYear: React.Dispatch<React.SetStateAction<string>>,
    term: string,
    setTerm: React.Dispatch<React.SetStateAction<string>>,
    uniqueRotation: boolean,
    setUniqueRotation: React.Dispatch<React.SetStateAction<boolean>>,
    rotation: string,
    setRotation: React.Dispatch<React.SetStateAction<string>>
    trainees: string[],
    setTrainees: React.Dispatch<React.SetStateAction<string[]>>,
    formList: string[],
    setFormList: React.Dispatch<React.SetStateAction<string[]>>
}


const FileContext = createContext<FileContextProps>({
    fileSpecialty: {
        shortName: '',
        longName: '',
        forms: [{ name: '', data: {} }],
        parentSets: [''],
        setLevels: ['']
    },
    setFileSpecialty: () => { },
    year: '2024',
    setYear: () => { },
    term: '',
    setTerm: () => { },
    uniqueRotation: true,
    setUniqueRotation: () => { },
    rotation: '',
    setRotation: () => { },
    trainees: [''],
    setTrainees: () => { },
    formList: [''],
    setFormList: () => { }
})

export const FileContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [fileSpecialty, setFileSpecialty] = useState(
        {
            shortName: '',
            longName: '',
            forms: [{ name: '', data: {} }],
            parentSets: [''],
            setLevels: ['']
        });
    const [year, setYear] = useState('2024');
    const [term, setTerm] = useState('ET');
    const [uniqueRotation, setUniqueRotation] = useState(true);
    const [rotation, setRotation] = useState('R1');
    const [trainees, setTrainees] = useState(['']);
    const [formList, setFormList] = useState(['']);


    const fileContextValue: FileContextProps = {
        fileSpecialty,
        setFileSpecialty,
        year,
        setYear,
        term,
        setTerm,
        uniqueRotation,
        setUniqueRotation,
        rotation,
        setRotation,
        trainees,
        setTrainees,
        formList,
        setFormList
    };

    return (
        <FileContext.Provider value={fileContextValue}>
            {children}
        </FileContext.Provider>
    );
}

export function useFileContext() {
    return useContext(FileContext);
}





