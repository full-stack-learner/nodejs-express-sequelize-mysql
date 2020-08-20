module.exports = app => {
  const tutorial_controller = require("../controllers/tutorial.controller.js");
  const router = require("express").Router();

  router.post("/", tutorial_controller.create)
      .get("/", tutorial_controller.findAll)
      .delete("/", tutorial_controller.deleteAll);

  router.get("/published", tutorial_controller.findAllPublished);

  router.get("/:id", tutorial_controller.findOne)
      .put("/:id", tutorial_controller.update)
      .delete("/:id", tutorial_controller.delete);

  app.use('/api/tutorials', router);
};
