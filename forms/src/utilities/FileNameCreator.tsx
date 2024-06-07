
import { useFileContext } from '../contexts/FileContext';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { utils, writeFile } from 'xlsx';



export default function FileNameCreator(){

const {rotations, formList, year, term, fileSpecialty} = useFileContext();

const excelFileName = `${year}-${fileSpecialty.shortName}-${term}`;

const fileNames = rotations.map(rotation => {
    const forms = formList.map(form => {
        return {form: `${rotation}_${form}`}
    })

    forms.unshift({form: `${rotation}`})

    return forms;
});
/* get state data and export to XLSX */
const exportFile = useCallback(() => {
    /* generate worksheet from state */
    const ws = utils.json_to_sheet(fileNames);
    /* create workbook and append worksheet */
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Filenames");
    /* export to XLSX */
    writeFile(wb, `${excelFileName}.xlsx`);
  }, [excelFileName, fileNames]);






    return(
        <Button onClick={exportFile}>
            Generate File Names In Excel
        </Button>
    )
}