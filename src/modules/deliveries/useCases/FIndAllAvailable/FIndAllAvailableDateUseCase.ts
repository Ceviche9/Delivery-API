import { prisma } from "../../../../database/prismaClient"

export class FIndAllAvailableUseCase {
  async execute() {
    return await prisma.deliveries.findMany({
      where: {
        finished_at: null,
        deliveryman_id: null
      }
    })
  }
}