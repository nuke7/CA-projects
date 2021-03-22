const express = require("express");
const cors = require("cors");

const app = express();
const port = 9000;

const router = require("./controllers/Controller");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.use("/mails", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
