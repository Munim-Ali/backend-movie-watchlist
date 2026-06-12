import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required." });
    }

    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists." });
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    //Generate JWT Token
    const token = generateToken(user.id, res);

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user.id,
          name: name,
          email: email,
        },
        token: token,
      },
    });
  } catch (error) {
    console.error("Error in registerController: ", error);
    res.status(500).json({ message: error.message, error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    //verify password
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    //Generate JWT Token
    const token = generateToken(userExist.id, res);

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: userExist.id,
          email: userExist.email,
        },
        token: token,
      },
    });
  } catch (error) {
    console.error("Error in loginController: ", error);
    res.status(500).json({ message: error.message, error });
  }
};

const logoutController = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully." });
};

export { registerController, loginController, logoutController };
