// HotelForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Row } from "../Hotel-Table/HotelTable";

interface HotelFormProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (newHotel: Row) => void;
}

const HotelForm: React.FC<HotelFormProps> = ({
  open,
  handleClose,
  handleCreate,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    starRate: Yup.number().required("Star Rate is required"),
    owner: Yup.string().required("Owner is required"),
    roomNumber: Yup.number().required("Room Number is required"),
    creationDate: Yup.string().required("Creation Date is required"),
    modificationDate: Yup.string().required("Modification Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      starRate: 0,
      owner: "",
      roomNumber: 0,
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
            label="Star Rate"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("starRate")}
            error={formik.touched.starRate && Boolean(formik.errors.starRate)}
            helperText={formik.touched.starRate && formik.errors.starRate}
          />
          <TextField
            label="Owner"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps("owner")}
            error={formik.touched.owner && Boolean(formik.errors.owner)}
            helperText={formik.touched.owner && formik.errors.owner}
          />
          <TextField
            label="Room Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("roomNumber")}
            error={
              formik.touched.roomNumber && Boolean(formik.errors.roomNumber)
            }
            helperText={formik.touched.roomNumber && formik.errors.roomNumber}
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

export default HotelForm;
