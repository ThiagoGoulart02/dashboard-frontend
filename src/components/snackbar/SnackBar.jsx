import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

export const SnackBar = ({ open, handleClose, text }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{
            width: "400px",
            height: "90px",
            alignItems: "center",
          }}
        >
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};
