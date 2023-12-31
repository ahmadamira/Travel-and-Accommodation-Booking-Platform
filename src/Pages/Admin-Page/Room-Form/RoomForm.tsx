import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Room } from "../Room-Table/RoomTable";

interface RoomFormProps {
  open: boolean;
  handleClose: () => void;
  handleCreate: (newRoom: Room) => void;
}

const RoomForm: React.FC<RoomFormProps> = ({
  open,
  handleClose,
  handleCreate,
}) => {
  const validationSchema = Yup.object({
    number: Yup.number().required("Number is required"),
    adults: Yup.number().required("Adults capacity is required"),
    children: Yup.number().required("Children capacity is required"),
    creationDate: Yup.string().required("Creation Date is required"),
    modificationDate: Yup.string().required("Modification Date is required"),
    availability: Yup.boolean().required("Availability is required"),
  });

  const formik = useFormik({
    initialValues: {
      number: 0,
      adults: 0,
      children: 0,
      creationDate: "",
      modificationDate: "",
      availability: false, // Set default availability
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
      <DialogTitle>Create Room</DialogTitle>
      <DialogContent>
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
          <TextField
            label="Availability"
            variant="outlined"
            fullWidth
            margin="normal"
            select
            {...formik.getFieldProps("availability")}
            error={
              formik.touched.availability && Boolean(formik.errors.availability)
            }
            helperText={
              formik.touched.availability && formik.errors.availability
            }
          >
            {/* <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem> */}
          </TextField>

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

export default RoomForm;
