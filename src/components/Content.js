import React from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  Divider
} from "@chakra-ui/react";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Educations from "../pages/Educations";
import Certificates from "../pages/Certificates";
import Experiences from "../pages/Experiences";
import About from "../pages/About";

const Content = () => {
  const montserratFont = "Montserrat, sans-serif";

  return (
    <Box>
      <Container maxW="container.xl" py="12">
        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <Skills />
          </Text>
        </VStack>
        <Divider my="8" />

        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <Projects />
          </Text>
        </VStack>
        <Divider my="8" />

        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <Educations />
          </Text>
        </VStack>
        <Divider my="8" />

        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <Certificates />
          </Text>
        </VStack>
        <Divider my="8" />

        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <Experiences />
          </Text>
        </VStack>
        <Divider my="8" />

        <VStack spacing="4">
          <Text mt="4" fontSize="xl" fontFamily={montserratFont}>
            <About />
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Content;
