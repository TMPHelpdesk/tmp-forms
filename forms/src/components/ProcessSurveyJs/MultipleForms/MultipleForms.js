import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { Container, Row, Col } from 'react-bootstrap';


/*
Container, Row, Form, Col, Button
*/

export default function MultipleForms() {

   //Multiple Form methods
   const [data, setData] = useState([{ column1: '', column2: '' }]);

   const handlePasteData = (index, event) => {
       const newData = [...data];
       const pastedData = event.clipboardData.getData('text');
       const rows = pastedData.split('\n');

       rows.forEach((row, rowIndex) => {
           const columns = row.split('\t'); // Assuming tab-separated data, you can change this delimiter as needed

           if (newData[index + rowIndex]) {
               newData[index + rowIndex].column1 = columns[0] || '';
               newData[index + rowIndex].column2 = columns[1] || '';
           } else {
               newData.push({
                   column1: columns[0] || '',
                   column2: columns[1] || '',
               });
           }
       });

       setData(newData);
   };

   const handleAddRow = () => {
       setData([...data, { column1: '', column2: '' }]);
   };

   const handleRemoveRow = (index) => {
       const newData = [...data];
       newData.splice(index, 1);
       setData(newData);
   };

   const handleSubmit = () => {

   }


    return (
        <Container>
            <h1>Enter Assessment Data</h1>
            <p><i>Follow the instructions in the user guides <underline>here</underline></i></p>
            {data.map((row, index) => (
                <Row key={index}>
                    <Col>
                        <Form.Control
                            as="textarea"
                            name="surveys"
                            value={row.column1}
                            onChange={() => { }}
                            onPaste={(e) => handlePasteData(index, e)}
                            placeholder="Assessment Forms"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            as="textarea"
                            name="responses"
                            value={row.column2}
                            onChange={() => { }}
                            onPaste={(e) => handlePasteData(index, e)}
                            placeholder="Trainee Responses"
                        />
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => handleRemoveRow(index)}>
                            Remove
                        </Button>
                    </Col>
                </Row>
            ))}
            <Button variant="secondary" onClick={handleAddRow}>
                Add Row
            </Button>
            <Button variant="secondary" onClick={handleSubmit}>
                Submit
            </Button>
        </Container>
    );

}