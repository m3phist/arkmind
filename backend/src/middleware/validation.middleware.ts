import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);  // Perform the validation
      next();  // Validation successful, move to next middleware/controller
    } catch (err) {
      if (err instanceof ZodError) {
        // If validation fails, send a 400 response with errors
        res.status(400).json({ errors: err.errors });
      } else {
        // Pass any other error to the next error handler
        next(err);
      }
    }
  };
};
