"use client";

import {
  SimpleGrid,
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import QuoteCard from "@/components/QuoteCard";
import { defaultQuoteData } from "@/data/_data";

export default function Page() {
  return (
    <>
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
            Scroll. <br></br>Get{" "}
            <Text as={"span"} color={"orange.400"}>
              Inspired.
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Box bg={useColorModeValue("gray.100", "gray.200")}>
        <Container maxW={"5xl"} py={16} as={Stack} spacing={12}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
            {defaultQuoteData.map((data) => {
              return (
                <QuoteCard
                  tags={data.tags}
                  key={data._id}
                  quote={data.content}
                  name={data.author}
                  date={data.dateAdded}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
  Page;
}
