import mongoose from "mongoose";

const OnlineEntryOptionsSchema = new mongoose.Schema({
  textEntry: Boolean,
  websiteUrl: Boolean,
  mediaRecordings: Boolean,
  studentAnnotation: Boolean,
  fileUpload: Boolean
});

const assignmentSchema = new mongoose.Schema({
  title: String,
  course: String,
  description: String,
  points: Number,
  dueDate: Date,
  availableFrom: Date,
  availableUntil: Date,
  assignmentGroup: String,
  displayGradeAs: String,
  submissionType: String,
  onlineEntryOptions: { type: OnlineEntryOptionsSchema }
},
  { collection: "assignments" }
);

export default assignmentSchema;