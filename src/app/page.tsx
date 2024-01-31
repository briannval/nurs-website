"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Image,
  StackDivider,
  chakra,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

import FeatureCard from "@/components/FeatureCard";

import { BsPerson } from "react-icons/bs";

import { FiServer } from "react-icons/fi";

import { GoLocation } from "react-icons/go";

import {
  IoAccessibility,
  IoChatbubbleSharp,
  IoCloudSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

interface StatCardProps {
  title: string;
  stat: string;
  icon: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function StatsCard(props: StatCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Home() {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text as={"span"} color={"orange.400"}>
                Excitement{" "}
              </Text>
              waits for you below...
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "5xl", md: "8xl" }}
            lineHeight={"110%"}
          >
            Are you
            <Text as={"span"} color={"orange.400"}>
              {" "}
              stressed?
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "xs", sm: "md", md: "xl" }}
            as="b"
          >
            Don't worry, we're here to help you out!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"orange"}
              bg={"orange.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "white.500",
              }}
            >
              Get Started
            </Button>
            <Button variant={"link"} mt={4} colorScheme={"black"} size={"sm"}>
              Leave a review
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"orange.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("orange.50", "orange.900")}
              p={1}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              BETA
            </Text>
            <Heading>Try out some activities!</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Here are various benefits of being here:
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={IoAccessibility} color={"orange.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("orange.100", "orange.900")}
                text={"Stress Reduction and Relief"}
              />
              <Feature
                icon={
                  <Icon
                    as={IoChatbubbleSharp}
                    color={"orange.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("orange.100", "orange.900")}
                text={"Daily Affirmation"}
              />
              <Feature
                icon={
                  <Icon as={IoCloudSharp} color={"orange.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("orange.100", "orange.900")}
                text={"Review and community support"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>

        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          mt={20}
          fontWeight={"bold"}
        >
          Try them now!
        </chakra.h1>
        <SimpleGrid my={10} spacing={8} columns={{ base: 1, md: 3 }}>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </SimpleGrid>
        <Box
          maxW="7xl"
          mt={10}
          mx={"auto"}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
          >
            Our Features
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"Games"}
              stat={"3"}
              icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Activites"}
              stat={"3"}
              icon={<FiServer size={"3em"} />}
            />
            <StatsCard
              title={"Others"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
        <VStack>
          <Text mt={16} fontWeight={"bold"} textAlign={"center"}>
            Created by Brian Adhitya 2024
          </Text>
          <Link
            textAlign={"center"}
            fontWeight={"bold"}
            href="mailto:brianvalentinoadhitya@gmail.com"
          >
            brianvalentinoadhitya@gmail.com
          </Link>
          <Link
            textAlign={"center"}
            fontWeight={"bold"}
            href="https://brianadhitya.vercel.app/"
          >
            https://brianadhitya.vercel.app/
          </Link>
        </VStack>
      </Container>
    </>
  );
}
