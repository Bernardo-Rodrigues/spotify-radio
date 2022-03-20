import config from "./config.js";
import server from "./server.js";
import { logger } from "./util.js"


server().listen(config.port)
.on('listening', () => logger.info(`server running at ${config.port}!!`))

process.on('uncaughtException', (error) => logger.error(`uncaughtException happened: ${error.stack || error}`))
process.on('unhandledRejection', (error) => logger.error(`unhandledRejection happened: ${error.stack || error}`))