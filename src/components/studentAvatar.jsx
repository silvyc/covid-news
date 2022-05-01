import { Image, Text, VStack, HStack } from "@chakra-ui/react";

const StudentAvatar = ({ name, email, image, code }) => (
  <HStack
    spacing="25px"
    alignItems="center"
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
      boxSize="150px"
      alt="Silvana Chain"
      src={`/img/${image}.jpg`}
    />
    <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
      <Text fontSize="xl" fontWeight={"bold"}>
        {name}
      </Text>
      <Text align={"left"}>{email}</Text>
      <Text align={"left"}>Codigo Estudiantil: {code}</Text>
    </VStack>
  </HStack>
);

export default StudentAvatar;
