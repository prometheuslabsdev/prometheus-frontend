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
    const { name, message } = values;

    // Construct the mailto URL with the form inputs
    const mailtoLink = `mailto:hello@prometheuslabs.dev?subject=Get in Touch - ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    console.log(mailtoLink);

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  }

  return (
    <Box
      id="get-in-touch"
      width="100%"
      minHeight="70vh"
      bg="transparent"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={4}
      pb={-8}
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
            <FormLabel htmlFor="name" color="black">Name</FormLabel>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 1, message: "Minimum length should be 1" },
              })}
              bg="gray.100"
              color="black" // Text color when typing
              _placeholder={{ color: "gray.500" }} // Placeholder color
            />
          </FormControl>

          {/* Message Input */}
          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message" color="black">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 1,
                  message: "Message must be at least 1 character",
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
