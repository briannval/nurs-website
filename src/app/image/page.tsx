"use client";

import { fetchCat, fetchDog } from "@/actions/action";
import { DEFAULT_CAT_URL, DEFAULT_DOG_URL } from "@/urls/urls";
import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCat, FaDog } from "react-icons/fa";
import { MdWest } from "react-icons/md";

export default function Page() {
  const [homeButton, setHomeButton] = useState<boolean>(false);
  const [dog, setDog] = useState(DEFAULT_DOG_URL);
  const [loadingDog, setLoadingDog] = useState<boolean>(false);
  const [cat, setCat] = useState(DEFAULT_CAT_URL);
  const [loadingCat, setLoadingCat] = useState<boolean>(false);

  const getDog = () => {
    setLoadingDog(true);
    fetchDog().then((res) => {
      setDog(res.message);
      setLoadingDog(false);
    });
  };

  const getCat = () => {
    setLoadingCat(true);
    fetchCat().then((res) => {
      setCat(res[0].url);
      console.log(cat);
      setLoadingCat(false);
    });
  };

  return (
    <Container maxW={"3xl"} mb={20}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 10 }} py={4}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "5xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Cute{" "}
          <Text as={"span"} color={"teal"}>
            Animals.
          </Text>
        </Heading>
        {loadingDog ? (
          <Skeleton width="735px" height="600px" />
        ) : (
          <Image src={dog} width="1000px" height="600px" />
        )}
        <Flex alignItems={"center"} justifyContent={"center"} maxWidth={"100%"}>
          <Button
            leftIcon={<FaDog />}
            isLoading={loadingDog}
            colorScheme="teal"
            onClick={() => getDog()}
            width={"30%"}
          >
            Generate random dog
          </Button>
        </Flex>
        {loadingCat ? (
          <Skeleton width="735px" height="600px" />
        ) : (
          <Image src={cat} width="1000px" height="600px" />
        )}
        <Flex alignItems={"center"} justifyContent={"center"} maxWidth={"100%"}>
          <Button
            leftIcon={<FaCat />}
            isLoading={loadingCat}
            colorScheme="teal"
            onClick={() => getCat()}
            width={"30%"}
          >
            Generate random cat
          </Button>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={"100%"}
          mt={"-4"}
        >
          <Button
            isLoading={homeButton}
            leftIcon={<MdWest />}
            colorScheme="black"
            variant="outline"
            width={"30%"}
            onClick={() => {
              setHomeButton(true);
              window.location.href = "/";
            }}
          >
            Back to home
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
}
