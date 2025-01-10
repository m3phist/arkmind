import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';

const mkdir = util.promisify(fs.mkdir);

// Get current date for file naming (format YYYY-MM-DD)
const getFormattedDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

// Global flag to track if the log directory has been checked already
let logDirectoryChecked = false;

// Function to ensure the log directory exists (run only once)
const ensureLogDirectoryExists = async (dirPath: string) => {
  if (logDirectoryChecked) return;  // Skip if directory already checked

  try {
    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
      // Create the directory with 755 permissions (rwxr-xr-x)
      await mkdir(dirPath, { recursive: true });
      console.log(`Created log directory: ${dirPath}`);
    }
    logDirectoryChecked = true;  // Mark directory check as done
  } catch (err) {
    console.error('Error ensuring log directory exists', err);
  }
};

// Logger setup
const createLogger = async (functionName: string) => {
  const logDir = path.join(__dirname, `../../logs`); // Logs directory path
  await ensureLogDirectoryExists(logDir);  // Ensure the logs directory exists once

  return winston.createLogger({
    level: 'info',
    transports: [
      // File transport to save logs in function_name_date.log format at the root
      new winston.transports.File({
        filename: path.join(logDir, `${functionName}_${getFormattedDate()}.log`), // Log file path
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}] ${message}`;
          })
        ),
      }),
      // Console transport for development purposes (optional)
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
      }),
    ],
  });
};

export default createLogger;
