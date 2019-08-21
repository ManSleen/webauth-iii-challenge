const router = require("express").Router();

// Import data model
const Positions = require("./positions-model.js");
const restricted = require("../auth/restricted-middleware.js");

// Write CRUD operations
router.get("/", (req, res) => {
  Positions.find()
    .then(positions => {
      res.json(positions);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  let position = req.body;
  Positions.add(position)
    .then(position => {
      res.status(201).json(position);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add position" });
    });
});

// Export router
module.exports = router;
