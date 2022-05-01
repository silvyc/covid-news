import { Box, Progress, Text } from "@chakra-ui/react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false));
  }, []);

  const headersFooters = [
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

  const TableHeaderFooter = () => (
    <Tr>
      {headersFooters.map((header) => (
        <Th key={header.key}>{header.label}</Th>
      ))}
    </Tr>
  );

  return (
    <Box>
      <TableContainer>
        <Table size="lg" variant="striped" colorScheme="gray">
          <TableCaption>
            {isLoading && (
              <Progress size="xs" isIndeterminate colorScheme="cokiBlue" />
            )}
            <Text>Tabla de Países y prefijos</Text>
          </TableCaption>
          <Thead>
            <TableHeaderFooter />
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
            <TableHeaderFooter />
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
