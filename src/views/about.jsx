import { Box, Stack, Text } from "@chakra-ui/react";
import StudentAvatar from "../components/studentAvatar";

const students = [
  {
    name: "Silvana Chain",
    email: "smchain@uninorte.edu.co",
    image: "SilvanaChain",
    code: "200143952",
  },
  {
    name: "Juan Padilla",
    email: "paezdj@uninorte.edu.co",
    image: "JuanPadilla",
    code: "200145173",
  },
];

export default function About() {
  return (
    <Box>
      <Text
        fontSize={{
          base: "2xl",
          md: "4xl",
        }}
        align={"center"}
        mb={5}
      >
        About us
      </Text>
      <Stack
        direction={{
          base: "column",
          "2xl": "row",
        }}
        spacing="3rem"
      >
        {students.map((student) => (
          <StudentAvatar {...student} />
        ))}
      </Stack>
    </Box>
  );
}
