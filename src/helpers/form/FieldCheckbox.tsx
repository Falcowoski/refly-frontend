import { useField } from "formik";
import { Form } from "react-bootstrap";
import useFieldValidation from "../hooks/useFieldValidation";

type FieldCheckboxTypes = {
    label: string,
    id: string,
    name: string,
}

function FieldCheckbox({ label, id, ...props}: FieldCheckboxTypes) {
    const [field, { touched, error }] = useField({ ...props, type: 'checkbox' });
    const validationProp = useFieldValidation(touched, error);

    return (
        <Form.Group className="mb-3" controlId={id || props.name}>
            <Form.Check type="checkbox">
                <Form.Check.Input 
                    {...field} 
                    {...props} 
                    {...validationProp}
                />
                <Form.Check.Label>{label}</Form.Check.Label>

                <Form.Control.Feedback type="valid">
                    Tudo certo!
                </Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            </Form.Check>
        </Form.Group>
    );
}

export default FieldCheckbox;