import assignmentModel from "./model.js";
import courseModel from "../Courses/model.js"; 
import mongoose from "mongoose";

export const createAssignment = async (courseId, assignmentData) => {
  delete assignmentData._id
  const objectId = new mongoose.Types.ObjectId(courseId);

  // First, find the course by its ID
  const course = await courseModel.findById(objectId);
  if (!course) {
    throw new Error("Course not found");
  }

  // Add the course number to the new module
  const newAssignment = {
    ...assignmentData,
    course: course.number,
  };

  return assignmentModel.create(newAssignment);
} 
// export const findAllCourses = () => courseModel.find();

export const findAssignmentById = async (courseId) => {
  const objectId = new mongoose.Types.ObjectId(courseId);

  // First, find the course by its ID
  const course = await courseModel.findById(objectId);
  if (!course) {
    throw new Error("Course not found");
  }

  // Use the course number to find the associated modules
  return assignmentModel.find({ course: course.number });
};

export const updateAssignment = async (aid, assignment) => {
  const objectId = new mongoose.Types.ObjectId(aid);
  return assignmentModel.updateOne({ _id: objectId }, { $set: assignment })
} ;
export const deleteAssignment = (aid) => {
  const objectId = new mongoose.Types.ObjectId(aid);
  return assignmentModel.deleteOne({ _id: objectId });
};