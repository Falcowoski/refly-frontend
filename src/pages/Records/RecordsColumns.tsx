import Badge from 'react-bootstrap/Badge';
import { Color, Variant } from 'react-bootstrap/esm/types';
import { Link } from 'react-router-dom';

type Value = {
    value: string
};

type StatusColor = {
    bg?: Variant;
    pill?: boolean;
    text?: Color;
}

function StatusCell({ value }: Value) {
    const getStatusColor = () => {
        if (value === 'Descartado')
            return { bg: 'dark' };

        if (value === 'Recebido')
            return { bg: 'primary' };

        if (value === 'Analisando')
            return { bg: 'info' };

        if (value === 'Em manutenção')
            return { bg: 'warning', text: 'dark' } as StatusColor;

        if (value === 'Aguardando aplicativos')
            return { bg: 'secondary' };

        if (value === 'Instalando aplicativos')
            return { bg: 'info' };

        if (value === 'Pronto para entrega')
            return { bg: 'success' };

        if (value === 'Doação realizada')
            return { bg: 'success' };
    }

    return (
        <Badge /*/{...getStatusColor()}*/>
            {value}
        </Badge>
    )
}


const RecordsColumns = [
    {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ value: recordId } : Value) => <Link className="text-reset text-decoration-none" to={`/records/${recordId}`}>{recordId}</Link>
    },
    {
        Header: 'Responsável',
        accessor: 'responsible'
    },
    {
        Header: 'Tipo',
        accessor: 'type'
    },
    {
        Header: 'Marca',
        accessor: 'brand'
    },
    {
        Header: 'Código',
        accessor: 'key'
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
]

export default RecordsColumns;