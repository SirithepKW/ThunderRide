import React from "react";
import { Dialog, DialogContent, DialogTitle, Button, Typography, Box, Slide } from "@mui/material";

export default function ResendPopup({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      hideBackdrop
      fullWidth
      TransitionComponent={Slide}
      PaperProps={{
        sx: {
          borderRadius: "20px 20px 0 0",
          position: "fixed",
          bottom: 0,
          m: 0,
        },
      }}
    >
      <DialogTitle>Resend Code</DialogTitle>
      <DialogContent>
        <Typography mb={2}>
          A new 4-digit code has been sent to your email.
        </Typography>
        <Box textAlign="center">
          <Button variant="contained" color="primary" onClick={onClose}>
            OK
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
