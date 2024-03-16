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
} from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
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
        <Button
          isLoading={loadingDog}
          colorScheme="teal"
          onClick={() => getDog()}
        >
          Generate Random Dog
        </Button>
        {loadingCat ? (
          <Skeleton width="735px" height="600px" />
        ) : (
          <Image src={cat} width="1000px" height="600px" />
        )}
        <Button
          isLoading={loadingCat}
          colorScheme="teal"
          onClick={() => getCat()}
        >
          Generate Random Cat
        </Button>
        <Text as={"b"}>More to come soon!</Text>
      </Stack>
    </Container>
  );
}
