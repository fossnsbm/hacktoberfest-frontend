import { Container, Link, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Divider } from "../components/Divider";
import useTeam from "../hooks/useTeam";
import { useParams } from "react-router-dom";
import { AppConfig } from "../config";
import { IMember } from "../types/member";
import md5 from "md5";
import { toast } from "react-toastify";
import UpdateProfile from "../components/UpdateProfile";

export const DetailsPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useTeam(id!);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (error) {
    // @ts-ignore
    toast.error(error?.response?.data?.message);
  }

  return (
    <>
      <Container sx={{ mt: 8 }} className="bluebackground">
        {isLoading ? (
          <>loading...</>
        ) : (
          <>
            <Typography variant={"h1"} className="headerShadow" sx={{ mb: 5 }}>
              {data?.data?.teamName}
            </Typography>

            <Divider />

            <Box sx={{ mb: 10 }}>
              <Typography variant={"h4"} className="shadow-text" sx={{ mb: 5 }}>
                Team Members
              </Typography>

              {data?.data?.members.map((member: IMember) => {
                return (
                  <>
                    <TeamMember member={member} />
                  </>
                );
              })}
            </Box>

            <div
              className="htb-button"
              style={{
                width: "100%",
              }}
            >
              <Button
                sx={{ mb: 10 }}
                // component={Link}
                className="btn special"
                onClick={() => setShowModal(true)}
              >
                Add GitHub Usernames
              </Button>
            </div>

            <Divider />
          </>
        )}

        <Typography variant={"h1"} className="headerShadow" sx={{ mb: 5 }}>
          Event Details
        </Typography>

        <div
          className="htb-button"
          style={{
            width: "100%",
          }}
        >
          <Button
            sx={{ mb: 10 }}
            component={Link}
            className="btn special"
            href={"/guidelines.pdf"}
          >
            Download Guidlines
          </Button>
        </div>

        <div className="large_divider" style={{ marginTop: 20 }} />

        <Box sx={{ alignItems: "center" }} className="redbackground">
          {isLoading ? (
            <> loading... </>
          ) : (
            <>
              <Box
                component="img"
                className="qrcode"
                alt="test"
                src={`${AppConfig.api_url}/static/${id}.png`}
                sx={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "30%",
                }}
              />
            </>
          )}
        </Box>
      </Container>
      <UpdateProfile
        visible={showModal}
        onClose={handleModalClose}
        id={id}
        members={data?.data?.members}
      />
    </>
  );
};

const TeamMember = (data: { member: IMember }) => {
  return (
    <>
      <div className="ksQOpk">
        <h3 className="shadow-text">{data.member?.fullName}</h3>

        <Stack direction="row" spacing={2}>
          <img
            src={`https://www.gravatar.com/avatar/${md5(data.member?.email)}`}
            alt={`${data.member?.fullName}`}
            style={{
              borderRadius: 5,
              boxShadow:
                "rgba(255, 215, 77, 0.6) -1px -1px 6px, rgba(234, 74, 170, 0.6) 1px 1px 6px",
            }}
            width="64"
            height="64"
          />

          <Stack>
            <ul>
              <li>
                <span>Email : </span> {data.member?.email}
              </li>
            </ul>

            <ul>
              <li>
                <span>Batch : </span> {data.member?.batch}
              </li>
            </ul>
          </Stack>
        </Stack>
      </div>
    </>
  );
};
