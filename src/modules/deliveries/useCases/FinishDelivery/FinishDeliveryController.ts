import {Request, Response} from "express"
import { FinishDeliveryUseCase } from "./FinishDeliveryUseCase"

export class FinishDeliveryController {
  async handle(request: Request, response: Response) {
    const {deliveryman_id} = request
    const { id } = request.params

    if(!deliveryman_id) return response.status(401).json({message: "Token is missing."})

    const finishDeliveryUseCase = new FinishDeliveryUseCase()

    const result = await finishDeliveryUseCase.execute({deliveryman_id, delivery_id: id})

    return response.json(result)
  }
}