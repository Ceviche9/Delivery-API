import {Request, Response} from "express"
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase"

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const {client_id} = request

    if(!client_id) return response.status(401).json({message: "Token is missing."})

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()

    const deliveries = await findAllDeliveriesUseCase.execute(client_id)

    return response.json(deliveries)
  }
}