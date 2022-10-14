import React from "react";
import { Modal, FormControl, Button, TextField } from "@mui/material";
import { IMember } from "../types/member";

type UpdateProfileTypes = {
  visible: boolean;
  onClose: () => void;
  id: string | undefined;
  members: [];
};

const UpdateProfile: React.FC<UpdateProfileTypes> = ({
  visible,
  onClose,
  id,
  members,
}) => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {members.map((member: IMember) => {
        return (
          <TextField
            id="outlined-basic"
            label={member.fullName}
            variant="outlined"
            fullWidth
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
          sx={{ mb: 10 }}
          className="btn special"
          onClick={handleSubmit}
          fullWidth
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default UpdateProfile;
