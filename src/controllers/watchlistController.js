import { prisma } from "../config/db.js";

const getWatchlistController = async (req, res) => {
  try {
    const { id } = req.user;

    const watchlistItems = await prisma.watchListItem.findMany({
      where: { userId: id },
      include: {
        movie: true,
      },
    });
    res.json({ status: "success", data: { watchlistItems } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addToWatchlistController = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const movieExistsInWatchlist = await prisma.watchListItem.findUnique({
    where: {
      userId_movieId: {
        userId: req.user.id,
        movieId: movieId,
      },
    },
  });

  if (movieExistsInWatchlist) {
    return res.status(400).json({ message: "Movie already in the watchlist" });
  }

  const watchlistItem = await prisma.watchListItem.create({
    data: {
      userId: req.user.id,
      movieId,
      status: status || "Plan to Watch",
      rating,
      notes,
    },
  });

  res.status(201).json({
    status: "success",
    data: { watchlistItem },
  });
};

const updateWatchlistItemController = async (req, res) => {
  const { id } = req.params;
  const { status, rating, notes } = req.body;

  const watchlistItem = await prisma.watchListItem.findUnique({
    where: { id: id },
  });

  if (!watchlistItem) {
    return res.status(404).json({ message: "Watchlist item not found" });
  }

  if (watchlistItem.userId !== req.user.id) {
    return res
      .status(403)
      .json({ message: "You are not authorized to update this item" });
  }

  const updatedData = {};

  if (status !== undefined) updatedData.status = status.toUpperCase();
  if (rating !== undefined) updatedData.rating = rating;
  if (notes !== undefined) updatedData.notes = notes;

  const updateWatchlistItem = await prisma.watchListItem.update({
    where: { id: id },
    data: updatedData,
  });

  res.status(200).json({
    status: "success",
    data: { watchlistItem: updateWatchlistItem },
  });
};

const removeMovieFromWatchlistController = async (req, res) => {
  const { id } = req.params;

  const watchlistItem = await prisma.watchListItem.findUnique({
    where: { id: id },
  });

  if (!watchlistItem) {
    return res.status(404).json({ message: "Watchlist item not found" });
  }

  if (watchlistItem.userId !== req.user.id) {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this item" });
  }

  await prisma.watchListItem.delete({
    where: { id: id },
  });
  res
    .status(200)
    .json({ message: "Movie removed from watchlist successfully" });
};

export {
  getWatchlistController,
  addToWatchlistController,
  updateWatchlistItemController,
  removeMovieFromWatchlistController,
};
