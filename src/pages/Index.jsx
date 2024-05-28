import { Container, VStack, Box, Heading, Text, SimpleGrid, GridItem, Link, IconButton } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header Section */}
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>John Doe</Heading>
        <Text fontSize="xl">Full Stack Developer | Tech Enthusiast | Lifelong Learner</Text>
      </Box>

      {/* Achievements Section */}
      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">Achievements</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 1</Heading>
              <Text mt={4}>Description of the first achievement. Highlight key points and details.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 2</Heading>
              <Text mt={4}>Description of the second achievement. Highlight key points and details.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 3</Heading>
              <Text mt={4}>Description of the third achievement. Highlight key points and details.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 4</Heading>
              <Text mt={4}>Description of the fourth achievement. Highlight key points and details.</Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Footer Section */}
      <Box as="footer" textAlign="center" py={10} borderTopWidth="1px">
        <VStack spacing={4}>
          <Text>Contact Me</Text>
          <Box>
            <Link href="mailto:john.doe@example.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" m={1} />
            </Link>
            <Link href="https://www.linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={1} />
            </Link>
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" m={1} />
            </Link>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;