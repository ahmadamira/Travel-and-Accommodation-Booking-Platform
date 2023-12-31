// UpdateHotelForm.tsx
import React, { useState, useEffect } from "react";
import {
  Drawer,
  TextField,
  Button,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Row } from "../Hotel-Table/HotelTable";

interface UpdateHotelFormProps {
  open: boolean;
  handleClose: () => void;
  handleUpdate: (updatedHotel: Row) => void;
  initialData: Row;
}

const UpdateHotelForm: React.FC<UpdateHotelFormProps> = ({
  open,
  handleClose,
  handleUpdate,
  initialData,
}) => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: initialData.name,
      owner: initialData.owner,
      roomNumber: initialData.roomNumber,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      owner: Yup.string().required("Owner is required"),
      roomNumber: Yup.number().required("Room Number is required"),
    }),
    onSubmit: (values) => {
      handleUpdate({ ...initialData, ...values });
      handleClose();
    },
  });

  useEffect(() => {
    const isInitialDataChanged =
      formik.values.name !== initialData.name ||
      formik.values.owner !== initialData.owner ||
      formik.values.roomNumber !== initialData.roomNumber;

    setIsFormChanged(isInitialDataChanged);
  }, [formik.values, initialData]);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box p={2} width={500}>
        <Typography variant="h6">Update Hotel</Typography>
        <Divider sx={{ mb: 2 }} />
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
          <Button
            type="submit"
            color="primary"
            disabled={!isFormChanged || formik.isSubmitting}
          >
            Update
          </Button>
          <Button onClick={handleClose} color="primary" sx={{ ml: 1 }}>
            Cancel
          </Button>
        </form>
      </Box>
    </Drawer>
  );
};

export default UpdateHotelForm;
