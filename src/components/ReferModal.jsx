import React from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  referrerName: Yup.string().required('Referrer Name is required'),
  referrerEmail: Yup.string().email('Invalid email address').required('Email is required'),
  refereeName: Yup.string().required('Referee Name is required'),
  refereeEmail: Yup.string().email('Invalid email address').required('Email is required'),
  refereePhone: Yup.string().required('Phone number is required'),
  course: Yup.string().required('Course selection is required'),
});

const courses = [
  { value: 'course1', label: 'Course 1' },
  { value: 'course2', label: 'Course 2' },
  { value: 'course3', label: 'Course 3' },
];

const ReferModal = ({ open, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
      refereePhone: '',
      course: '', 
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSignup(values);
    },
  });

  const handleSignup = async (formData) => {
    try {
      toast.success("please wait")
      const response = await axios.post(
        "http://localhost:3000/api/referrals",
        formData
      );
  
      if (response && response.data) {
        toast.success(response.data.message || "Referral submitted successfully");
        formik.resetForm();
        handleClose();
      } else {
        console.error("Empty response or missing data:", response);
        toast.error("Empty response or missing data");
      }
    } catch (error) {
      console.error("API Error:", error.message);
      if (error.response) {
        toast.error(error.response.data.message || "Server Error");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response received from server");
      } else {
        console.error("Error setting up request:", error.message);
        toast.error("Error setting up request");
      }
    }
  };
  
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="referrerName"
            name="referrerName"
            label="Your Name"
            value={formik.values.referrerName}
            onChange={formik.handleChange}
            error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
            helperText={formik.touched.referrerName && formik.errors.referrerName}
            margin="normal"
          />
          <TextField
            fullWidth
            id="referrerEmail"
            name="referrerEmail"
            label="Your Email"
            value={formik.values.referrerEmail}
            onChange={formik.handleChange}
            error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
            helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
            margin="normal"
          />
          <TextField
            fullWidth
            id="refereeName"
            name="refereeName"
            label="Friend's Name"
            value={formik.values.refereeName}
            onChange={formik.handleChange}
            error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
            helperText={formik.touched.refereeName && formik.errors.refereeName}
            margin="normal"
          />
          <TextField
            fullWidth
            id="refereeEmail"
            name="refereeEmail"
            label="Friend's Email"
            value={formik.values.refereeEmail}
            onChange={formik.handleChange}
            error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
            helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
            margin="normal"
          />
          <TextField
            fullWidth
            id="refereePhone"
            name="refereePhone"
            label="Friend's Phone"
            value={formik.values.refereePhone}
            onChange={formik.handleChange}
            error={formik.touched.refereePhone && Boolean(formik.errors.refereePhone)}
            helperText={formik.touched.refereePhone && formik.errors.refereePhone}
            margin="normal"
          />
          <Select
            fullWidth
            id="course"
            name="course"
            label="Course"
            value={formik.values.course}
            onChange={formik.handleChange}
            error={formik.touched.course && Boolean(formik.errors.course)}
            displayEmpty
            margin="normal"
          >
            <MenuItem value="" disabled>
              Select a Course
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course.value} value={course.value}>
                {course.label}
              </MenuItem>
            ))}
          </Select>
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
