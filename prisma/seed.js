// import { PrismaClient } from "@prisma/client";

import { prisma } from "../src/config/db.js";

const userId = "4febcc6c-9dfe-4960-81a2-0723c72dcdf7";

const movies = [
  {
    title: "Inception",
    overview:
      "A skilled thief enters people's dreams to steal secrets but is tasked with planting an idea instead.",
    releaseYear: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    rentume: 148,
    posterUrl: "https://example.com/posters/inception.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    rentume: 152,
    posterUrl: "https://example.com/posters/dark-knight.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview:
      "A team of astronauts travels through a wormhole in search of a new home for humanity.",
    releaseYear: 2014,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    rentume: 169,
    posterUrl: "https://example.com/posters/interstellar.jpg",
    createdBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men form a bond over decades while seeking redemption and hope.",
    releaseYear: 1994,
    genres: ["Drama"],
    rentume: 142,
    posterUrl: "https://example.com/posters/shawshank.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview:
      "A computer hacker discovers the reality he knows is a simulated world.",
    releaseYear: 1999,
    genres: ["Sci-Fi", "Action"],
    rentume: 136,
    posterUrl: "https://example.com/posters/matrix.jpg",
    createdBy: userId,
  },
  {
    title: "Gladiator",
    overview:
      "A betrayed Roman general seeks revenge against the emperor who murdered his family.",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    rentume: 155,
    posterUrl: "https://example.com/posters/gladiator.jpg",
    createdBy: userId,
  },
  {
    title: "Parasite",
    overview:
      "A poor family infiltrates the lives of a wealthy household with unexpected consequences.",
    releaseYear: 2019,
    genres: ["Thriller", "Drama"],
    rentume: 132,
    posterUrl: "https://example.com/posters/parasite.jpg",
    createdBy: userId,
  },
  {
    title: "Avengers: Endgame",
    overview:
      "The Avengers assemble for one final mission to reverse the damage caused by Thanos.",
    releaseYear: 2019,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rentume: 181,
    posterUrl: "https://example.com/posters/endgame.jpg",
    createdBy: userId,
  },
  {
    title: "Forrest Gump",
    overview:
      "The life journey of a kind-hearted man who witnesses and influences key moments in history.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    rentume: 142,
    posterUrl: "https://example.com/posters/forrest-gump.jpg",
    createdBy: userId,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview:
      "A young hobbit begins a perilous journey to destroy a powerful ring.",
    releaseYear: 2001,
    genres: ["Fantasy", "Adventure", "Action"],
    rentume: 178,
    posterUrl: "https://example.com/posters/lotr-fellowship.jpg",
    createdBy: userId,
  },
];

const main = async () => {
  console.log("Seeding movies started..");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });

    console.log(`Movie "${movie.title}" created.`);
  }

  console.log("seeding movies completed.");
};

main()
  .catch((error) => {
    console.error("Error seeding movies: ", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
