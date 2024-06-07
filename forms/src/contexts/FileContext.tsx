import React, { useContext, createContext, useState} from 'react';

import { TMPForm, ContextProviderProps } from './FormContext';

export interface FileSpecialty {
    shortName: string;
    longName: string;
    forms: TMPForm[];
    parentSets: string[];
    setLevels: string[];
}

export interface FolderStructure {
    parentFolder: string;
    rotationFolders: string[];
}


interface FileContextProps {
    fileSpecialty: FileSpecialty,
    setFileSpecialty: React.Dispatch<React.SetStateAction<FileSpecialty>>,
    year: string,
    setYear: React.Dispatch<React.SetStateAction<string>>,
    term: string,
    setTerm: React.Dispatch<React.SetStateAction<string>>,
    rotations: string[],
    setRotations: React.Dispatch<React.SetStateAction<string[]>>
    folderStructures: FolderStructure[],
    setFolderStructures: React.Dispatch<React.SetStateAction<FolderStructure[]>>,
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
    rotations: [''],
    setRotations: () => { },
    folderStructures: [{parentFolder: "", rotationFolders: ['']}],
    setFolderStructures: () => { },
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
    const [rotations, setRotations] = useState(['']);
    const [folderStructures, setFolderStructures] = useState([{parentFolder: "", rotationFolders: ['']}]);
    const [formList, setFormList] = useState(['']);


    const fileContextValue: FileContextProps = {
        fileSpecialty,
        setFileSpecialty,
        year,
        setYear,
        term,
        setTerm,
        rotations,
        setRotations,
        folderStructures,
        setFolderStructures,
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





