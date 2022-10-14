import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { AppConfig } from "../config";
import { UserInformation } from "../enum/UserDetails";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

const UpdatePage = () => {
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();
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
        toast.success("Registration Success !");
        if (response.data?.data?._id)
          navigate(`/profile/${response.data?.data?._id}`);
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;

        if (!errorMessages) {
          toast.error(error.message);
          return;
        }

        if (!Array.isArray(errorMessages.message)) {
          toast.error(errorMessages.message);
          return;
        }

        for (const message of errorMessages?.message) {
          toast.error(message);
        }
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
    let newMembers = members;

    if (members[3]) {
      if (members[3].fullName == "" && members[3].email == "") {
        newMembers.pop();
      }
    }

    const values = {
      teamName: teamName,
      members: newMembers,
    };

    createRegistration.mutate(values);
  };

  return (
      <>
      <Container sx={{ mt: 8 }} className="redbackground">
        <Box
          sx={{ p: 3, mt: 7, mb: 7, borderRadius: 1 }}
          className="paperglassdetails kydKZM"
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
        </Box>

        {members.map((member) => {
          return (
            <>
              <Box
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
              </Box>
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
};

export default UpdatePage;
