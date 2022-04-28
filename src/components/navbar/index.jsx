import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Countrywise Graphs",
      path: "/country",
    },
    {
      name: "Daywise Graphs",
      path: "/daily",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <Box
      bg={"cokiBlue.400"}
      borderRadius="lg"
      width={{
        base: "auto",
        md: 200,
        lg: 300,
        xl: 400,
      }}
      py={5}
    >
      <VStack as={"nav"} spacing={4}>
        {links.map((link) => (
          <Link as={ReactRouterLink} to={link.path} key={link.name}>
            <Text>{link.name}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default NavBar;
