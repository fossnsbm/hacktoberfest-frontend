import { useTheme } from "@emotion/react";
import { Container, Box, Button, Grid, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { TheLogo } from "../components/Logo";
import { HeartLogo } from "../components/Logo/Heart";
import { Divider } from "../components/Divider";
import { AppConfig } from "../config";

const HomePage = () => {
  return (
    <>
      <Box pt={{ xs: 0, md: 0 }} className="hOLCdd">
        <TheLogo />
      </Box>

      <div
        className="htb-button"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Button
          sx={{ mb: 10, mt: -2 }}
          component={Link}
          className="btn special"
          to={"/register"}
        >
          {AppConfig.register_closed ? (
            <>Registrations are closed...</>
          ) : (
            <>REGISTRATION NOW OPEN</>
          )}
        </Button>
      </div>

      <Container sx={{ mt: 5 }} maxWidth="lg">
        <Divider />

        <Typography variant={"h2"} className="headerShadow" id="preparetohack">
          PREPARE TO HACK
        </Typography>

        <Typography variant={"body1"} className="shadow-text" sx={{ mt: 5 }}>
          HACKTO-NIGHT is an overnight hackathon organized by the FOSS Community
          of NSBM to be held on the 14th and 15th of October 2022. This
          hackathon is only open for NSBM undergraduates, and we expect the
          participation of around 100 competitors.
        </Typography>

        <Typography variant={"body1"} className="shadow-text" sx={{ mt: 3 }}>
          The team spirit, technological knowledge, problem-solving skills, and
          coding skills of the participants will be put to the test during this
          hackathon. We hope to increase the contribution of NSBM undergraduates
          towards open source through this hackathon as well.
        </Typography>

        <div
          className="htb-button"
          style={{
            width: "100%",
          }}
        >
          <Button
            sx={{ mb: 5, mt: 3 }}
            component={"a"}
            className="btn special"
            href={"/guidelines.pdf"}
          >
            Download Guidlines
          </Button>
        </div>
      </Container>

      <Container sx={{ mt: 5 }}>
        <Divider />

        <Typography variant={"h2"} className="headerShadow" sx={{ mb: 5 }}>
          Event details
        </Typography>

        <div className="ksQOpk">
          <h3 className="shadow-text">Venue</h3>
          <ul>
            <li>
              <span> Student Center, NSBM Green University </span>
            </li>
          </ul>
        </div>

        <div className="ksQOpk">
          <h3 className="shadow-text">Date</h3>
          <ul>
            <li>
              <span>14th & 15th October 2022</span>
            </li>
          </ul>
        </div>

        <div className="ksQOpk">
          <h3 className="shadow-text">Time</h3>
          <ul>
            <li>
              <span>5.00 pm 14th October to 8.00 am 15th October</span>
            </li>
          </ul>
        </div>
      </Container>

      <Container sx={{ mt: 5 }}>
        <Divider />

        <Typography variant={"h2"} className="headerShadow" sx={{ mb: 5 }}>
          contact us for further inquiries.
        </Typography>

        <div className="ksQOpk">
          <h3 className="shadow-text">Mr. Thaanu Perera</h3>
          <ul>
            <li>
              <span>President - FOSS Community of NSBM</span>:
              <span>
                <a href="tele:0773298319"> 077 329 8319</a>
              </span>
            </li>
          </ul>
        </div>

        <div className="ksQOpk">
          <h3 className="shadow-text">Ms. Nethmi Kodikara </h3>
          <ul>
            <li>
              <span>President - Women in FOSS NSBM</span>:
              <span>
                <a href="tele:070 388 0082">070 388 0082</a>
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <Container sx={{ mt: 5 }}>
        <Divider />
      </Container>

      <HeartLogo />

      <Container>
        <Typography
          variant={"h2"}
          className="headerShadow"
          sx={{ mt: 5, textAlign: "center" }}
        >
          SUPPORT OPEN SOURCE
        </Typography>

        <Typography
          variant={"body1"}
          className="shadow-text"
          sx={{ mt: 5, textAlign: "center" }}
        >
          OPEN-SOURCE PROJECTS, MAINTAINED BY COMMUNITY-MINDED CODERS, SEFIQSBHT1RDSEEK MAKE THE
          MODERN INTERNET FUNCTION.  SUPPORTING THAT ESSENTIAL WORK, AND THE
          FOLKS BEHIND IT, IS WHAT HACKTOBERFEST IS ALL ABOUT. YOU HAVE SKILLS
          THAT CAN HELP KEEP THESE PROJECTS CONTINUE RUNNING—LET’S GET TO IT.
        </Typography>

        <div
          className="htb-button"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            sx={{ mb: 5, mt: 3 }}
            component={"a"}
            className="btn special"
            href={"https://hacktoberfest.com/donate/?aDNsbDBfYzBtcDN0"}
          >
            DONATE TO OPEN-SOURCE PROJECTS
          </Button>
        </div>
      </Container>
      <Container sx={{ mt: 10, mb: 35 }}>
        <div className="large_divider" />
      </Container>
    </>
  );
};

export default HomePage;
