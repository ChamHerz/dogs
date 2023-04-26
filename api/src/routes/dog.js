var express = require("express");
var router = express.Router();
const { Dog } = require("../db");
const { Temperament } = require("../db.js");

router.post("/", async function (req, res) {
  var { name, height, weight, life_span, temperamentNames } = req.body;

  //console.log(req.body);

  const temperaments = await Temperament.findAll({
    where: {
      name: temperamentNames, // ids de los grupos relacionados
    },
  });

  //console.log(temperaments);

  if (!name || !height || !weight)
    return res.status(404).send("Falta enviar datos obligatorios.");
  try {
    let dog = await Dog.create(req.body);
    await dog.addTemperaments(temperaments);
    return res.status(201).json(dog);
  } catch {
    return res.status(404).send("Error en algunos de los datos provistos.");
  }
});

module.exports = router;
