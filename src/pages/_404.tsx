import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div
        className="hOLCdd"
        style={{
          textAlign: "center",
        }}
      >
        <div className="cqhcqg">
          <div className="lhugCu">
            <Typography
              variant={"h2"}
              className="headerShadow"
              sx={{ textAlign: "center" }}
            >
              UH OH... THIS PAGE DOESN'T EXIST
            </Typography>
          </div>
        </div>
      </div>
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
          to={"/"}
        >
          return to home
        </Button>
      </div>
    </>
  );
};
