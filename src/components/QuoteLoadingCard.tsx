"use client";

import {
  Box,
  useColorModeValue,
  Stack,
  Flex,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
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

export default function QuoteLoadingCard() {
  return (
    <Quote>
      <QuoteContent>
        <Skeleton width={20} height={4} mt={2}></Skeleton>
        {[...Array(3)].map((el) => {
          return <Skeleton key={el} width={60} height={4}></Skeleton>;
        })}
      </QuoteContent>

      <Flex align={"center"} mt={8} direction={"column"}>
        <Stack spacing={-1} align={"center"}>
          <SkeletonCircle size="10" />
        </Stack>
      </Flex>
    </Quote>
  );
}
