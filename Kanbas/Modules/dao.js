import courseModel from "../Courses/model.js"; 
import moduleModel from "./model.js"; 
import mongoose from "mongoose";

export const createModule = async (courseId, moduleData) => {
  const objectId = new mongoose.Types.ObjectId(courseId);

  // First, find the course by its ID
  const course = await courseModel.findById(objectId);
  if (!course) {
    throw new Error("Course not found");
  }

  // Add the course number to the new module
  const newModule = {
    ...moduleData,
    course: course.number,
  };

  return moduleModel.create(newModule);
}; 

export const findModulesByCourseId = async (courseId) => {
  const objectId = new mongoose.Types.ObjectId(courseId);

  // First, find the course by its ID
  const course = await courseModel.findById(objectId);
  if (!course) {
    throw new Error("Course not found");
  }

  // Use the course number to find the associated modules
  return moduleModel.find({ course: course.number });
};

export const updateModule = async (moduleId, moduleData) => {
  const objectId = new mongoose.Types.ObjectId(moduleId);

  return moduleModel.updateOne({ _id: objectId }, { $set: moduleData });
};

export const deleteModule = (moduleId) => {
  const objectId = new mongoose.Types.ObjectId(moduleId);
  return moduleModel.deleteOne({ _id: objectId });
};