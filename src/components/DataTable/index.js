import React, {useEffect, useState} from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}


function DataTable({ data, filter }) {
    const [rows, setRows] = useState(data);

    useEffect(() => {
        setRows(data.filter(item => item.nombre.toLowerCase().includes(filter.toLowerCase())))
    }, [filter, setRows])

    useEffect(() => {
        setRows(data)
    }, [data])

    const columns = [
        { field: 'nombre', headerName: 'Nombre', width: 500 },
        { field: 'precio', type: 'number', headerName: 'Precio', width: 95 },
        { field: 'empresa', headerName: 'Empresa', width: 100 },
        { field: 'existencia', type: 'number', headerName: 'Stock', width: 50 },
        { field: 'url', headerName: 'Link', width: 100 }
    ];
    return (
    <div style={{ height: 650, width: 950, paddingTop: '20px' }}>

        <StyledDataGrid
            pageSize={10}
            rowsPerPageOptions={[5]}
            components={{
                Pagination: CustomPagination,
            }}
            rows={rows}
            columns={columns}
            />
        </div>
    )
}
export {DataTable} 
