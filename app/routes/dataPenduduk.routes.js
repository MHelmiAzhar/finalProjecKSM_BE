const { route } = require("express/lib/application");

module.exports = (app) => {
  const dataPenduduk = require("../models/controllers/dataPenduduk.controller.js");
  const router = require("express").Router();

  router.get("/", dataPenduduk.findAll);
  router.post("/", dataPenduduk.create);
  router.get("/:id", dataPenduduk.findOne);
  router.put("/:id", dataPenduduk.update);
  router.delete("/:id", dataPenduduk.delete);

  app.use("/api/dataPenduduk", router);
};
