import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Hello ${process.env.PROJECT_NAME}`);
});