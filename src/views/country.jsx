import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { getCountries } from "../api/countries";

export default function Country() {
  useEffect(() => {
    console.log(getCountries());
  }, []);

  return <Box></Box>;
}
