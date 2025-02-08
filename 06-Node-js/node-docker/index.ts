import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "HEllO",
  });
});

app.listen(3001, () => {
  console.log("[ server ] ON [ http://localhost:3001 ]");
});
