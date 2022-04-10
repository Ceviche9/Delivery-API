import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string
}

export class CreateDeliverymanUseCase {

  async execute({username, password}: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          // Para trazer somente os clients ignorando letras maiúsculas ou minusculas
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if(deliverymanExists) {
      throw new Error("Client already exists")
    }

    const hashPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return deliveryman
  }
}