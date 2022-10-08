import {
  TextField,
  MenuItem,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AppConfig } from "../config";
import { UserInformation } from "../enum/UserDetails";
import axios from "axios";

const RegisterPage = () => {
  const [teamName, setTeamName] = useState("");
  const [showSnackBar, setShowSnakBar] = useState(false);
  const [message, setMessage] = useState("");
  const [members, setMembers] = useState([
    {
      id: 0,
      fullName: "test",
      batch: "",
      studentId: "",
      foodPref: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },

    {
      id: 1,
      fullName: "",
      batch: "",
      studentId: "",
      foodPref: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },

    {
      id: 2,
      fullName: "",
      batch: "",
      studentId: "",
      foodPref: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },
    {
      id: 3,
      fullName: "",
      batch: "",
      studentId: "",
      foodPref: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },
  ]);

  const createRegistration = useMutation(
    (newRegistration: any) =>
      axios.post(`${AppConfig.api_url}/registration`, newRegistration),
    {
      onSuccess: (response) => {
        setShowSnakBar(true);
        setMessage("Registration success");
      },
      onError: (error: Error) => {
        setShowSnakBar(true);
        setMessage(error.message);
      },
      onMutate: () => {},
    }
  );

  const updateMemberValues = (
    index: number,
    value: string,
    propertyName: string
  ) => {
    setMembers(
      members.map((item) =>
        item.id === index ? { ...item, [propertyName]: value } : item
      )
    );
  };

  const submitForm = () => {
    const values = {
      teamName: teamName,
      members,
    };

    createRegistration.mutate(values);
  };

  return (
    <>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={() => setShowSnakBar(false)}
        message={message}
      />

      <Container sx={{ mt: 8 }} className="redbackground">
        <Box
          component="img"
          alt="test"
          className="registerMainImg"
          src="/cover.png"
          width="100%"
          sx={{
            borderRadius: 2,
            mb: 5,
          }}
        />

        <div className="kydKZM">
          <Typography variant={"h2"} className="headerShadow">
            Registration Details
          </Typography>

          <Typography
            variant={"body1"}
            component={"p"}
            mt={3}
            className="paraShadow"
          >
            HACKTO-NIGHT is an overnight hackathon organized by the FOSS
            Community of NSBM to be held on the 14th and 15th of October 2022.
            This hackathon is only open for NSBM undergraduates, and we expect
            the participation of around 100 competitors.
          </Typography>
        </div>

        <Paper
          sx={{ p: 3, mt: 7, mb: 7, borderRadius: 1 }}
          className="paperglassdetails"
        >
          <Typography variant={"h5"} className="headersmallShadow">
            Team Details
          </Typography>

          <TextField
            id="outlined-basic"
            onChange={(e) => setTeamName(e.target.value)}
            label="Team Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
          />
        </Paper>

        {members.map((member) => {
          return (
            <>
              <Paper
                sx={{ p: 3, mt: 7, mb: 7, borderRadius: 1 }}
                className="paperglassdetails"
              >
                <Typography variant={"h5"} className="headersmallShadow">
                  {member.id == 0 ? "Member One " : null}
                  {member.id == 1 ? "Member Two " : null}
                  {member.id == 2 ? "Member Three " : null}
                  {member.id == 3 ? "Member Four (optional)" : null}
                </Typography>

                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.FULL_NAME
                    )
                  }
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Batch"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.BATCH
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Student ID"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.STUDENT_ID
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.EMAIL
                    )
                  }
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.PHONE
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <FormControl fullWidth sx={{ mt: 4 }}>
                  <InputLabel id="demo-simple-select-label">
                    Food preference
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Food preference"
                    onChange={(e) =>
                      updateMemberValues(
                        member.id,
                        // @ts-ignore
                        e.target.value,
                        UserInformation.FOOD_PREF
                      )
                    }
                  >
                    <MenuItem value={"Non-Vegetarian "}>
                      Non-Vegetarian{" "}
                    </MenuItem>
                    <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-basic"
                  label="Guardian Name"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.GUARDIAN_NAME
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Guardian’s Phone Number "
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.GUARDIAN_PHONE
                    )
                  }
                  fullWidth
                  sx={{ mt: 4, mb: 4 }}
                />
              </Paper>
            </>
          );
        })}
        <div
          className="htb-button"
          style={{
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{ mb: 10 }}
            className="btn special"
            onClick={() => submitForm()}
            fullWidth
          >
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
