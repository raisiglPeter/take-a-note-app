// src/errors/httpErrors.ts
export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Session expired. Please log in again.") {
    super(401, message);
  }
}

export class ConflictError extends HttpError {
  constructor(message = "A conflict occurred with the existing resource.") {
    super(409, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "The requested resource was not found.") {
    super(404, message);
  }
}
