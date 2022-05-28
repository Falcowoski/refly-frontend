import { useField } from "formik";
import { Form } from "react-bootstrap";
import useHelpText from "../hooks/useHelpText";

type FieldSelectProps = {
    label: string,
    id: string,
    name: string,
    defaultHelpMessage: string,
    helpTextId: string,
    children: JSX.Element[]
}

function FieldSelect({ label, id, defaultHelpMessage, helpTextId, ...props}: FieldSelectProps) {
    const [field, { touched, error }] = useField(props);
    const [
        inputStyle, 
        textStyle, 
        helpMessage
    ] = useHelpText(touched, error, defaultHelpMessage);
    
    return (
        <Form.Group className="mb-3" controlId={id || props.name}>
            <Form.Label>{label}</Form.Label>
            <Form.Select
                {...field}
                {...props}
                className={inputStyle}
                aria-describedby="brandHelpBlock"
            />
            <Form.Text id={helpTextId} className={textStyle}>
                {helpMessage}
            </Form.Text>
        </Form.Group>
    );
}

export default FieldSelect;