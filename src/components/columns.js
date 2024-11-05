import { format } from 'date-fns';
import { ColumnFilter } from './ColumnFilter';
export const COLUMNS =[
    {
        Header: 'Id',
        Footer: 'Id',
        accessor:'id',
        // Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor:'first_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor:'last_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor:'email',
        // Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        // Filter: ColumnFilter,
        Cell: ({ value }) => {
            return  format(value, 'dd/MM/yyyy');
         }
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor:'age',
        // Filter: ColumnFilter
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor:'country',
        // Filter: ColumnFilter
    },
    {
        Header: 'Phone Number',
        Footer: 'Phone Number',
        accessor:'phone',
        // Filter: ColumnFilter
    }
]


export const GROUP_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor:'id'
    },
    {
        Header:'Name',
        Footer: 'Name',
        columns:[
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor:'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor:'last_name'
            }
        ]
    },
    {
         Header:'Info',
         Footer:'Info',
         columns:[
            {
                Header: 'Email',
                Footer: 'Email',
                accessor:'email'
            },
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor:'date_of_birth',
                Cell: ({ value }) => {
                   return  format(value, 'dd/MM/yyyy');
                }

            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor:'age'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor:'country'
            },
            {
                Header: 'Phone Number',
                Footer: 'Phone Number',
                accessor:'phone'
            }
         ]
    }
]