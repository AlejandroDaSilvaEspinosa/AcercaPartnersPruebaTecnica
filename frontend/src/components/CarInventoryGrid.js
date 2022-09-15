import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Controls from "./controls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import {
  selectRows,
  getPostStatus,
  fetchCartInventory,
  editRow,
  deleteCar,
  selectTotal,
} from "../store/slices/CarInventory";

const carGridColumns = (editRow, deleteRow) => [
  {
    field: "orderNumber",
    headerName: "Número de Pedido",
    type: "number",
    minWidth: 100,
    filterable: false,
    sortable: false,
    flex: 1,
  },
  {
    field: "chassisNumber",
    headerName: "Bastidor",
    filterable: false,
    minWidth: 100,
    sortable: false,
    flex: 1,
  },
  {
    field: "model",
    headerName: "Modelo",
    flex: 1,
    minWidth: 100,
    filterable: false,
    sortable: false,
  },
  {
    field: "licensePlate",
    headerName: "Matrícula",
    flex: 1,
    minWidth: 100,
    filterable: false,
    sortable: false,
  },
  {
    field: "deliveryDate",
    headerName: "Fecha de entrega",
    type: "date",
    valueFormatter: (params) => {
      return dayjs(params.value).format("DD/MM/YYYY");
    },
    flex: 1,
    minWidth: 100,
    filterable: false,
    sortable: false,
  },
  {
    field: "id",
    headerName: "Acciones",
    width: 120,
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        <Controls.EditButton rowId={params.id} editRow={editRow} />
        <Controls.DeleteButton rowId={params.id} deleteRow={deleteRow} />
      </Stack>
    ),
    filterable: false,
    sortable: false,
  },
];

const CarInventoryGrid = () => {
  const [pageState, setPageState] = useState({
    page: 0,
    pageSize: 10,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartInventory(pageState));
  }, [pageState]);

  const rows = useSelector(selectRows);
  const total = useSelector(selectTotal);
  const status = useSelector(getPostStatus);
  const loading = status === "loading" || status === "idle";
  const handlePageChange = (newPage) => {
    setPageState((old) => ({ ...old, page: newPage }));
  };
  const handlePageSizeChange = (newPageSize) => {
    setPageState((old) => {
      return { ...old, pageSize: newPageSize };
    });
  };

  return (
    <Box height={"calc(100% - var(--navbarHeight))"} overflow={"auto"}>
      <DataGrid
        rows={rows}
        rowCount={total}
        loading={loading}
        rowsPerPageOptions={[10, 50, total].sort((a, b) => a - b)}
        pagination
        page={pageState.page}
        pageSize={pageState.pageSize}
        paginationMode="server"
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        columns={carGridColumns(editRow, deleteCar)}
      />
    </Box>
  );
};

export default CarInventoryGrid;
