export type ExceptionData = {
  status?: string;
  statusCode?: number;
  message: string;
};

export class Exception extends Error {
  constructor(data: ExceptionData) {
    super(data.message);
    this.name = String(data.status || data.statusCode || 'ServerError');
    this.message = data.message;
  }
}
