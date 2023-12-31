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
import CityForm from "../City-Form/CityForm";
import UpdateCityForm from "../Update-City-Form/UpdateCityForm";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface Row {
  name: string;
  country: string;
  postOffice: string;
  numberOfHotels: number;
  creationDate: string;
  modificationDate: string;
}

const CityTable = () => {
  const [tableRows, setTableRows] = useState<Row[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);

  // Add some sample data when the component mounts
  useEffect(() => {
    const sampleData: Row[] = [
      {
        name: "City A",
        country: "Country A",
        postOffice: "Post Office A",
        numberOfHotels: 10,
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
          <Typography variant="h5">Manage Citys</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Create
          </Button>
          <CityForm
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
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Post Office</TableCell>
                <TableCell align="left">Number of Hotels</TableCell>
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
                  <TableCell align="left">{row.country}</TableCell>
                  <TableCell align="left">{row.postOffice}</TableCell>
                  <TableCell align="left">{row.numberOfHotels}</TableCell>
                  <TableCell align="left">{row.creationDate}</TableCell>
                  <TableCell align="left">{row.modificationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedRow && (
          <UpdateCityForm
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

export default CityTable;
