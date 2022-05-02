import { Box, Stack } from "@chakra-ui/react";
import Routing from "./routes/routes";
import NavBar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <Box height="100%">
      <Box position="sticky" top={0} zIndex={2}>
        <Header />
      </Box>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "row",
        }}
        justifyContent="space-around"
        my={5}
        mx={10}
        spacing={{ base: 5, sm: 10 }}
      >
        <Box
          display={{
            base: "block",
            md: "none",
          }}
          zIndex={1}
        >
          <NavBar />
        </Box>
        <Box>
          <Routing />
        </Box>
        <Box
          position="sticky"
          display={{
            base: "none",
            md: "block",
          }}
        >
          <NavBar />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
