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
import { Row } from "../City-Table/CityTable";

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
      country: initialData.country,
      postOffice: initialData.postOffice,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      country: Yup.string().required("Country is required"),
      postOffice: Yup.string().required("Post Office is required"),
    }),
    onSubmit: (values) => {
      handleUpdate({ ...initialData, ...values });
      handleClose();
    },
  });

  useEffect(() => {
    const isInitialDataChanged =
      formik.values.name !== initialData.name ||
      formik.values.country !== initialData.country ||
      formik.values.postOffice !== initialData.postOffice;

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
