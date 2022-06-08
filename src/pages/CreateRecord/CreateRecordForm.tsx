import { Form, Formik } from 'formik';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import FieldCheckbox from '../../helpers/form/FieldCheckbox';
import FieldSelect from '../../helpers/form/FieldSelect';
import FieldText from '../../helpers/form/FieldText';

type CreateRecordValues = {
    type: number | string,
    brand: number | string,
    key: number | string,
    notes: string,
    user: number | string,
    password: string,
    disclaimer: boolean
};

type Options = {
    id: number,
    label: string
}[];

const createRecordInitialValues: CreateRecordValues = {
    type: '',
    brand: '',
    key: '',
    notes: '',
    user: '',
    password: '',
    disclaimer: false
};

const createRecordValidation = Yup.object({
    type: Yup.number().required('Obrigatório!'),
    brand: Yup.number().required('Obrigatório!'),
    key: Yup.number(),
    notes: Yup.string()
        .max(1000, 'Deve ter 1000 caracteres ou menos')
        .required('Obrigatório!'),
    user: Yup.number().required('Obrigatório!'),
    password: Yup.string().required('Obrigatório!'),
    disclaimer: Yup.boolean()
        .oneOf([true], 'Obrigatório!')
        .required(),
})

const typeOptions = [
    { id: 1, label: 'Notebook' },
    { id: 2, label: 'Desktop' },
    { id: 3, label: 'All in One' },
    { id: 4, label: 'Smartphone' },
    { id: 5, label: 'Impressora' },
    { id: 6, label: 'Monitor' },
];

const brandOptions = [
    { id: 1, label: 'Dell' },
    { id: 2, label: 'HP' },
    { id: 3, label: 'Acer' },
    { id: 4, label: 'Lenovo' },
    { id: 5, label: 'Samsung' },
    { id: 6, label: 'Motorola' },
];

const userOptions = [
    { id: 1, label: 'Leonardo' },
    { id: 2, label: 'Márcia' },
    { id: 3, label: 'Lucas' },
]

function CreateRecordForm() {
    const getOptions = (options: Options) => {
        return options.map(({ id, label }) => (
            <option value={id} key={id}>
                {label}
            </option>
        ));
    }

    const handleSubmit = (values: CreateRecordValues) => {
        console.log({values})
    }

    return (
        <Formik
            initialValues={createRecordInitialValues}
            validationSchema={createRecordValidation}
            onSubmit={handleSubmit}
        >
            {({ isValid, submitCount }) => (
                <Form noValidate>
                    <FieldSelect
                        label="Tipo de Equipamento"
                        name="type"
                        id="typeFormSelect"
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="typeHelpBlock"
                    >
                        <option>Selecione um tipo de equipamento</option>
                        <Fragment>{getOptions(typeOptions)}</Fragment>
                    </FieldSelect>

                    <FieldSelect
                        label="Marca do Equipamento"
                        name="brand"
                        id="brandFormSelect"
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="brandHelpBlock"
                    >
                        <option>Selecione a marca do equipamento</option>
                        <Fragment>{getOptions(brandOptions)}</Fragment>
                    </FieldSelect>

                    <FieldText 
                        label="Código do Equipamento"
                        name="key"
                        id="keyFormInput"
                        type="number"
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="keyHelpBlock"
                    />

                    <FieldText 
                        label="Observações"
                        name="notes"
                        id="notesFormInput"
                        as="textarea"
                        rows={3}
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="notesHelpBlock"
                    />

                    <h2 className="h5">Campo do Responsável</h2>

                    <FieldSelect
                        label="Responsável"
                        name="user"
                        id="userFormSelect"
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="brandHelpBlock"
                    >
                        <option>Selecione o usuário responsável</option>
                        <Fragment>{getOptions(userOptions)}</Fragment>
                    </FieldSelect>

                    <FieldText 
                        label="Senha"
                        name="password"
                        id="passwordFormInput"
                        type="password"
                        defaultHelpMessage="Lorem ipsum dolor sit amet consectetur."
                        helpTextId="keyHelpBlock"
                    />

                    <FieldCheckbox 
                        label="Confirmo a autenticidade das informações acima"
                        name="disclaimer"
                        id="disclaimerFormCheckbox"
                    />

                    <Button disabled={submitCount > 0 && !isValid} variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default CreateRecordForm;