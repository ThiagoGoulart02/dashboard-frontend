import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

export const SnackBar = ({ open, handleClose, text, severity }) => {
  const transition = Slide;
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{
            width: "400px",
            height: "70px",
            alignItems: "center",
          }}
        >
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};
