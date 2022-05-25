import { ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";

function RecordForm() {
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Enviando...")

        const formData = new FormData(event.target);

        for (const [key, value] of formData.entries()) {
            console.count("Loop")
            console.log({key})
            console.log({value})
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Tipo de Equipamento</Form.Label>
                <Form.Select name="type" aria-describedby="typeHelpBlock">
                    <option value="1">Opção A</option>
                    <option value="2">Opção B</option>
                    <option value="3">Opção C</option>
                </Form.Select>
                <Form.Text id="typeHelpBlock" muted>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="brand">
                <Form.Label>Marca do Equipamento</Form.Label>
                <Form.Select name="brand" aria-describedby="brandHelpBlock">
                    <option value="1">Opção A</option>
                    <option value="2">Opção B</option>
                    <option value="3">Opção C</option>
                </Form.Select>
                <Form.Text id="brandHelpBlock" muted>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Observações</Form.Label>
                <Form.Control 
                    name="notes"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing."
                    as="textarea"
                    rows={3}
                />
            </Form.Group>

            <h5>Campo do Responsável</h5>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    name="password" 
                    aria-describedby="passwordHelpBlock"
                    placeholder="Lorem ipsum dolor" 
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="disclaimer">
                <Form.Check 
                    type="checkbox"
                    name="disclaimer" 
                    label="Me responsabilizo pelas informações relatadas acima" 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Salvar
            </Button>
        </Form>
    );
}

export default RecordForm;