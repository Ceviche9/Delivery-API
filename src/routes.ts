import { Router } from "express"
import { ensureIsAuthenticatedClient } from "./middlewares/ensureAuthenticate/ensureIsAuthenticatedClient";
import { ensureIsAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticate/ensureIsAuthenticatedDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/useCase/AuthenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/useCase/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from './modules/clients/useCases/CreateClient/CreateClientController';
import { FindAllDeliveriesController } from "./modules/clients/useCases/Deliveries/FindAllDeliveriesController";
import { AddDeliverymanController } from "./modules/deliveries/useCases/AddDeliveryman/AddDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDelivery/CreateDeliveryController";
import { FIndAllAvailableController } from "./modules/deliveries/useCases/FIndAllAvailable/FIndAllAvailableDateController";
import { FinishDeliveryController } from "./modules/deliveries/useCases/FinishDelivery/FinishDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/UseCases/CreateDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/UseCases/FindAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router()

const createClientController  = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const fIndAllAvailableController = new FIndAllAvailableController()
const addDeliverymanController = new AddDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const finishDeliveryController = new FinishDeliveryController()

routes.post("/client", createClientController.handle)
routes.get("/client/deliveries", ensureIsAuthenticatedClient, findAllDeliveriesController.handle)

routes.post("/deliveryman/", createDeliverymanController.handle)
routes.get("/deliveryman/deliveries", 
  ensureIsAuthenticatedDeliveryman, 
  findAllDeliveriesDeliverymanController.handle
)

routes.post("/session/client", authenticateClientController.handle)
routes.post("/session/deliveryman", authenticateDeliverymanController.handle)

routes.post("/delivery", ensureIsAuthenticatedClient, createDeliveryController.handle)

routes.get("/delivery/available", ensureIsAuthenticatedDeliveryman, fIndAllAvailableController.handle)
routes.put("/delivery/add-deliveryman/:id",
  ensureIsAuthenticatedDeliveryman, 
  addDeliverymanController.handle
)

routes.put("/delivery/finish/:id", 
  ensureIsAuthenticatedDeliveryman,
  finishDeliveryController.handle
)

export { routes }