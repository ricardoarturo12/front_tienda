import React from'react';
import TextField from '@mui/material/TextField';

function Filter({ setFilter }){
    return(
        <div style={{paddingLeft: 20}}>
            <TextField id="product-filter" label="Buscar Producto" variant="standard" onChange={e => setFilter(e.target.value)}/>
        </div>
    )
}

export { Filter }