import * as React from "react";
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
} from "@mui/material";

export default function RegistrationForm() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
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

    console.log(formData);
  };

  return (
    <div className="cta-reg-form cta-hiring-form">
      <Button
        className="w-full px-3 py-3 text-sm font-semibold duration-150 rounded-lg cta-know-more-btn cta-view-more-product "
        variant="contained"
        onClick={handleDialogOpen}
      >
        Apply Now
      </Button>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle className="cta-form-title">Join Our Team!</DialogTitle>
        <DialogContent>
          <form className=".form" onSubmit={handleSubmit}>
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
              className="input-box-file"
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
