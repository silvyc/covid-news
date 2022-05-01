import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  const tableHeadersFooters = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "País",
    },
    {
      key: "prefix",
      label: "Prefijo",
    },
  ];

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              {tableHeadersFooters.map((header) => (
                <Th key={header.key}>{header.label}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {countries.map((country) => (
              <Tr key={country.id}>
                <Td>{country.id}</Td>
                <Td>{country.name}</Td>
                <Td>{country.prefix}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              {tableHeadersFooters.map((header) => (
                <Th key={header.key}>{header.label}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
