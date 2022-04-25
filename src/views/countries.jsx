import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Countries() {
  useEffect(() => {
    const request = fetch("http://localhost:8000/countries").then((response) =>
      response.json()
    );
    console.log(request);
  }, []);

  return <Box></Box>;
}
