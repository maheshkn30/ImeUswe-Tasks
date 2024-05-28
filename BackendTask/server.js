const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Story = require("./Models/storyModel");

// Middleware
const app = express();
app.use(express.json()); //defines which format to u use

// Connect to Mongo Compass
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(function () {
    app.listen(3000, function () {
      console.log("Node Api running sucessfully ");
    });
    console.log("mongoose connected");
  })
  .catch(function (err) {
    console.log(err);
  });

// checking in the localhost:3000
app.get("/", function (req, res) {
  res.send("server running successfully");
});

// Sending Data to Databases (CREATE)
app.post("/story", async function (req, res) {
  try {
    const { title, content, createdBy, status } = req.body;
    if (!title || !content || !createdBy || !status) {
      alert("Missing data ");
    }
    const newStory = await Story.create({ title, content, createdBy, status });
    res.status(200).json(newStory);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Updating story  by id (UPDATE)
app.put("/story/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const story = await Story.findByIdAndUpdate(id, req.body);
    // we can't find story in database
    if (!story) {
      return res.status(404).json({ message: "cannot find story by id" });
    } else {
      res.status(200).json(story);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
//

// Delete a story (DELETE)
app.delete("/story/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const story = await Story.findByIdAndDelete(id);
    // if NO story in database
    if (!story) {
      return res.status(404).json({ message: "cannot find story by id" });
    } else {
      res.status(200).json(story);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get all stories (READ)
app.get("/story", async function (req, res) {
  try {
    const story = await Story.find();
    res.status(200).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get story by id (READ BY ID)
app.get("/story/:id", async function (req, res) {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
