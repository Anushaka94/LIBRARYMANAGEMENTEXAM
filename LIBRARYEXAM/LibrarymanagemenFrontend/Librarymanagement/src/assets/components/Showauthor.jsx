import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Card, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const API_URL = "https://localhost:7027/api/Authors";

const AuthorManager = () => {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({ name: "", id: 0, bio: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(API_URL);
      setAuthors(response.data);
    } catch (error) {
      setMessage("Failed to fetch authors.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/AddAuthor`, formData);
      if (response.status === 200) {
        setMessage("Author added successfully!");
        fetchAuthors(); // Refresh author list
      }
    } catch (error) {
      setMessage("Failed to add author.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Manage Authors
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

        <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: 3 }}>
          Author List
        </Typography>
        <List>
          {authors.map((author) => (
            <ListItem key={author.id}>
              <ListItemText primary={author.name} secondary={author.bio} />
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
};

export default AuthorManager;
