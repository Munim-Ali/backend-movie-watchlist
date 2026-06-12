import express from "express";
import {
  addToWatchlistController,
  getWatchlistController,
  removeMovieFromWatchlistController,
  updateWatchlistItemController,
} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getWatchlistController);

router.post("/", addToWatchlistController);

router.delete("/:id", removeMovieFromWatchlistController);

router.put("/:id", updateWatchlistItemController);

export default router;
