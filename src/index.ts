import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5mb" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
