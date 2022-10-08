import { Box } from "@mui/material";

export const Divider = () => {
  return (
    <>
      <Box className="divider_wrapper">
        <div className="garnish_wrapper">
          <div className="garnish short"></div>
          <div className="garnish short"></div>
          <div className="garnish long"></div>
        </div>
        <div className="long"></div>
        <div className="angled_wrapper">
          <div className="angled"></div>
        </div>
        <div className="short"></div>
      </Box>
    </>
  );
};
