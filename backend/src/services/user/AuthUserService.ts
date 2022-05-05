import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // verify email exists
    const user = await prismaClient.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    // verify password is correct
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }

    // generate JWT
    const token = sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
