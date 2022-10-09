import { useTheme } from "@emotion/react";
import { Container, Box,TextField, Button, Grid, Typography, Stack, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { TheLogo } from "../components/Logo";
import { HeartLogo } from "../components/Logo/Heart";
import { Divider } from "../components/Divider";
import { AppConfig } from "../config";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LeaderBoard = () =>{

    return(
        <Container sx={{ mt: 5 }} maxWidth="lg">
            <Divider></Divider>
            <Typography variant={"h2"} className="headerShadow" sx={{ mb: 4 }}>
                Leaderboard
            </Typography>

    <Paper>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >          
        <Typography  variant={"h5"} className="headersmallShadow">Team 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="headersmallShadow">
            member 1 <br/>
            member 2 <br/>
            member 3 <br/>
            member 4 <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

 <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 8</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    <br/>

    <Paper> 
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"} className="headersmallShadow">Team 10</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            member 1
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
    <br/>
        </Container>
    );
}

export default LeaderBoard;