export class CanceledError extends Error {
  constructor() {
    super('Operation cancelled.');
  }
}
