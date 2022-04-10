import {Request, Response} from "express"
import { AddDeliverymanUseCase } from "./AddDeliverymanUseCase"

export class AddDeliverymanController {
  async handle(request: Request, response: Response) {
    const {deliveryman_id} = request
    const { id } = request.params

    if(!deliveryman_id) return response.status(401).json({message: "Token is missing."})

    const addDeliverymanUseCase = new AddDeliverymanUseCase()

    const result = await addDeliverymanUseCase.execute({deliveryman_id, delivery_id: id})

    return response.json(result)
  }
}