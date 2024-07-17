import Module from "./Module.js";
import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

function Lab5(app) {
  const hello = (req, res) => {
    res.send("Welcome to lab 5!");
  };
  app.get("/a5", hello);
  app.get("/a5/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${ name}`) 
  })
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  Module(app);
  WorkingWithArrays(app);
}

export default Lab5;