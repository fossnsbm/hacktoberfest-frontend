import { Stack, Button, Box, Container, Grid, Typography } from "@mui/material";

export const HeroPage = () => {
  const headerTemplateTwoImageHeight = 500;
  const isSmDown = true;

  return (
    <>
      <Box pt={{ xs: 11.5, md: 0 }} sx={{ position: "relative" }}>
        <Container>
          <Grid
            container
            spacing={{
              xs: 0,
              md: 0,
            }}
            justifyContent="center"
            sx={{
              mb: {
                xs: 14,
                md: 14,
              },
              height: {
                md: headerTemplateTwoImageHeight,
              },
            }}
            gap={{ xs: 10, md: 0 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  md: "center",
                },
              }}
            >
              <Box
                display="flex"
                alignItems={{
                  xs: "flex-start",
                  md: "flex-start",
                }}
                justifyContent="center"
                flexDirection="column"
              >
                <Box py={2} px={3.5} sx={{}} mb={{ xs: 8, md: 8 }}>
                  <Typography
                    color="primary.dark"
                    fontWeight={600}
                    fontSize={{ xs: 16 }}
                  >
                    The Tag Line
                  </Typography>
                </Box>

                <Box sx={{ width: { md: 700 } }} mb={{ xs: 4, md: 4 }}>
                  <Typography
                    variant={"h2"}
                    component="h1"
                    textAlign={{
                      md: "left",
                    }}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      fontWeight: 900,
                      justifyContent: {
                        md: "left",
                      },
                      gap: 2,
                      ".primary-title": {
                        color: (t) => t.palette.secondary.main,
                      },
                    }}
                  >
                    A truly{" "}
                    <span
                      style={{
                        color: "#6699FF",
                      }}
                    >
                      Open Source
                    </span>{" "}
                    Community dedicated to Open Source Enthusiasts.
                  </Typography>
                </Box>

                <Stack spacing={6} direction="row">
                  <Button variant="contained">Explore</Button>
                  <Button variant="outlined">View all events</Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} display="flex" alignItems="center">
              <Box
                height={{ lg: headerTemplateTwoImageHeight }}
                sx={{
                  width: { xs: "100%", lg: "auto" },
                  position: { lg: "absolute" },
                  right: { lg: 0 },
                  "> span": {
                    width: "100% !important",
                  },
                  img: {
                    display: "block",
                  },
                }}
              >
                <img
                  src={
                    "https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg"
                  }
                  height={headerTemplateTwoImageHeight}
                  width={700}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
