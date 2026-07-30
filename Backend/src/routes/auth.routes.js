// const { Router } = require("express");
const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");
const { verifyToken } = require("../middlewares/auth.middleware.js");


router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", verifyToken, authController.profile);
// router.get("/logout", verifyToken, authController.logout);

module.exports = router;
