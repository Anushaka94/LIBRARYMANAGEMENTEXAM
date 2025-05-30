import React, { useState, useEffect } from "react";
import { Container, Typography, Card, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const API_URL = "https://localhost:7027/api/Authors/getcatory";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      setCategories(response.data);
    } catch (error) {
      setMessage("Failed to fetch categories.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Category List
        </Typography>
        {message && <Typography color="error">{message}</Typography>}
        <List>
          {categories.map((category) => (
            <ListItem key={category.id}>
              <ListItemText primary={category.name} secondary={category.description} />
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
};

export default CategoryList;
