
const express = require("express");

const dB = require("./db");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).json("It's workinggggggggggggggggg!!!")
// })getShoppingList



/////stretch
router.get("/", (req, res) => {
    dB.getRecipes()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({ error: "The recipes information could not be retrieved." + err })
        })
})

router.get("/:id/shoppingList", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.getShoppingList(id)
        .then((shoppingList) => {

            if (shoppingList.length === 0) {
                res.status(404).json({ message: "The shoppingList with the specified ID does not exist." })
            }
            res.status(200).json({ shoppingListInfo: shoppingList, url: url, operation: "GET" })
        })
        .catch((err) => {
            res.status(500).json({ error: "The shoppingList information could not be retrieved." + err })
        })
})

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.getInstructions(id)
        .then((getInstructions) => {

            if (getInstructions.length === 0) {
                res.status(404).json({ message: "The getInstructions with the specified ID does not exist." })
            }
            res.status(200).json({ getInstructionsInfo: getInstructions, url: url, operation: "GET" })
        })
        .catch((err) => {
            res.status(500).json({ error: "The getInstructions information could not be retrieved." + err })
        })
})


module.exports = router;
