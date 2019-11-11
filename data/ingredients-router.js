
/////stretch
const express = require("express");

const dB = require("./db");

const router = express.Router();


router.get("/:id/recipes", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.getAllRecipesByIngredient(id)
        .then((getAllRecipesByIngredient) => {

            if (getAllRecipesByIngredient.length === 0) {
                res.status(404).json({ message: "The getAllRecipesByIngredient with the specified ID does not exist." })
            }
            res.status(200).json({ AllRecipesByIngredientInfo: getAllRecipesByIngredient, url: url, operation: "GET" })
        })
        .catch((err) => {
            res.status(500).json({ error: "The getAllRecipesByIngredient information could not be retrieved." + err })
        })
})


module.exports = router;
