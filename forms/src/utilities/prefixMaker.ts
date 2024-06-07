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

export const findParentFolder = (rotationName: string, specialty: FileSpecialty) => {

    let setFolders = [];
    //
    if(specialty.parentSets.length === 1){
        setFolders = specialty.setLevels;
    } else {
        setFolders = specialty.parentSets;
    }

    for(let folder in setFolders) {
        const folderMatch = rotationName.match(folder);
        if(folderMatch) return folder;
        break;
    }

    return "Unmatched";

}

