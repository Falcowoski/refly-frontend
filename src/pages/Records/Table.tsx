import { useMemo } from 'react';
import BootstrapTable from 'react-bootstrap/Table';
import { Cell, Column, useTable } from 'react-table';

function Table({ columns: columnsProp, data: dataProp }: any) {
    const columns = useMemo(() => columnsProp, [columnsProp]);
    const data = useMemo(() => dataProp, [dataProp]);

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data })

    const getHeaderStyle = (column: Column) => {
        if (column.id === 'id')
            return { className: 'text-center' }

        if (column.id === 'status')
            return { className: 'text-center' }

        return {};
    }

    const getCellStyle = (cell: Cell) => {
        if (cell.column.id === 'id')
            return { className: 'text-center bg-primary text-light' }

        if (cell.column.id === 'status')
            return { className: 'text-center bg-secondary text-light' }

        if (cell.column.id === 'status')
            return { className: 'text-center' }

        return {};
    }

    const getTableHeader = () => {
        const tableHeader = headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...getHeaderStyle(column)} {...column.getHeaderProps()}>
                        {column.render('Header')}
                    </th>
                ))}
            </tr>
        ));

        return tableHeader;
    }

    const getTableBody = () => {
        const tableBody = rows.map((row) => {
            prepareRow(row);

            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        <td {...getCellStyle(cell)} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                        </td>
                    ))}
                </tr>
            )
        });

        return tableBody;
    }

    return (
        <BootstrapTable striped hover {...getTableProps()}>
            <thead>
                {getTableHeader()}
            </thead>
            <tbody {...getTableBodyProps()}>
                {getTableBody()}
            </tbody>
        </BootstrapTable>
    );
}

export default Table;