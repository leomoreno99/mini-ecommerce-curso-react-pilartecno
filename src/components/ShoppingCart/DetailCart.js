import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllProducts } from '../../app/services/productServices';
import { Product } from '../Products/Product';

const columns = [
    { field: 'col1', headerName: '#', width: 150 },
    { field: 'col2', headerName: 'Title', width: 600 },
    { field: 'col3', headerName: 'Category', width: 150 },
    { field: 'col4', headerName: 'Price', width: 150 },
  ];

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];


export default function DetailCart() {

    const [products, setProducts] = useState([])


    useEffect(()=> {
        getAllProducts()
        .then(AllProductFromDB => setProducts(AllProductFromDB))
    }, [])

    const rows1 = products.map((product) => {
        return (
            {id: product.id, col1: product.id, col2: product.title, col3: product.category, col4: `$${product.price}`}
        )
    })

  return (
    <div style={{ height: "500px", width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

