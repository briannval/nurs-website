"use server";

import { CAT_API_URL, DOG_API_URL, QUOTE_API_URL } from "@/urls/urls";

export const fetchQuote = async (page: number) => {
  const res = await fetch(
    `${QUOTE_API_URL}/quotes?page=${page}&limit=9&maxLength=50`
  );
  const data = await res.json();
  return data;
};

export const fetchAuthor = async (slug: string) => {
  const res = await fetch(`$(QUOTE_API_URL)/authors/slug/${slug}`);
  const data = await res.json();
  return data;
};

export const fetchDog = async () => {
  const res = await fetch(`${DOG_API_URL}/breeds/image/random`);

  const data = await res.json();

  return data;
};

export const fetchCat = async () => {
  const res = await fetch(`${CAT_API_URL}/v1/images/search`);

  const data = await res.json();

  return data;
};
