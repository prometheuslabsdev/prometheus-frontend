import {
  Box,
  Flex,
  Heading,
  VStack,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { GetInTouchForm } from "@/components/GetInTouchForm";

export function Root() {
  const formRef = useRef<HTMLDivElement>(null); // Reference to the form
  const careersRef = useRef<HTMLDivElement>(null); // Reference to the careers section
  const aboutUsRef = useRef<HTMLDivElement>(null); // Reference to the About Us section
  const [isAboutUsVisible, setAboutUsVisible] = useState(false);

  // Function to handle smooth scrolling to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Function to handle smooth scrolling to the About Us section
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Function to check if the About Us section is in view
  const checkAboutUsVisibility = () => {
    if (aboutUsRef.current) {
      const rect = aboutUsRef.current.getBoundingClientRect();
      setAboutUsVisible(rect.top <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkAboutUsVisibility);
    checkAboutUsVisibility(); // Check visibility on mount
    return () => window.removeEventListener("scroll", checkAboutUsVisibility);
  }, []);

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
      <Box
        position="relative"
        width="100%"
        bgImage="url('/boxes-background.svg')" // Replace with your SVG URL
        bgPosition="center center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pb={20} // Adjust padding as needed
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          zIndex={5}
          pt={32}
          px={4}
          maxW="100%"
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
              Engagement is priceless
              <br />
              Elevate your events
            </Heading>

            {/* Arrow to Scroll */}
            <Icon
              as={ArrowDownIcon}
              w={10}
              h={10}
              color="gray.700"
              cursor="pointer"
              onClick={scrollToAboutUs} // Scroll to About Us on click
              _hover={{ color: "gray.900", transition: "all 0.2s ease-in-out" }}
            />
          </VStack>
          
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box
        ref={aboutUsRef} // This is the ref for the About Us section
        id="about-us"
        width="70%"
        minHeight="20vh" // White background
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={4}
        py={8}
        opacity={isAboutUsVisible ? 1 : 0}
        transition="opacity 1s ease-in-out"
        visibility={isAboutUsVisible ? 'visible' : 'hidden'}
        mt={8} // Negative margin to bring the About Us section closer to the Hero section
        position="relative"
        bgPosition="center center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pb={-8} // Adjust padding as needed
      >
        <Heading as="h2" fontSize="3xl" fontWeight="500" color="gray.800">
          Our Philosophy
        </Heading>
        <VStack spacing={0} mt={4} textAlign="center">
          <Heading as="h3" fontSize="xl" fontWeight="400" color="gray.600">
            From concerts and sports, to professional conferences, events are a treasure trove of real world data. 
            <br /> <br />
            Our cutting edge technology helps you unlock that value while engaging your attendees. You focus on the event, we'll take care of the rest.
          </Heading>
        </VStack>
      </Box>

      

      {/* Wavy Decorative Element at the Bottom (Image as Background) */}
      <Box
        position="relative"
        bottom="0"
        left="0"
        width="100%"
        // height="480px"
        minHeight="50vh"
        backgroundImage="url('/wave-background.png')" // Add your image path here
        backgroundPosition="center bottom"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        zIndex={0}
        mt={-8}
      />

      {/* Get in Touch Form (Scroll Destination) */}
      <Box
        ref={formRef} // This is the ref we scroll to
        id="get-in-touch"
        width="100%"
        minHeight="70vh"
        bg="#00ACF2" // Light neutral background
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={4}
        py={-8}
      >
        {/* Get In Touch Form */}
        <GetInTouchForm />
      </Box>
      {/* Careers Section */}
      <Box
        ref={careersRef} // This is the ref for the careers section
        id="careers"
        width="100%"
        minHeight="30vh"
        bg="#f7f7f7" // Light gray background
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={4}
        py={-8}
        mt={-8} // Negative margin to bring the careers section closer to the contact form
        mb={-4}
      >
        <br />
        <Heading as="h2" fontSize="3xl" fontWeight="500" color="gray.800">
          Careers
        </Heading>
        <VStack spacing={4} mt={4} textAlign="center"> {/* Center-align the text */}
          <Heading as="h3" fontSize="xl" fontWeight="400" color="gray.600">
            We're looking for talented and passionate people to join our team
          </Heading>
          <Heading as="h3" fontSize="l" fontWeight="400" color="gray.600">
            If you're interested, please send your resume to hello@prometheuslabs.dev
          </Heading>
          <Button
            mt={3}
            colorScheme="blue"
            onClick={() => {
              // Handle action when clicked
              window.location.href = "/careers"; // Adjust to actual careers page
            }}
          >
            View Open Positions
          </Button>
        </VStack>
        {/* Copyright Section */}
      </Box>
      <br />
      <Box
        bottom="0"
        left="0"
        width="100%"
        bg="#121420"
        color="white"
        textAlign="center"
        py={0}
        fontSize="sm"
        zIndex={15}
        mb-={-8} // Negative margin to bring the footer closer to the careers section
      >
        &copy; {new Date().getFullYear()} Prometheus Labs Inc. All rights reserved.
      </Box>
      
    </Box>
  );
}
