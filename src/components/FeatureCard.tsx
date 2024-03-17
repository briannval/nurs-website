"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { BeatLoader } from "react-spinners";

interface ComponentProps {
  icon: IconType;
  name: string;
  ongoing?: boolean;
  link: string;
}

export default function FeatureCard({
  icon,
  name,
  ongoing,
  link,
}: ComponentProps) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Center py={6}>
      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        border={"1px solid"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("orange.50", "orange.900")}
            p={2}
            px={3}
            color={"orange.500"}
            rounded={"full"}
          >
            New
          </Text>
          <Text fontSize={"3xl"} fontWeight={600}>
            {name}
          </Text>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Icon as={icon} w={20} h={20}></Icon>
          </Flex>
          {ongoing ? (
            <Button
              isLoading
              mt={10}
              w={"full"}
              borderColor={"black"}
              color={"black"}
              variant={"outline"}
              rounded={"xl"}
              spinner={<BeatLoader size={8} color="black" />}
            >
              Click me
            </Button>
          ) : (
            <Button
              onClick={() => {
                setLoading(true);
                window.location.href = link;
              }}
              isLoading={loading}
              mt={10}
              w={"full"}
              borderColor={"black"}
              color={"black"}
              variant={"outline"}
              rounded={"xl"}
              _hover={{
                bg: "orange.500",
                color: "white",
              }}
            >
              Try it now !
            </Button>
          )}
        </Box>
      </Box>
    </Center>
  );
}
