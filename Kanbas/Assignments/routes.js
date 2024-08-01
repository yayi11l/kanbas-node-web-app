import * as dao from "./dao.js";

export default function AssignmentsRoutes(app) {
  const createAssignment = async (req, res) => {
    try {
      const assignment = await dao.createAssignment(req.params.cid, req.body);
      res.json(assignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const findAssignmentByCourseId = async (req, res) => {
    try {
      const assignment = await dao.findAssignmentById(req.params.cid);
      if (!assignment) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(assignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const updateAssignment = async (req, res) => {
    try {
      const { aid } = req.params;
      const status = await dao.updateAssignment(aid, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const deleteAssignment = async (req, res) => {
    try {
      const status = await dao.deleteAssignment(req.params.aid);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // app.get("/api/courses/:cid/assignments", (req, res) => {
  //   const { cid } = req.params;
  //   const assignments = db.assignments.filter((a) => a.course === cid);
  //   res.json(assignments);
  // })

  // app.post("/api/courses/:cid/assignments", (req, res) => {
  //   const { cid } = req.params;
  //   const newAssignment = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   }
  //   db.assignments.push(newAssignment);
  //   res.send(newAssignment)
  // })

  // app.put("/api/assignments/:aid", (req, res) => {
  //   const { aid } = req.params;
  //   const assignmentIndex = db.assignments.findIndex(
  //     (a) => a._id === aid
  //   );
  //   db.assignments[assignmentIndex] = {
  //     ...db.assignments[assignmentIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // })

  // app.delete("/api/assignments/:aid", (req, res) => {
  //   const { aid } = req.params;
  //   db.assignments = db.assignments.filter((a) => a._id !== aid);
  //   res.sendStatus(200);
  // });

  app.get("/api/courses/:cid/assignments", findAssignmentByCourseId)
  app.post("/api/courses/:cid/assignments", createAssignment)
  app.put("/api/assignments/:aid", updateAssignment)
  app.delete("/api/assignments/:aid", deleteAssignment)
}