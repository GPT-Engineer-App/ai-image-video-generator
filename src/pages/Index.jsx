import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Textarea, VStack, Image, useToast } from "@chakra-ui/react";
import { FaImage, FaVideo, FaRegFileVideo } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateImage = () => {
    toast({
      title: "Image Generated",
      description: "Your image has been generated based on the text prompt.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleGenerateVideo = () => {
    toast({
      title: "Video Generated",
      description: "Your video has been generated based on the text prompt.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleGenerateAudio = () => {
    toast({
      title: "Audio Generated",
      description: "Your audio has been generated based on the text prompt.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          AI Media Generator
        </Heading>
        <Text>Enter a text prompt to generate media:</Text>
        <Textarea placeholder="Type your prompt here..." value={inputText} onChange={handleInputChange} />
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaImage />} colorScheme="blue" onClick={handleGenerateImage}>
            Generate Image
          </Button>
          <Button leftIcon={<FaVideo />} colorScheme="purple" onClick={handleGenerateVideo}>
            Generate Video
          </Button>
          <Button leftIcon={<FaRegFileVideo />} colorScheme="green" onClick={handleGenerateAudio}>
            Generate Audio
          </Button>
        </Stack>
        <Box>
          <Image src="https://images.unsplash.com/photo-1695426093310-b7255c8797cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydHxlbnwwfHx8fDE3MTM2MzAzOTF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
