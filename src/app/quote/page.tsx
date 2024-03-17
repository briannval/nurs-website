"use client";

import {
  SimpleGrid,
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import QuoteCard from "@/components/QuoteCard";
import { defaultQuoteData } from "@/data/_data";
import { useEffect, useState } from "react";
import QuoteLoadingCard from "@/components/QuoteLoadingCard";
import { fetchQuote } from "@/actions/action";
import { useInView } from "react-intersection-observer";
import { MdWest } from "react-icons/md";

interface APIProps {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export default function Page() {
  const [homeButton, setHomeButton] = useState<boolean>(false);
  const [data, setData] = useState<APIProps[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchQuote(page).then((res) => {
        setData([...data, ...res.results]);
        setPage(page + 1);
        console.log(data);
      });
    }
  }, [inView, data, page]);

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
            {data.map((data: APIProps) => {
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
            {[...Array(3)].map((el) => {
              return (
                <div key={el} ref={ref}>
                  <QuoteLoadingCard />
                </div>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
