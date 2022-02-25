import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import {
  getTotalPrice,
} from "../../app/services/productCartServices";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const columns = [
  { field: "col1", headerName: "#", width: 100 },
  { field: "col2", headerName: "Nombre", width: 700 },
  { field: "col3", headerName: "Categoria", width: 400 },
  { field: "col4", headerName: "Precio", width: 400, type: 'number', },
];

export default function DetailCart() {
  // const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = useSelector((state) => state.cartReducer.list)


  useEffect(() => {
    if (products.length > 0) {
      setTotalPrice(getTotalPrice(products));
    }
  }, [products]);

  // useEffect(() => {
  //   getAllProducts().then((AllProductFromDB) => setProducts(AllProductFromDB));
  // }, []);

  const rows1 = products.map((product) => {
    return {
      id: product.id,
      col1: product.id,
      col2: product.title,
      col3: product.category,
      col4: `$${product.price}`,
    };
  });

  console.log(totalPrice);

  return (
    <div style={{ height: "630px" }}>
      <DataGrid
        dataSet= 'Commodity'
        rows={rows1}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
      <Typography
        fontWeight="900"
        mt="20px"
        // mr="16%"
        fontSize="20px"
        textAlign="end"
      >
        TOTAL: ${totalPrice}{" "}
      </Typography>
    </div>
  );
}
