// const express = require("express"); set the type to module, so we use import
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";
import HelloRoutes from "./hello.js";
import Lab5 from './Lab5/index.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentsRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import session from "express-session";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-suf";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
  credentials: true, //support coockies
  origin: process.env.NETLIFY_URL || "http://localhost:3000", //restrict cross origin resource
}
)); // make sure cors is used right after creating the app, 
const sessionOptions = { // configure server sessions after cors
  secret: process.env.SESSION_SECRET || "kanbas", // default session options
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") { // in production
  sessionOptions.proxy = true; // turn on proxy support
  sessionOptions.cookie = { // configure cookies for remote server
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

app.use(
  session(sessionOptions)
);
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
HelloRoutes(app);
Lab5(app);

app.listen(process.env.PORT || 4000);