import express from "npm:express@latest";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Dinosaur API!");
  });

app.listen(3000);
