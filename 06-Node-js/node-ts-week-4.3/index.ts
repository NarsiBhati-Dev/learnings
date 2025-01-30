import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (_req, res) => {
  res.json({
    message: "Hello",
  });
});

app.get("/todo", (_req, res) => {
  res.status(200).json({
    title: "go gym",
    description: "go to gym at 6am",
    status: false,
  });
});

app.listen(3000, () => {
  console.log("server serving on http://localhost:3000");
});
