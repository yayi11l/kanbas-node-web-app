const module = {
  _id: "M101",
  name: "Introduction to Rocket Propulsion",
  description: "Basic principles of rocket propulsion and rocket engines.",
  course: "RS101",
}

export default function Module(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  })
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  })
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
}