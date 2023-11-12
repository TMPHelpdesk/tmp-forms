export interface TMPForm {
    name: string;
    data: {};
}

export interface Specialty {
    shortName: string;
    longName: string;
    forms: TMPForm[];
}

export type FormContextType = {
    
        specialty: Specialty,
    setSpecialty: (specialty: Specialty) => void,
    selectedForm: TMPForm,
    setSelectedForm: (form: TMPForm) => void
}

