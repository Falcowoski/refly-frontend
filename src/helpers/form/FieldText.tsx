import { useField } from "formik";
import { ElementType } from "react";
import { Form } from "react-bootstrap";
import useHelpText from "../hooks/useHelpText";

type FieldTextProps = {
    label: string,
    type?: string,
    as?: ElementType<any>, // React Bootstrap
    rows?: number, // Textarea
    id: string,
    name: string,
    placeholder?: string,
    defaultHelpMessage: string,
    helpTextId: string,
}

function FieldText({ label, id, defaultHelpMessage, helpTextId, ...props }: FieldTextProps) {
    const [field, { touched, error }] = useField(props);
    const [
        inputStyle, 
        textStyle, 
        helpMessage
    ] = useHelpText(touched, error, defaultHelpMessage);

    return (
        <>
            <Form.Group className="mb-3" controlId={id || props.name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control 
                    {...field}
                    {...props}
                    className={inputStyle}
                    aria-describedby={helpTextId}
                />
                <Form.Text id={helpTextId} className={textStyle}>
                    {helpMessage}
                </Form.Text>
            </Form.Group>
        </>
    );
}

export default FieldText;