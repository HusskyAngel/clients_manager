import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";

import { Formik, Field, Form, ErrorMessage,useField} from "formik";
import YupValidation from "./auxcomponents/YupCreateValidation";
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { LocalizationProvider, AdapterDateFns } from '@mui/x-date-pickers';
import DatePicker from "react-datepicker";
import { useState } from "react";
import Calendar from './Calendar';

import "react-datepicker/dist/react-datepicker.css";

const CrearClientes = () => {
  const [startDate, setStartDate] = useState(new Date());

  const initialValue = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
    bornDate: null,
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Agregar clientes</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    {/* First Way */}
                    <TextField
                      label="Name"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      value={name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.name && props.touched.name}
                      required
                    />
                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Email"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                    />

                   <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />

                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="confirmPassword" />}
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
                    />
                    <DatePicker selected={startDate} renderCustomHeader={Calendar} onChange={(date) => setStartDate(date)} />
                    <Field
                      as={TextField}
                      label="Image Link"
                      name="image"
                      type="text"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="image" />}
                      error={props.errors.image && props.touched.image}
                    />
                   <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

export default CrearClientes;
