const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        await mongoose.connection.db.admin().ping();

        res.status(200).json({
            status: "healthy",
            database: "connected"
        });
    } catch (err) {
        res.status(503).json({
            status: "unhealthy",
            database: "disconnected"
        });
    }
});

module.exports = router;