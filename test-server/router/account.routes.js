import express from "express";
import {
  VerifyEmailController,
  authLoginController,
  authRegisterController,
  authRegisterUserExists,
  loginRequiredController,
  registerRequiredController,
} from "../controllers/Auth/auth.controller.js";


const AccountRouter = express.Router();

AccountRouter.post(
  "/onboard",
  registerRequiredController,
  authRegisterUserExists,
  authRegisterController
);
AccountRouter.post("/auth", loginRequiredController, authLoginController);


export default AccountRouter;
