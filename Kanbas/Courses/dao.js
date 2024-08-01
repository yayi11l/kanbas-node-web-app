import courseModel from "./model.js";
import mongoose from "mongoose";

export const createCourse = (course) => {
  delete course._id
  return courseModel.create(course);  
} 
export const findAllCourses = () => courseModel.find();

export const findCoursesById = (courseId) => {
  const objectId = new mongoose.Types.ObjectId(courseId);
  return courseModel.findById(objectId);
};

export const updateCourses = (courseId, course) => {
  const objectId = new mongoose.Types.ObjectId(courseId);
  return courseModel.updateOne({ _id: objectId }, { $set: course })
} ;
export const deleteCourses = (courseId) => {
  const objectId = new mongoose.Types.ObjectId(courseId);
  return courseModel.deleteOne({ _id: objectId });
};