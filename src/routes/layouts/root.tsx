import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function Root() {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // Automatically scroll to top whenever pathname changes
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <Box
      minH="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgGradient="radial(ellipse at center, #3d5a80, #293241)"
      overflow="hidden"
    >
      {/* Main Content */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        zIndex={5}
        py={20}
        px={4}
        maxW="1200px"
      >
        {/* Hero Section */}
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" color="white" fontWeight="extrabold">
            Revolutionize Conference Engagement
          </Heading>
          <Text fontSize="xl" color="gray.300" maxW="3xl">
            Prometheus Labs provides cutting-edge ticketing and engagement
            solutions that empower event organizers to create interactive,
            data-driven, and unforgettable experiences.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: "white", color: "gray.800" }}
          >
            Learn More
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
