const winston = require('winston');
const path = require('path');

const logDirectory = 'logs'; // ชื่อโฟลเดอร์ที่เก็บไฟล์ log
const logFilePath = path.join(logDirectory, 'server.log');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath })
  ]
});

module.exports = logger;
