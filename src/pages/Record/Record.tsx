import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Record() {
    const routeParams = useParams();
    return (
        <Container className="bg-body shadow-sm border rounded py-3">
            <h1 className="h4">Registro {routeParams.recordId}</h1>      
        </Container>
    );
}

export default Record;