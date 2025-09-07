//

import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.info(`Server is running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

//TODO: I want to READ all the data from the staff table
// https://https://guest-book-l67k.onrender.com/guestbook --> endpoint, params
app.get("/guestbook", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM guestbook;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//

//TODO: POST new data to the database
app.post("/guestbook/add-message", (req, res) => {
  // We need an element to store the data coming from the client
  const newMessage = req.body; // body is the 'container' for what is coming from the client
  // Then, a database query
  // In our sql queries we can have placeholder params that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO guestbook (name, relationship, preference, message) VALUES ($1, $2, $3, $4)`,
    [
      newMessage.formValues.name,
      newMessage.formValues.relationship,
      newMessage.formValues.preference,
      newMessage.formValues.message,
    ]
  );
  res.json("Data sent", query);
});
