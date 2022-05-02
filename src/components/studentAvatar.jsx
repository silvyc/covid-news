import { Image, Text, VStack, HStack } from "@chakra-ui/react";

const StudentAvatar = ({ name, email, image, code }) => (
  <HStack
    spacing={25}
    alignItems="center"
    justifyContent="center"
    borderWidth="1px"
    borderRadius="lg"
    transition={["ease-in-out", "0.15s"]}
    _hover={{
      borderColor: "cokiBlue.400",
    }}
    px={10}
    py={6}
  >
    <Image
      borderRadius="full"
      boxSize={{
        base: "5rem",
        sm: "8rem",
      }}
      alt="Silvana Chain"
      src={`/img/${image}.jpg`}
    />
    <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
      <Text fontSize="xl" fontWeight={"bold"}>
        {name}
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }}>{email}</Text>
      <Text fontSize={{ base: "sm", md: "md" }}>
        Codigo Estudiantil: <b>{code}</b>
      </Text>
    </VStack>
  </HStack>
);

export default StudentAvatar;
