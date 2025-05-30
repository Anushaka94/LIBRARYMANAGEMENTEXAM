import React, { useState } from "react";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import axios from "axios"; // Import Axios

const AddAuthor = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: 0,
    bio: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://localhost:7027/api/Authors/AddAuthor", formData);
      if (response.status === 200) {
        setMessage("Author added successfully!");
      }
    } catch (error) {
      setMessage("Failed to add author.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Author
        </Typography>
        <TextField
          fullWidth
          name="name"
          label="Author Name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="bio"
          label="Bio"
          value={formData.bio}
          onChange={handleChange}
          required
          margin="normal"
        />
        {message && <Typography color={message.includes("successfully") ? "green" : "red"}>{message}</Typography>}
        <Button fullWidth variant="contained" sx={{ marginTop: 2 }} onClick={handleSubmit}>
          Submit
        </Button>
      </Card>
    </Container>
  );
};

export default AddAuthor;
