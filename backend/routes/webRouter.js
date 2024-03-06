import express from "express";
import WebsiteData from "../data/WebsiteData.js";
import Websites from "../models/webModel.js";
import expressAsyncHandler from "express-async-handler";

const websRouter = express.Router();

websRouter.get(
  "/send",
  expressAsyncHandler(async (req, res) => {
    try {
      const createWebsites = await Websites.insertMany(WebsiteData.websites);
      res.send({ createWebsites });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  })
);

websRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const website = await Websites.findById(req.params.id);
      if (website) {
        res.send(website);
      } else {
        res.status(404).send({ message: "Website not found" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  })
);

export default websRouter;
