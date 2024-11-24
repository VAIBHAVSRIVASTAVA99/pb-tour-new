require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { userModel } = require("./model");

app.use(express.json());

app.post("/users/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    await userModel.create({
      email,
      password,
    });
    console.log(`new user created with email: ${email}`);
  } catch (e) {
    console.log(e);
    return;
  }
  res.json({
    message: "new user registered",
  });
});
async function main() {
  console.log("connecting to mongo url");
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`port running on ${port}`);
  });
}
main();
