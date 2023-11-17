import * as React from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

export default function RegistrationForm() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    experience: '',
    phoneNumber: '',
    email: '',
    selectedFile: null,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      selectedFile: event.target.files[0],
    });
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., send data to a server.

    // For demonstration purposes, log the form data to the console:
    console.log(formData);
  };

  return (
    <div className='cta-reg-form  cta-hiring-form' >
      <Button className='cta-know-more-btn' style={{
  textDecoration: 'none',
  margin: '20px 0px',
  color: 'white',
  padding: '18px',
  borderRadius: '18px'
}} variant="contained" onClick={handleDialogOpen}>
        Know More
      </Button>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle className='cta-form-title'>Join Our Team!</DialogTitle>
        <DialogContent>
          <form className='' onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
              required
            />

            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleFormChange}
              required
            />

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleFormChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Experience (in years)"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleFormChange}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleFormChange}
              required
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />

            <Input
              fullWidth
              type="file"
              accept=".pdf,.doc,.docx"
              name="selectedFile"
              onChange={handleFileChange}
            />
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
