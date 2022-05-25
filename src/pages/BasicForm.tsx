import { ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';

function BasicForm() {
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Select menu</Form.Label>
                <Form.Select name="options">
                    <option value="1">Opção A</option>
                    <option value="2">Opção B</option>
                    <option value="3">Opção C</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicForm;