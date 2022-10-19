import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";

const Menubar: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 12,
      }}
      className="shadowTextRed"
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Typography fontSize={18} fontWeight="700">
          Home
        </Typography>
      </Link>

      <a style={{ textDecoration: "none" }} href="#preparetohack">
        <Typography fontSize={18} fontWeight="700">
          About
        </Typography>
      </a>

      <Link style={{ textDecoration: "none" }} to="/LeaderBoard">
        <Typography fontSize={18} fontWeight="700">
          LeaderBoard
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/blog">
        <Typography fontSize={18} fontWeight="700">
          Blog
        </Typography>
      </Link>
    </Box>
  );
};

export default Menubar;
