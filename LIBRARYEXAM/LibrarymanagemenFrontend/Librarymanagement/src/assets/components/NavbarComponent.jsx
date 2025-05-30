import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MatchingNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1e3a5f", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            LIBRARY
          </Typography>
          <Link to="/Author" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Add Author</Button>
          </Link>

           <Link to="/Showauthor" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>ShowAuthors</Button>
          </Link>

            <Link to="/Categories" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Catogery</Button>
          </Link>

           <Link to="/Showcatogery" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>CatogeryList</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MatchingNavbar;
