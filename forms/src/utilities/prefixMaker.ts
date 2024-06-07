

export const cleanPrefix = (rotationName: string, year: string, term: string) => {

    const rotationNameNoSpecialty = rotationName.replace(/ - [A-Z]{3} - /, '-');
    const rotationNoCountry = rotationNameNoSpecialty.replace('AUS-', '').replace('NZ-', '');

    const regex = /[R][1-9]/;
    //Splitting the string at R[1-9]

    const rotationMatch = rotationNoCountry.match(regex);
    if (rotationMatch) {
        const rotationIndex = rotationMatch.index;
        const rightString = rotationNoCountry.substring(rotationIndex || 0);
        const leftString = rotationNoCountry.substring(0, rotationIndex || 0);
        const newRightString = rightString.replace(/s/g, '_');
        const newLeftString = leftString.trim().substring(leftString.lastIndexOf(' '), leftString.length).trim();
        const result = `${newLeftString}-${term}_${newRightString}`;
        return result;
    }
    else {
        return rotationName;
    }

}




