import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Table = ({columns, rows}) => (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
);

export default Table;