import {Request, Response} from "express"
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase"

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const {item_name} = request.body
    const { client_id } = request

    if(!client_id) return response.status(401).json({message: "Token is missing."})

    const createDeliveryUseCase = new CreateDeliveryUseCase()

    const delivery = await createDeliveryUseCase.execute({item_name, client_id})

    return response.json(delivery)
  }
}