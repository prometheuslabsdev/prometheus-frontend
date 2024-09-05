import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function GetInTouchForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values) {
    const { name, email, message } = values;

    // Construct the mailto URL with the form inputs
    const mailtoLink = `mailto:prometheuslabs-dev@gmail.com?subject=Get in Touch&body=Name: ${encodeURIComponent(
      name,
    )}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
      message,
    )}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  }

  return (
    <Box
      id="get-in-touch"
      width="100%"
      minHeight="100vh"
      bg="transparent"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={4}
    >
      <Heading as="h2" size="xl" mb={8} color="gray.900">
        Get in Touch
      </Heading>

      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width="100%"
        maxW="600px"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="lg"
      >
        <VStack spacing={4}>
          {/* Name Input */}
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Minimum length should be 3" },
              })}
              bg="gray.100"
              color="black" // Text color when typing
              _placeholder={{ color: "gray.500" }} // Placeholder color
            />
          </FormControl>

          {/* Email Input */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              bg="gray.100"
              color="black" // Text color when typing
              _placeholder={{ color: "gray.500" }} // Placeholder color
            />
          </FormControl>

          {/* Message Input */}
          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              bg="gray.100"
              color="black" // Text color when typing
              _placeholder={{ color: "gray.500" }} // Placeholder color
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            size="lg"
            width="full"
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
