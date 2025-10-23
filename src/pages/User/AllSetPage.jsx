import React from "react";
import { Box, Typography } from "@mui/material";

export default function AllSetPage() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography sx={{ fontSize: 40, fontWeight: 500, mb: 2, mt: 30, textAlign: "center" }}>
        All set !!
      </Typography>
      <Typography sx={{ fontSize: 12, color: "grey.600" }}>
        You’ll be signed in and your account momentarily.
      </Typography>
    </Box>
  );
}
