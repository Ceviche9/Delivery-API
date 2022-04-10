import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    return prisma.clients.findMany({ 
      where: {
        id: client_id
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    })
  }
}