import { Container, Typography, Paper, Box } from "@mui/material";
import { Divider } from "../components/Divider";
import { AppConfig } from "../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useLeaderboard from "../hooks/useLeaderboard";

const teams = [
  {
    name: "Team One",
    members: ["member one", "member two", "member three"],
  },
  {
    name: "Team Two",
    members: ["member one", "member two", "member three"],
  },
];

const LeaderBoard = () => {
  const { isLoading, error, data } = useLeaderboard();

  return (
    <>
      {AppConfig.leaderboard_closed ? (
        <>
          <Container sx={{ mt: 5 }} maxWidth="lg">
            <Divider />
            <Typography variant={"h2"} className="headerShadow" sx={{ mb: 4 }}>
              This Competition not started yet. Please wait
            </Typography>
          </Container>

          <Container sx={{ mt: 10, mb: 50 }}>
            <div className="large_divider" />
          </Container>
        </>
      ) : (
        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider />
          <Typography variant={"h2"} className="headerShadow" sx={{ mb: 4 }}>
            Leaderboard
          </Typography>

          {isLoading ? (
            <>
              <Box sx={{ mb: 3, fontSize:"1rem" }}>Loading...Plase wait...</Box>
            </>
          ) : (
            <>
              {data.map((item: any) => {
                return (
                  <>
                    <Box sx={{ mb: 3 }}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            variant={"h5"}
                            className="headersmallShadow"
                          >
                            {item?.team?.teamName} ( {item?.totalpoints} )
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item?.team ? (
                            <>
                              {item?.team?.members.map((member: any) => {
                                return (
                                  <>
                                    <Typography className="headersmallShadow">
                                      {member?.fullName}
                                    </Typography>
                                  </>
                                );
                              })}

                              <Typography
                                className="headersmallShadow"
                                sx={{ mt: 5 }}
                              >
                                {new Date(item?.updatedAt).toString()}
                              </Typography>
                            </>
                          ) : (
                            <>no members found </>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </>
                );
              })}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default LeaderBoard;
