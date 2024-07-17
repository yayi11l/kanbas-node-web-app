function HelloRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to Web dev!");
  });
  
  app.get("/home", (req, res) => {
    res.send("Welcome home!");
  });
}

export default HelloRoutes;