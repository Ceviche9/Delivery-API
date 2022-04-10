import {Request, Response} from "express"
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase"

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const {deliveryman_id} = request

    if(!deliveryman_id) return response.status(401).json({message: "Token is missing."})

    const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase()

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(deliveryman_id)

    return response.json(deliveries)
  }
}