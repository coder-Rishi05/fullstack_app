import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
  }

  const isUserAlreadyExist = await User.findOne({ email });

  if (isUserAlreadyExist)
    return res.status(400).json({ message: "user already exist" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  // generating jwt
  // jb bhi data yhan dete han vo unique format me dena pdta hai isliye id dete han
  // now the 2nd thing to be given is jwt secret it can be generated.
  const token = jwt.sign(
    {
      id: user._id,
    },
    "b722f45b54cbec70c9e40d4d91fc47daaadfde55"
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user registered sucessfully",
    user: {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
  // password knbhi nhi bhejte because of security
};
