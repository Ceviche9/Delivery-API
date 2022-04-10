import { prisma } from "../../../../database/prismaClient"

interface IAddDeliveryman{
  delivery_id: string
  deliveryman_id: string
}

export class AddDeliverymanUseCase {
  async execute({deliveryman_id, delivery_id}: IAddDeliveryman) {
    const result = await prisma.deliveries.update({
      where: {
        id: delivery_id
      },
      data: {
        deliveryman_id
      }
    })

    return result
  }
}