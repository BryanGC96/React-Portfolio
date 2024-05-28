import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Using 'FORMIK' dependency together with 'Yup'.
const ContactForm = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
  const formik = useFormik({
    initialValues: { // specifies the initial state of the form fields.
      name: '',
      email: '',
      message: '',
    },
    // Defines the validation rules using Yup.
    // Using 'Yup' to define the validation schema.
    validationSchema: Yup.object({ 
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address') // 'Yup' makes sure the user inputs a 'VALID' email adress. Just like 'RegEx' but in a more 'readable' way.
        .required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    // This is to handle what happens to the form after submission.
    // We can add any logic here to see what happens after clicking submit with the data.
    onSubmit: (values, { resetForm }) => {
        setSubmittedData(values);
        setSuccessMessage('Mail sent to Bryan');
        alert('Message sent successfully');
        resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
