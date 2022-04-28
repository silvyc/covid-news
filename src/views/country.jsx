import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Country() {
  useEffect(() => {
    const request = fetch("http://localhost:8000/countries", {
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  }).then((response) =>
      response.json()
    );
    console.log(request);
  }, []);

  return <Box></Box>;
}
