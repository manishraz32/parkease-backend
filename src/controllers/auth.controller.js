import User from "../models/user.model.js";
import { formatError, renderEmailEjs } from "../utils/helperFun.js";
import { registerSchema } from "../validations/authValidations.js";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
import { generateRandomNumber } from "../utils/helperFun.js";
import fs from "fs";
import { fileURLToPath } from "url";
import * as path from "path";
import { sendMail } from "../config/emailConfig.js";

export const handleRegisterRoute = async (req, res) => {
  try {
    // console.log("generateRandomNumber", generateRandomNumber());
    const body = req.body;
    const payload = registerSchema.parse(body);
    let user = await User.findOne({ email: payload.email });
    if (user) {
      return res.status(409).json({
        errors: {
          error: "Email already exist",
        },
      });
    }

    // encript password
    const salt = await bcrypt.genSalt();
    payload.password = await bcrypt.hash(payload.password, salt);

    //
    const randomNumber = generateRandomNumber();
    const token = await bcrypt.hash(randomNumber, salt);
    const url = `${process.env.APP_URL}/api/auth/verify-email/?email=${payload.email}&token=${token}`;

    const html = await renderEmailEjs("verify-email", {
      name: payload.name,
      url: url,
    });

    await sendMail(payload.email, "verify email", html);
    console.log(html);
    user = new User({
      username: payload.username,
      email: payload.email,
      password: payload.password,
      role: payload.role,
      verifyToken: token,
    });

    await user.save();

    return res.status(201).json({
      user,
    });
  } catch (error) {
    console.log("error in register route handler", error);
    if (error instanceof ZodError) {
      const errors = formatError(error);
      return res.status(422).json({
        success: false,
        error: {
          message: "invalid data",
          errors,
        },
      });
    }
    return res.json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

export const handleVerifiyEmailRoute = async (req, res) => {
  const { email, token } = req.query;
  let user = await User.findOne({ email: email });

  if (user) {
    if (token === user.verifyToken) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          verifyToken: null,
          isEmailVerified: true,
        }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: "user not fount" });
      }
      return res.redirect(`${process.env.CLIENT_URL}/user/login`);
    }
  } else {
    return res.status(400).json({
      error: "user not found",
    });
  }

  return res.status(400).json({
    error: "user not found",
  });
};

export const handleLoginRoute = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email: email});
  if(!user) {
    return res.status(400).json({
      success: false,
      errors: {
        message: "email does not exist",
      }
    })
  }
};
