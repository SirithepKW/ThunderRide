import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BottomButtons({ page, onBack, onNext, isNextDisabled }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "#fafafa",
        p: 2,
        display: "flex",
        justifyContent: page === "allset" ? "flex-end" : "space-between",
        alignItems: "center",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {page !== "allset" && (
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Button
        variant="contained"
        onClick={onNext}
        disabled={page !== "allset" && isNextDisabled}
        sx={{
          borderRadius: "50px",
          bgcolor: page !== "allset" && isNextDisabled ? "grey.400" : "primary.main",
          "&:hover": {
            bgcolor: page !== "allset" && isNextDisabled ? "grey.400" : "#D8A71C",
          },
          px: 4,
          py: 1.5,
        }}
      >
        {page === "allset" ? "Continue →" : "Next"}
      </Button>
    </Box>
  );
}
