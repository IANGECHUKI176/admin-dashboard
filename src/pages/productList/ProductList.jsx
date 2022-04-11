import './productList.css'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
const ProductList = () => {
   const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
      setData(data.filter((user) => user.id !== id));
    };
    const columns = [
      { field: "id", headerName: "ID", width: 90 },

      {
        field: "name",
        headerName: "Name",
        width: 200,
        renderCell: (params) => {
          return (
            <div className='productListItem'>
              <img className='productListImg' src={params.row.image} alt='' />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "stock",
        headerName: "In Stock",
        width: 200,
      },
      {
        field: "status",
        headerName: "status",
        width: 120,
      },
      {
        field: "price",
        headerName: "Price",
        width: 230,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/product/${params.row.id}`}>
                <button className='productListEdit'>Edit</button>
              </Link>
              <DeleteOutline
                className='productListDelete'
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  return (
    <div className='productList'>
      
      <DataGrid
        style={{ fontWeight: "600" }}
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default ProductList