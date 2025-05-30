import React, { useState } from "react";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import axios from "axios";

const API_URL = "https://localhost:7027/api/Authors/AddCatogory";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    description: "",
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
      const response = await axios.post(API_URL, formData);
      if (response.status === 200) {
        setMessage("Category added successfully!");
      }
    } catch (error) {
      setMessage("Failed to add category.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Category
        </Typography>
        <TextField
          fullWidth
          name="name"
          label="Category Name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          value={formData.description}
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

export default AddCategory;
