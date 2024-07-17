// const express = require("express"); set the type to module, so we use import
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from './Lab5/index.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentsRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";

const app = express();
app.use(cors()); // make sure cors is used right after creating the app
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
HelloRoutes(app);
Lab5(app);

app.listen(process.env.PORT || 4000);