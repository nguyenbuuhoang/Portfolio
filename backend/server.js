import express from "express";
import "./config/mongoConnect.js"
import websRouter from "./routes/webRouter.js";
const app = express();
/*  App Route */
app.use("/api/apps", websRouter);
/* Middleware */
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});
