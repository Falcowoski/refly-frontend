import { Container } from "react-bootstrap";
import RecordsColumns from "./RecordsColumns";
import Table from "./Table";
import MOCK_DATA from '../../data/MOCK_DATA.json';

function Records() {
    return (
        <Container className="bg-body shadow-sm border rounded py-3">
            <h1 className="h4">Lista de Equipamentos</h1>
            <Table columns={RecordsColumns} data={MOCK_DATA} />            
        </Container>
    );
}

export default Records;