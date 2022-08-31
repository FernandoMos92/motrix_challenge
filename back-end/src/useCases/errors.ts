export class ContentNotFoundError extends Error {

  constructor(id: number) {
    super(`Content id:${id} not found`);

    Object.setPrototypeOf(this, ContentNotFoundError.prototype);
  }
}