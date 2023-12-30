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
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

interface Row {
  name: string;
  country: string;
  postOffice: string;
  numberOfHotels: number;
  creationDate: string;
  modificationDate: string;
}

const createData = (
  name: string,
  country: string,
  postOffice: string,
  numberOfHotels: number,
  creationDate: string,
  modificationDate: string
): Row => {
  return {
    name,
    country,
    postOffice,
    numberOfHotels,
    creationDate,
    modificationDate,
  };
};

const exampleCartData: Row[] = [
  {
    name: "City A",
    country: "Country A",
    postOffice: "Post Office A",
    numberOfHotels: 10,
    creationDate: "2022-01-01",
    modificationDate: "2022-01-05",
  },
  {
    name: "City B",
    country: "Country B",
    postOffice: "Post Office B",
    numberOfHotels: 15,
    creationDate: "2022-02-01",
    modificationDate: "2022-02-10",
  },
  {
    name: "City C",
    country: "Country C",
    postOffice: "Post Office C",
    numberOfHotels: 20,
    creationDate: "2022-03-01",
    modificationDate: "2022-03-15",
  },
];
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  country: Yup.string().required("Country is required"),
  postOffice: Yup.string().required("Post Office is required"),
  numberOfHotels: Yup.number().required("Number of Hotels is required"),
  creationDate: Yup.string().required("Creation Date is required"),
  modificationDate: Yup.string().required("Modification Date is required"),
});

const HotelForm = ({
  open,
  handleClose,
  handleCreate,
}: {
  open: boolean;
  handleClose: () => void;
  handleCreate: (newHotel: Row) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      postOffice: "",
      numberOfHotels: 0,
      creationDate: "",
      modificationDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleCreate(values);
      formik.resetForm();
      handleClose();
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Hotel</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps("country")}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
            label="Post Office"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps("postOffice")}
            error={
              formik.touched.postOffice && Boolean(formik.errors.postOffice)
            }
            helperText={formik.touched.postOffice && formik.errors.postOffice}
          />
          <TextField
            label="Number of Hotels"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("numberOfHotels")}
            error={
              formik.touched.numberOfHotels &&
              Boolean(formik.errors.numberOfHotels)
            }
            helperText={
              formik.touched.numberOfHotels && formik.errors.numberOfHotels
            }
          />
          <TextField
            label="Creation Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            {...formik.getFieldProps("creationDate")}
            error={
              formik.touched.creationDate && Boolean(formik.errors.creationDate)
            }
            helperText={
              formik.touched.creationDate && formik.errors.creationDate
            }
          />
          <TextField
            label="Modification Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            {...formik.getFieldProps("modificationDate")}
            error={
              formik.touched.modificationDate &&
              Boolean(formik.errors.modificationDate)
            }
            helperText={
              formik.touched.modificationDate && formik.errors.modificationDate
            }
          />
          <DialogActions>
            <Button type="submit" color="primary">
              Create
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const HotelTable = () => {
  const [tableRows, setTableRows] = useState<Row[]>(
    exampleCartData.map((item) =>
      createData(
        item.name,
        item.country,
        item.postOffice,
        item.numberOfHotels,
        item.creationDate,
        item.modificationDate
      )
    )
  );
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreate = (newHotel: Row) => {
    // Implement logic to add the new hotel to the tableRows state
    setTableRows((prevRows) => [...prevRows, newHotel]);
  };

  const handleDelete = (name: string) => {
    const updatedRows = tableRows.filter((row) => row.name !== name);
    setTableRows(updatedRows);
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
      </Box>
    </Box>
  );
};

export default HotelTable;
