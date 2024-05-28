import { Container, VStack, Box, Heading, Text, SimpleGrid, GridItem, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>John Doe</Heading>
        <Text fontSize="xl">A passionate web developer with a knack for creating stunning websites.</Text>
      </Box>

      {/* Achievements Section */}
      <Box as="section" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>Achievements</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 1</Heading>
              <Text mt={4}>Description of the first achievement.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 2</Heading>
              <Text mt={4}>Description of the second achievement.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Achievement 3</Heading>
              <Text mt={4}>Description of the third achievement.</Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Footer Section */}
      <Box as="footer" textAlign="center" py={10} borderTopWidth="1px" mt={10}>
        <Text fontSize="lg">Contact Information:</Text>
        <Text>Email: <Link href="mailto:john.doe@example.com" color="teal.500">john.doe@example.com</Link></Text>
        <Text>Phone: <Link href="tel:+1234567890" color="teal.500">+1234567890</Link></Text>
      </Box>
    </Container>
  );
};

export default Index;