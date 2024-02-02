import pino from "pino";

const pinoConfig = {
  browser: {
    asObject: true,
  },
  transport: {
    target: "pino-pretty",
  },
};

const logger = pino(pinoConfig);
export default logger;
