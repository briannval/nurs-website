"use client";

import {
  Box,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";
import Avatar from "boring-avatars";

interface Props {
  children: React.ReactNode;
}

interface QuoteCardProps {
  tags: string[];
  quote: string;
  name: string;
  date: string;
}

const Quote = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const QuoteContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      h={48}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const QuoteHeading = (props: Props) => {
  const { children } = props;

  return (
    <Badge variant="outline" colorScheme="orange">
      {children}
    </Badge>
  );
};

const QuoteText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const QuoteAvatar = ({ name, date }: { name: string; date: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Stack spacing={-1} align={"center"}>
        <Avatar
          size={40}
          name="Maria Mitchell"
          variant="marble"
          colors={["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "e76f51"]}
        />
        <Text fontWeight={600} mt={2}>
          {name}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {date}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function QuoteCard({ tags, quote, name, date }: QuoteCardProps) {
  return (
    <Quote>
      <QuoteContent>
        <QuoteHeading>{tags[0]}</QuoteHeading>
        <QuoteText>{quote}</QuoteText>
      </QuoteContent>
      <QuoteAvatar name={name} date={date}></QuoteAvatar>
    </Quote>
  );
}
