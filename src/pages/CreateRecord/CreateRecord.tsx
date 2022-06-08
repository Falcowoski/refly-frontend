import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MOCK_DATA from '../../data/mockData.json';
import CreateRecordForm from './CreateRecordForm';

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

    return (
        <Container className="bg-body shadow-sm border rounded py-3">
            <h1 className="h4">Registro de Equipamento</h1>
            <CreateRecordForm />
        </Container>
    );
}

export default CreateRecord;