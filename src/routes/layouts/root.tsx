import {
  Box,
  Flex,
  Heading,
  VStack,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { GetInTouchForm } from "@/components/GetInTouchForm";

export function Root() {
  const formRef = useRef<HTMLDivElement>(null); // Reference to the form

  // Function to handle smooth scrolling to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      bg="#e0fbfc" // Light neutral background
    >
      {/* Navbar */}
      <Flex
        as="nav"
        width="100%"
        py={4}
        px={8}
        bg="#121420"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0"
        zIndex={10}
      >
        {/* Logo on the Left */}
        <Image src="/logo.png" alt="Logo" height="40px" />{" "}
        {/* Replace with actual logo path */}
        {/* Get in Touch Button on the Right */}
        <Button
          variant="ghost"
          onClick={scrollToForm} // Scroll to form when clicked
        >
          <Heading
            as="h1"
            fontSize={{ base: "xl", md: "xl" }}
            fontWeight="500"
            color="white.50"
          >
            Get in Touch
          </Heading>
        </Button>
      </Flex>

      {/* Main Content */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        zIndex={5}
        pt={32}
        px={4}
        maxW="900px"
        mt="50px" // Adjust to give space for navbar
      >
        {/* Hero Section */}
        <VStack spacing={8}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="400"
            color="gray.900"
            lineHeight="1.3"
          >
            We create unforgettable
            <br />
            conference experiences.
          </Heading>

          {/* Arrow to Scroll */}
          <Icon
            as={ArrowDownIcon}
            w={10}
            h={10}
            color="gray.700"
            cursor="pointer"
            onClick={scrollToForm} // Scroll on click
            _hover={{ color: "gray.900", transition: "all 0.2s ease-in-out" }}
          />
        </VStack>
      </Flex>

      {/* Wavy Decorative Element at the Bottom (Image as Background) */}
      <Box
        position="relative"
        bottom="0"
        left="0"
        width="100%"
        height="400px"
        backgroundImage="url('/wave-background.png')" // Add your image path here
        backgroundPosition="center bottom"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        zIndex={0}
      />

      {/* Get in Touch Form (Scroll Destination) */}
      <Box
        ref={formRef} // This is the ref we scroll to
        id="get-in-touch"
        width="100%"
        minHeight="100vh"
        bg="#00ACF2" // Light neutral background
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={4}
      >
        {/* Get In Touch Form */}
        <GetInTouchForm />
      </Box>
    </Box>
  );
}
