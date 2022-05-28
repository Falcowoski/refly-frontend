import { Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';
import FieldCheckbox from "../../helpers/form/FieldCheckbox";
import FieldSelect from "../../helpers/form/FieldSelect";
import FieldText from "../../helpers/form/FieldText";

type CreateRecordValues = {
    firstName: string,
    lastName: string,
    acceptedTerms: boolean,
    jobType: string
}

const createRecordInitialValues: CreateRecordValues = { 
    firstName: '',
    lastName: '',
    acceptedTerms: false,
    jobType: ''
};

const createRecordValidation = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Obrigatório!'),
    lastName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Obrigatório!'),
    acceptedTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions.')
        .required('Obrigatório!'),
    jobType: Yup.string()
        .oneOf(['designer', 'development', 'product', 'other'], 'Invalid job type')
        .required('Obrigatório!'),
});

function CreateRecordFormik() {
    const handleSubmit = (values: CreateRecordValues, othersProps: any) => {
        console.log("Hello?")
        console.log(othersProps)
        console.log({values});
    }

    return (
        <Formik
            initialValues={createRecordInitialValues}
            validationSchema={createRecordValidation}
            onSubmit={handleSubmit}
        >
            {({ isValid }) => (
                <Form noValidate>
                    <FieldText 
                        label="First Name"
                        name="firstName"
                        id="firstNameInput"
                        type="text"
                        placeholder="Insira seu nome..."
                        defaultHelpMessage="lorem ipsum"
                        helpTextId="firstNameHelpBlock"
                    />

                    <FieldText 
                        label="Last Name"
                        name="lastName"
                        id="lastNameInput"
                        type="text"
                        placeholder="Insira seu sobrenome..."
                        defaultHelpMessage="lorem ipsum"
                        helpTextId="lastNameHelpBlock"
                    />

                    <FieldSelect
                        label="Job Type"
                        name="jobType"
                        id="jobTypeSelect"
                        defaultHelpMessage="Seleciona o seu trabalho aí"
                        helpTextId="jobTypeHelpBlock"
                    >
                        <option>Selcione um tipo de emprego</option>
                        <option value="development">Desenvolvimento</option>
                        <option value="designer">Designer</option>
                        <option value="product">Produto</option>
                    </FieldSelect>

                    <FieldCheckbox 
                        label="Eu aceito os termos"
                        name="acceptedTerms"
                        id="acceptedTermsCheckbox"
                        defaultHelpMessage="Aceita aí, por favor"
                        helpTextId="acceptedTermsHelpBlock"
                    />

                    <Button disabled={!isValid} variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default CreateRecordFormik;