import dotenv from "dotenv";
if (process.env.NODE_ENV == "test") {
  dotenv.config({ path: ".env.testing" });
} else {
  dotenv.config();
}
import express from "express";

// Create an express app.
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Home, Sweet Home." });
});

const port = process.env.APP_PORT || 3000;

// Boot the server.
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
