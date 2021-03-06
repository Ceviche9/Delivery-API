import { prisma } from "../../../../database/prismaClient" 
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken" 

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({username, password}: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!client) throw new Error("Invalid username or password")

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) throw new Error("Invalid username or password")

    const token = sign({username}, "4503988503f34d01d0096d4a61b78b06", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token
  }
}