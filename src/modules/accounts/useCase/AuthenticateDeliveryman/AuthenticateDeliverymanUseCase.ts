import { prisma } from "../../../../database/prismaClient" 
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken" 

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({username, password}: IAuthenticateClient) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if(!deliveryman) throw new Error("Invalid username or password")

    const passwordMatch = await compare(password, deliveryman.password)

    if(!passwordMatch) throw new Error("Invalid username or password")

    const token = sign({username}, "4503988503f312320096d4a61b78b06", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token
  }
}