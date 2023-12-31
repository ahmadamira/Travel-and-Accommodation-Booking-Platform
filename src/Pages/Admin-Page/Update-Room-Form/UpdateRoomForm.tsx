// UpdateRoomForm.tsx
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
import { Room } from "../Room-Table/RoomTable";

interface UpdateRoomFormProps {
  open: boolean;
  handleClose: () => void;
  handleUpdate: (updatedRoom: Room) => void;
  initialData: Room;
}

const UpdateRoomForm: React.FC<UpdateRoomFormProps> = ({
  open,
  handleClose,
  handleUpdate,
  initialData,
}) => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formik = useFormik({
    initialValues: {
      number: initialData.number,
      adults: initialData.adults,
      children: initialData.children,
    },
    validationSchema: Yup.object({
      number: Yup.number().required("Number is required"),
      adults: Yup.number().required("Adults capacity is required"),
      children: Yup.number().required("Children capacity is required"),
    }),
    onSubmit: (values) => {
      handleUpdate({ ...initialData, ...values });
      handleClose();
    },
  });

  useEffect(() => {
    const isInitialDataChanged =
      formik.values.number !== initialData.number ||
      formik.values.adults !== initialData.adults ||
      formik.values.children !== initialData.children;

    setIsFormChanged(isInitialDataChanged);
  }, [formik.values, initialData]);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box p={2} width={500}>
        <Typography variant="h6">Update Room</Typography>
        <Divider sx={{ mb: 2 }} />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("number")}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <TextField
            label="Adults"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("adults")}
            error={formik.touched.adults && Boolean(formik.errors.adults)}
            helperText={formik.touched.adults && formik.errors.adults}
          />
          <TextField
            label="Children"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            {...formik.getFieldProps("children")}
            error={formik.touched.children && Boolean(formik.errors.children)}
            helperText={formik.touched.children && formik.errors.children}
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

export default UpdateRoomForm;
