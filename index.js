// const express = require("express");
import express from "express";

const app = express();

app.use(express.json());

app.get("/get-user", (req, res) => {
  //   console.log("From GET Request");
  res.send("From GET request");
});

app.post("/post-user", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(5050, () => {
  console.log("Server is running http://localhost:5050");
});