const mongoose = require("mongoose");

// creating StorySchema and defining what Values we want
const storySchema = mongoose.Schema(
  {
    title: {
      type: String, // defining datatype
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
      default: 0,
    },
    comments: {
      type: String,
      required: false,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
    createdBy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["published", "draft"], //enumeration data type consists of a set
      required: true, // of named values called elements or members.
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model("Story", storySchema);
module.exports = Story;
