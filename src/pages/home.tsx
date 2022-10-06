import Countdown from "./Countdown";
import "./HomeSection.scss";
import {
    Grid,
    TextField,
    Link,
    Alert,
    MenuItem,
    Snackbar,
    FormControl,
    InputLabel,
    Select,
    Box,
    ListItem,
    ListItemButton,
    Button,
    Container,
    Paper,
    Typography,
    Divider,
    ListItemText,
  } from "@mui/material";
  import { useMutation } from "@tanstack/react-query";
  import axios from "axios";
  import { useState } from "react";
  import { AppConfig } from "../config";


function HomeSection() {
  let deadline = "October, 12, 2022";
  return (
    <div className="HomeSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={8.5}>
        <Container sx={{ mt: 8 }}>
        <Paper square sx={{ mb: 5 }}>
          <Box
            component="img"
            alt="test"
            src="/src/assets/Logo-1-Color.svg"
            width="50%"
            sx={{
              borderRadius: 2,
            }}
          />
        </Paper>    
        </Container>    
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Countdown deadline={deadline}></Countdown>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Button
            variant="outlined"
            className="RegisterButton"
          >
            Until Registration Closed
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeSection;
