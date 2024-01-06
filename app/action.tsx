'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=${MAX_LIMIT}&order=aired_on`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
