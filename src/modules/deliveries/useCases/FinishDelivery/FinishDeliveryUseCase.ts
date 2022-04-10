import { prisma } from "../../../../database/prismaClient"

interface IFinishDelivery {
  delivery_id: string
  deliveryman_id: string
}

export class FinishDeliveryUseCase {
  async execute({deliveryman_id, delivery_id}: IFinishDelivery) {
    const delivery = await prisma.deliveries.update({
      where: {
          link_delivery_deliveryman: {
              id: delivery_id,
              deliveryman_id
          }
      },
      data: {
        finished_at: new Date(),
      }
    });

    return delivery
  }
}