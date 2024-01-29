"use server";

import { QUOTE_API_URL } from "@/urls/urls";

export const fetchQuote = async (page: number) => {
  const res = await fetch(`${QUOTE_API_URL}/quotes?page=${page}&limit=4`);

  const data = await res.json();

  return data;
};
