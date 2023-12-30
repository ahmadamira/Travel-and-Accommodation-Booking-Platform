import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/system";
import { useFormik } from "formik";

interface FormValues {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
  };
  paymentMethod: string;
  specialRequests: string;
}

const initialValues: FormValues = {
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
  },
  paymentMethod: "",
  specialRequests: "",
};

interface Row {
  name: string;
  roomNumber: number;
  price: number;
  quantity: number;
  total: number;
}

const createData = (
  name: string,
  roomNumber: number,
  price: number,
  quantity: number
): Row => {
  return {
    name,
    roomNumber,
    price,
    quantity,
    total: price * quantity || price,
  };
};

const exampleCartData = [
  { title: "Product A", roomNumber: 5, price: 20, quantity: 2 },
  { title: "Product B", roomNumber: 5, price: 30, quantity: 1 },
  { title: "Product C", roomNumber: 5, price: 15, quantity: 3 },
  { title: "Product A", roomNumber: 5, price: 20, quantity: 2 },
];

const StyledButton = styled(Button)(({}) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#FF5403",
  color: "white",
  width: "150px",
  "&:hover": {
    backgroundColor: "white",
    color: "#FF5403",
    border: "1px solid #FF5403",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  height: "48px",
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "30px",
  lineHeight: "48px",
  color: "#041562",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
}));

const CheckoutPage = () => {
  const [tableRows, setTableRows] = useState<Row[]>(
    exampleCartData.map((item) =>
      createData(item.title, item.roomNumber, item.price, item.quantity)
    )
  );
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    const updatedRows = tableRows.map((row) =>
      row.name === name
        ? { ...row, quantity: Number(value), total: row.price * Number(value) }
        : row
    );
    setTableRows(updatedRows);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleDelete = (name: string) => {
    const updatedRows = tableRows.filter((row) => row.name !== name);
    setTableRows(updatedRows);
  };

  const total = tableRows.reduce((acc, row) => acc + row.total, 0);
  const handleSubmit = (values: FormValues) => {
    // Handle form submission here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              minHeight: "500px",
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              p: 2,
              mt: 10,
              mb: 3,
            }}
          >
            <Title>Rooms Booked</Title>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Hotel</TableCell>
                    <TableCell align="left">Room Number</TableCell>
                    <TableCell align="left">Price/Night ($)</TableCell>
                    <TableCell align="left">Number Of Nights</TableCell>
                    <TableCell align="left">Total</TableCell>
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
                          x
                        </Button>
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.roomNumber}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          value={row.quantity || 1}
                          onChange={(event) =>
                            handleQuantityChange(event, row.name)
                          }
                          contentEditable={true}
                          style={{
                            boxSizing: "border-box",
                            width: "53px",
                            height: "42px",
                            left: "889px",
                            top: "331.98px",
                            background: "#FFFFFF",
                            border: "2px solid #EBEBEB",
                            textAlign: "center",
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h5" color="#041562" sx={{ mt: 3 }}>
              Your Total: {total} $
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              minHeight: "500px",
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              p: 2,
              mb: 10,
            }}
          >
            <Title>Checkout Details</Title>
            <form onSubmit={formik.handleSubmit}>
              <Box mb={2}>
                <Typography variant="h6" color="#041562" gutterBottom>
                  Personal Details
                </Typography>
                <TextField
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...formik.getFieldProps("personalDetails.firstName")}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...formik.getFieldProps("personalDetails.lastName")}
                />
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...formik.getFieldProps("personalDetails.email")}
                />
              </Box>

              <Box mb={2}>
                <Typography variant="h6" color="#041562" gutterBottom>
                  Payment Method
                </Typography>
                <Select
                  label="Payment Method"
                  fullWidth
                  variant="outlined"
                  {...formik.getFieldProps("paymentMethod")}
                  error={
                    formik.touched.paymentMethod &&
                    Boolean(formik.errors.paymentMethod)
                  }
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Payment Method
                  </MenuItem>
                  <MenuItem value="creditCard">Credit Card</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                </Select>
              </Box>

              <Box mb={2}>
                <Typography variant="h6" color="#041562" gutterBottom>
                  Special Requests or Remarks
                </Typography>
                <TextField
                  label="Special Requests"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  {...formik.getFieldProps("specialRequests")}
                />
              </Box>
              <Box mt={2}>
                <StyledButton type="submit">Check Out</StyledButton>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
