import "./Leaderboard.scss";
import {
    Grid,
    Container,

  } from "@mui/material";

function Leaderboard() {
    return (
      <div className="Leaderboard">
        <Grid container direction="row">
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
          <Container sx={{ mt: 8,ml:-52 }} className="redbackground">
            <h3>Leaderboard</h3>
          </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
  
export default Leaderboard;
  