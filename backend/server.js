import app from "./src/app.js";

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
