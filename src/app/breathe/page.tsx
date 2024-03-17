"use client";

import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  CircularProgress,
  Button,
  Flex,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { MdCheck, MdClose, MdWest } from "react-icons/md";

interface reducerState {
  breathe: number;
  begin: boolean;
  incrementer: number;
  in: boolean;
}

type reducerAction =
  | { type: "UPDATE" }
  | { type: "BEGIN" }
  | { type: "REVERSE"; payload: number }
  | { type: "SET_IN"; payload: boolean }
  | { type: "END" };

function reducer(state: reducerState, action: reducerAction) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, breathe: state.breathe + state.incrementer };
    case "BEGIN":
      return { ...state, begin: true };
    case "REVERSE":
      return { ...state, incrementer: action.payload };
    case "SET_IN":
      return { ...state, in: action.payload };
    case "END":
      return {
        breathe: 0,
        begin: false,
        incrementer: 1,
        in: true,
      };
    default:
      return state;
  }
}

export default function Page() {
  const [homeButton, setHomeButton] = useState<boolean>(false);
  const initialState = { breathe: 0, begin: false, incrementer: 1, in: true };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleReverse = () => {
    setTimeout(() => {
      if (state.breathe === 100) {
        dispatch({ type: "REVERSE", payload: -1 });
      } else if (state.breathe === 0) {
        dispatch({ type: "REVERSE", payload: 1 });
      }
    }, 1000);
  };

  useEffect(() => {
    if (state.begin) {
      const inRange =
        (state.breathe >= 0 && state.breathe <= 25) ||
        (state.breathe >= 50 && state.breathe <= 75);

      const id = setInterval(() => dispatch({ type: "UPDATE" }), 90);

      if (state.incrementer === 1) {
        dispatch({ type: "SET_IN", payload: inRange });
      } else {
        dispatch({ type: "SET_IN", payload: !inRange });
      }

      handleReverse();

      return () => clearInterval(id);
    }
  }, [state.begin, state.breathe]);

  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 4, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "5xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Relax <br></br>and{" "}
          <Text as={"span"} color="blue.400">
            Breathe.
          </Text>
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <CircularProgress
            w={"fit-content"}
            size={"400px"}
            value={state.breathe}
            color="blue.400"
          >
            <CircularProgressLabel fontSize={"medium"} as="b">
              {state.in ? "Breathe in..." : "Breathe out..."}
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} maxWidth={"100%"}>
          {state.begin ? (
            <Button
              rightIcon={<MdClose />}
              onClick={() => {
                dispatch({ type: "END" });
              }}
              colorScheme="red"
              variant="outline"
              width={"30%"}
            >
              End
            </Button>
          ) : (
            <Button
              leftIcon={<MdCheck />}
              onClick={() => {
                dispatch({ type: "BEGIN" });
              }}
              colorScheme="blue"
              variant="outline"
              width={"30%"}
            >
              Start
            </Button>
          )}
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} mt={-10}>
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
