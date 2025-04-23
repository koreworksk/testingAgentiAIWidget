const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
