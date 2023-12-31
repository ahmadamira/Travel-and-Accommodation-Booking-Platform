// HotelTable.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HotelForm from "../Hotel-Form/HotelForm";
import UpdateHotelForm from "../Update-Hotel-Form/UpdateHotelForm";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface Row {
  name: string;
  starRate: number;
  owner: string;
  roomNumber: number;
  creationDate: string;
  modificationDate: string;
}

const HotelTable = () => {
  const [tableRows, setTableRows] = useState<Row[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);

  // Add some sample data when the component mounts
  useEffect(() => {
    const sampleData: Row[] = [
      {
        name: "City A",
        starRate: 4,
        owner: "John Doe",
        roomNumber: 101,
        creationDate: "2022-01-01",
        modificationDate: "2022-01-05",
      },
    ];

    setTableRows(sampleData);
  }, []);

  const handleCreate = (newHotel: Row) => {
    setTableRows((prevRows) => [...prevRows, newHotel]);
  };

  const handleDelete = (name: string) => {
    const updatedRows = tableRows.filter((row) => row.name !== name);
    setTableRows(updatedRows);
  };

  const handleUpdate = (updatedHotel: Row) => {
    if (selectedRow) {
      const updatedRows = tableRows.map((row) =>
        row.name === selectedRow.name ? updatedHotel : row
      );
      setTableRows(updatedRows);
    }
    setIsUpdateFormOpen(false);
  };

  return (
    <Box>
      <Box
        sx={{
          minHeight: "500px",
          border: "2px solid gray",
          borderRadius: "20px",
          backgroundColor: "white",
          p: 2,
          mb: 3,
          mt: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h5">Manage Hotels</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Create
          </Button>
          <HotelForm
            open={isFormOpen}
            handleClose={() => setIsFormOpen(false)}
            handleCreate={handleCreate}
          />
        </Box>
        <Divider sx={{ borderBottom: "2px solid " }} />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Delete Hotel</TableCell>
                <TableCell>Update</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Star Rate</TableCell>
                <TableCell align="left">Owner</TableCell>
                <TableCell align="left">Room Number</TableCell>
                <TableCell align="left">Creation Date</TableCell>
                <TableCell align="left">Modification Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => handleDelete(row.name)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      onClick={() => {
                        setSelectedRow(row);
                        setIsUpdateFormOpen(true);
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.starRate}</TableCell>
                  <TableCell align="left">{row.owner}</TableCell>
                  <TableCell align="left">{row.roomNumber}</TableCell>
                  <TableCell align="left">{row.creationDate}</TableCell>
                  <TableCell align="left">{row.modificationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedRow && (
          <UpdateHotelForm
            open={isUpdateFormOpen}
            handleClose={() => setIsUpdateFormOpen(false)}
            handleUpdate={handleUpdate}
            initialData={selectedRow}
          />
        )}
      </Box>
    </Box>
  );
};

export default HotelTable;
