import express from "express";
import {
  activateAccountByCode,
  forgotPassword,
  forgotPasswordAccountByCode,
  loggedInUser,
  login,
  register,
} from "../controllers/userController.js";

/// init routers
const router = express.Router();

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.post("/code-activate/", activateAccountByCode);
router.post("/forgot-password/", forgotPassword);
router.post("/forgotPasswordAccountByCode/", forgotPasswordAccountByCode);

// export default router
export default router;
