import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Graphs",
      path: "/graphs",
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
    >
      <VStack as={"nav"} spacing={4}>
        {links.map((link) => (
          <Link as={ReactRouterLink} to={link.path}>
            <Text>{link.name}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default NavBar;
