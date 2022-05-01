import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Text fontSize='4xl' align={'center'}>About us</Text>
      <Stack
        direction={'column'}
      >
        <HStack
          spacing='25px'
          alignItems='center'
        >
          <Image  
            borderRadius='full'
            boxSize='150px'
            alt="Silvana Chain" 
            src='/img/SilvanaChain.jpg' />
            <VStack alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Text fontSize='xl'>
              Silvana Maria Alexandra Chain Marulanda 
            </Text>
            <Text align={"left"}>
              smchain@uninorte.edu.co
            </Text>
            <Text align={"left"}>
              Codigo Estudiantil: 200143952
            </Text>
            </VStack>
        </HStack>
        <HStack
          spacing='25px'
          alignItems='center'
        >
          <Image 
            borderRadius='full'
            boxSize='150px'
            alt="Juan Padilla" 
            src='/img/JuanPadilla.jpg'/>
            <VStack alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Text fontSize='xl'>
              Juan David Padilla Paez
            </Text>
            <Text align={"left"}>
              paezdj@uninorte.edu.co
            </Text>
            <Text align={"left"}>
              Codigo Estudiantil: 200145173
            </Text>
            </VStack>
        </HStack>
      </Stack>
    </Box>
  );
}
