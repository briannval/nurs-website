"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Image,
  StackDivider,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import FeatureCard from "@/components/FeatureCard";

import {
  IoAccessibility,
  IoAccessibilityOutline,
  IoChatbubbleSharp,
  IoCloudSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { PiDog } from "react-icons/pi";
import { LuQuote } from "react-icons/lu";
import { QuestionIcon } from "@chakra-ui/icons";
import { BsQuestion, BsQuestionCircle } from "react-icons/bs";

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
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 14, md: 20 }}
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
          ></Stack>
        </Stack>
      </Container>
      <Container maxW={"5xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mb={20}>
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

            <Heading>Why?</Heading>
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
                "https://media.istockphoto.com/id/1269843303/vector/happy-family.jpg?s=612x612&w=0&k=20&c=Vf9U2tUH5gN_KI3utmR7hbzNyg9ugkVQFCRNJjGRV0U="
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid my={10} spacing={2} columns={{ base: 1, md: 2 }} mb={20}>
          <FeatureCard icon={PiDog} name="Cute Animals" link="/image" />
          <FeatureCard
            icon={IoAccessibilityOutline}
            name="Breathing Exercise"
            link="/breathe"
          />
          <FeatureCard icon={LuQuote} name="Quote Generator" link="/quote" />
          <FeatureCard
            icon={BsQuestionCircle}
            name="More to come..."
            link="/"
            ongoing={true}
          />
        </SimpleGrid>
        <Flex alignItems={"center"} justifyContent={"center"} mb={2}>
          <Text as={"b"}>Website created by Brian Adhitya</Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} mb={10}>
          <Text as={"i"}>NURS 180 - University of British Columbia</Text>
        </Flex>
      </Container>
    </>
  );
}
