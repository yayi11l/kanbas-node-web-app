import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCourses = async (req, res) => {
    try {
      const status = await dao.deleteCourses(req.params.courseId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findCourseById = async (req, res) => {
    try {
      const course = await dao.findCoursesById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateCourses = async (req, res) => {
    try {
      const { courseId } = req.params;
      const status = await dao.updateCourses(courseId, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.put("/api/courses/:courseId", updateCourses);
  app.delete("/api/courses/:courseId", deleteCourses);
}
