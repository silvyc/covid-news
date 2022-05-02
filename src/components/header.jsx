import { Box, Stack, Link } from "@chakra-ui/react";
import Logo from "./logo";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => (
  <Box as="header" position="sticky" top={0}>
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      bgColor="cokiBlue.500"
      height="8vh"
      px="2rem"
    >
      <Link as={ReactRouterLink} to="/">
        <Logo src="COVID NEWS.png" />
      </Link>
      <Logo src="Logo-UNINORTE.png" />
    </Stack>
  </Box>
);
export default Header;
