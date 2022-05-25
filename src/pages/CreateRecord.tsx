import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MOCK_DATA from '../../data/mockData.json';
import RecordForm from './RecordForm';

type DataState = {
    tipo: [
        id: number,
        descricao: string
    ],
    marca: [
        id: number,
        descricao: string
    ]
}

function CreateRecord() {
    const [data, setData] = useState<DataState>(MOCK_DATA as any)
    console.log(data);

    return (
        <Container className="bg-body shadow-sm border rounded py-3">
            <h4>Registro de Equipamento</h4>
            <RecordForm />
        </Container>
    );
}

export default CreateRecord;