import { Hono } from "hono"
import { router } from "./modules"
import "./shared/env"
import { logger } from "hono/logger"

const app = new Hono()
  .use(logger())
  .route("/", router)

export default app