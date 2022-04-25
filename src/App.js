import { Box, Stack } from "@chakra-ui/react";
import Routing from "./routes/routes";
import NavBar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <Box height="100%">
      <Header />
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
        my={5}
        mx={10}
      >
        <Box>
          <Routing />
        </Box>
        <Box>
          <NavBar />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
