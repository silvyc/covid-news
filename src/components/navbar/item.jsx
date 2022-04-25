import { Link as ReactRouterLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";

const NavBarItem = ({ link }) => (
  <Link as={ReactRouterLink} to={link.path}>
    <Text>{link.name}</Text>
  </Link>
);
export default NavBarItem;
