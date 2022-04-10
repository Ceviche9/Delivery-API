import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export async function ensureIsAuthenticatedClient(
  request: Request, 
  response: Response, 
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) return response.status(401).json({ message: "Token is missing"})

  const [, token] = authHeader.split(" ");

  try {

    const { sub } = verify(token, "4503988503f34d01d0096d4a61b78b06") as IPayload

    request.client_id = sub
  
    next()
  } catch(err) {
    return response.status(401).json({ message: "Token is invalid"})
  }
}