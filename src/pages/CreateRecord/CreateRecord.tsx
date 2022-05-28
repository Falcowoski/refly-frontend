import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MOCK_DATA from '../../data/mockData.json';
import { DataState } from './CreateRecord.types';
import CreateRecordForm from './CreateRecordForm';
import BasicFormik from './BasicFormik';


function CreateRecord() {
    const [data, setData] = useState<DataState>(MOCK_DATA as any)

    return (
        <Container className="bg-body shadow-sm border rounded py-3">
            <h4>Registro de Equipamento</h4>
            {/* <CreateRecordForm /> */}
            <BasicFormik />
        </Container>
    );
}

export default CreateRecord;