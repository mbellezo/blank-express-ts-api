import pino from "pino"

export const logger = pino({
  name: 'ts-api',
  prettyPrint: process.env.NODE_ENV === 'development',
  level: 'debug'
});