import { Box, Stack } from "@chakra-ui/react";
import Routing from "./routes/routes";
import NavBar from "./components/navbar";
import Header from "./components/header";
import MyChart from "./components/charts";

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
