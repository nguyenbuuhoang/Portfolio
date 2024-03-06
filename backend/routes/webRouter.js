import express from "express";
import WebsiteData from "../data/WebsiteData.js";
import expressAsyncHandler from "express-async-handler";
import Webs from "../models/webModel.js";

const websRouter = express.Router();

websRouter.get(
  "/send",
  expressAsyncHandler(async (req, res) => {
      const createWebsites = await Webs.insertMany(WebsiteData.websites);
      res.send({ createWebsites });
  })
);
websRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
      const websites = await Webs.find({});
      res.send(websites);
  })
);

websRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const website = await Webs.findById(req.params.id);
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
