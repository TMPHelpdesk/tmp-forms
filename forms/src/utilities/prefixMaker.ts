import { FileSpecialty } from '../contexts/FileContext';


  
//
export const cleanPrefix = (rotationName: string, year: string, term: string) => {

  //remove any extant country prefix - should not be present in the future
    const rotationNoCountry = rotationName.replace('AUS-', '').replace('NZ-', '');


    const regex = /[R][1-9]/;
   
 //Splitting the string at R[1-9]
    const rotationMatch = rotationNoCountry.match(regex);
    if (rotationMatch) {
        const rotationIndex = rotationMatch.index;
        const rightString = rotationNoCountry.substring(rotationIndex || 0, rotationNoCountry.length);
        const leftString = rotationNoCountry.substring(0, rotationIndex);
        const newRightString = rightString.replace(/ /g, '_');
        const newLeftString = leftString.replace(/- [A-Z]{3} -/, '').trim(); //remove specialty string
        const finalLeftString = newLeftString.substring(newLeftString.lastIndexOf(" "), newLeftString.length); //keep last name only
        const result = `${finalLeftString}-${year}-${newRightString}-${term}`;
        console.log(result);
        return result;
    }
    else {
        return rotationName;
    }
}

export const findParentFolder = (rotationName: string, specialty: FileSpecialty): string => {
    // Initialize setFolders based on specialty.parentSets
    const setFolders = specialty.parentSets[0] === "" ? specialty.setLevels : specialty.parentSets;

    // Iterate through each folder in setFolders
    for (const folder of setFolders) {
        // Check if rotationName matches the folder
        const folderMatch = rotationName.includes(folder);
        if (folderMatch) {
            return folder;
        }
    }

    // If no match is found, return "Unmatched"
    return "Unmatched";
};

