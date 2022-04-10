import {Request, Response} from "express"
import { FIndAllAvailableUseCase } from "./FIndAllAvailableDateUseCase"

export class FIndAllAvailableController { 
  async handle(request: Request, response: Response) {
    const fIndAllAvailableUseCase = new FIndAllAvailableUseCase()

    const deliveries = await fIndAllAvailableUseCase.execute()

    return response.json(deliveries)
  }
}