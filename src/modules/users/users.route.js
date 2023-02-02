import express from "express";
import { signIn, signUp } from "./users.controler.js";

const auth = express.Router();

auth.post("/user/signup", signUp);
auth.post("/user/signin", signIn);

export default auth;
