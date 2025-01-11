import React from "react";
import logo from "./logo.svg";

import "../css/App.css";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on Typescript with Redux
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent="4">
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
