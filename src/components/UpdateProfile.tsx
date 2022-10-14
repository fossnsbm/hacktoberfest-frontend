// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Modal, FormControl, Button, TextField } from "@mui/material";
import { IMember } from "../types/member";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { AppConfig } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type UpdateProfileTypes = {
  visible: boolean;
  onClose: () => void;
  id: string | undefined;
  data: any;
};

const UpdateProfile: React.FC<UpdateProfileTypes> = ({
  visible,
  onClose,
  id,
  data,
}) => {
  const [payload, setPayload] = useState({});
  const navigate = useNavigate();
  useEffect(() => { 
    setPayload(data) 
  }, [data])
  console.log(payload)
  const createUpdate = useMutation(
    (updateRegistration: any) =>
      axios.patch(`${AppConfig.api_url}/registration/${id}`, updateRegistration),
    {
      onSuccess: (response) => {
        toast.success("Registration Success !");
        if (response.data?.data?._id)
          navigate(`/profile/${response.data?.data?._id}`);
         
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;
      },
      onMutate: () => {},
    }
  );

  const handleSubmit = () => {
    console.log(payload);
    updateRegistration.mutate(payload)
  };

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#170F1E",
            padding: 24,
          }}
        >
          <h5>Add GitHub Usernames</h5>

          {payload?.members?.map((member: IMember, index) => {
            
            return (
              <TextField
                id="outlined-basic"
                label={member.fullName}
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  let row = [...payload.members]
                  console.log(row)
                  row[index].githubUserName = e.target.value
                  
                  setPayload({ ...payload, members:[...row] })
                }
                }
                sx={{ mt: 4 }}
              />
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
              sx={{ mt: 4 }}
              className="btn special"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default UpdateProfile;
