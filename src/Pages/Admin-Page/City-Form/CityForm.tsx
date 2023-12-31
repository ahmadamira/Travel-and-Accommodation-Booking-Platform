import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Row } from "../City-Table/CityTable";

interface HotelFormProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (newHotel: Row) => void;
}

const CityForm: React.FC<HotelFormProps> = ({
  open,
  handleClose,
  handleCreate,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    country: Yup.string().required("Country is required"),
    postOffice: Yup.string().required("Post Office is required"),
    numberOfHotels: Yup.number().required("Number of Hotels is required"),
    creationDate: Yup.string().required("Creation Date is required"),
    modificationDate: Yup.string().required("Modification Date is required"),
  });

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

export default CityForm;
