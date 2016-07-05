export function invariant(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}
