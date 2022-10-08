import Countdown from "./Countdown";
import "./HomeSection.scss";
import {
    Grid,
    Button,
    Container,

  } from "@mui/material";

function HomeSection() {
  let deadline = "October, 12, 2022";
  return (
    <div className="HomeSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
        <Container sx={{ mt: 8,ml:-5 }} className="redbackground">
          <Grid
            component="img"
            alt="hacktonight"
            src="/src/assets/hack2night.png"
            width="50%"
            sx={{
              borderRadius: 2,
              mb:3,
            }}
          />
        </Container>
        </Grid>
      </Grid>
      <Grid container direction="row" sx={{mt:-22}}>
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
